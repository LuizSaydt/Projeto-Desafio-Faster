import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";
import { schema, rules } from "@ioc:Adonis/Core/Validator";

const authSignUpSchema = schema.create({
  fullName: schema.string({trim: true}),
  username: schema.string({trim: true}, [rules.unique({table: "users", column: "username"})]),
  password: schema.string()
});

const authSignInSchema = schema.create({
  username: schema.string(),
  password: schema.string(),
  rememberMe: schema.boolean.optional()
});

export default class AuthController {

  public async check({ auth }: HttpContextContract){
    return auth.user;
  }

  public async signIn({ request, response, auth }: HttpContextContract){
    const { username, password, rememberMe } = await request.validate({ schema: authSignInSchema });
    try {

      await auth.attempt(username, password, rememberMe);

    } catch (error) {

      return response.status(400).json({ message: "Username os password is incorrect" });

    }
  }

  public async signUp({ request, response, auth }: HttpContextContract){
    try {

      const data = await request.validate({ schema: authSignUpSchema });
      const user = await User.create(data);
      await auth.login(user);
      return user;
    } catch(e) {

      console.log(e);
      return response.internalServerError("Error while trying to register the user");

    }
  }

  public async signOut({ response, auth }: HttpContextContract){
    await auth.logout();
    return response.json({ message: "User signed out" });
  }

}
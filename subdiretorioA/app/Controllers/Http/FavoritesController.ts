import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";
import Drink from "App/Models/Drink";

export default class FavoritesController {

  //* Get all favorite drinks from user
  public async all({ response, auth }: HttpContextContract){
    let user: User;
    try {

      user = await auth.use("web").authenticate();
      if (!user) return response.unauthorized("User must be logged in");

      const favorites = await User.find(user.id);
      return favorites?.related("favorites").query().select(["id"]);
    } catch (e) {

      console.log(e);
      return response.internalServerError("Error while trying to get the resources from the database");

    }
  }

  //* Favorite a new Drink
  public async favoriteDrink({ request, response, auth }: HttpContextContract){
    let user: User;
    try {

      user = await auth.use("web").authenticate();
      if (!user) return response.unauthorized("User must be logged in");

      const drink_id = parseInt(request.param("id"));
      if (isNaN(drink_id)) return response.badRequest("The route expects an integer value corresponding to a drink id");
      const drink = await Drink.find(drink_id);
      if (!drink) return response.badRequest("Drink not found");

      await user
        .related("favorites")
        .attach([drink.id]);

    } catch (e) {

      console.log(e);
      return response.internalServerError("Error while trying to save the resource on the database");

    }
  }

  //* Unfavorite a Drink
  public async unFavoriteDrink({ request, response, auth }: HttpContextContract){
    let user: User;
    try {

      user = await auth.use("web").authenticate();
      if (!user) return response.unauthorized("User must be logged in");

      const drink_id = parseInt(request.param("id"));
      if (isNaN(drink_id)) return response.badRequest("The route expects an integer value corresponding to a drink id");
      const drink = await Drink.find(drink_id);
      if (!drink) return response.badRequest("Drink not found");

      await user
        .related("favorites")
        .detach([drink.id]);

    } catch (e) {

      console.log(e);
      return response.internalServerError("Error while trying to remove the resource on the database");

    }
  }

}
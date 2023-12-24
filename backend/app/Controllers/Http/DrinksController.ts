import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Drink from "App/Models/Drink";
import DrinksImage from "App/Models/DrinksImage";

export default class DrinksController {

  public async all({ response }: HttpContextContract){
    try {

      const drinks = await Drink.query().preload("image", (teste) => {teste.select("id");});
      return drinks;

    } catch (e) {

      console.log(e);
      return response.internalServerError("Error while trying to get the resources from the database");

    }
  }

  public async image({ request, response }: HttpContextContract){
    try {

      const id = parseInt(request.param("id"));
      if (isNaN(id)) return response.badRequest("The route expects an integer value corresponding to a drink image id");

      return await DrinksImage.find(id);

    } catch (e) {

      console.log(e);
      return response.internalServerError("Error while trying to get the resources from the database");

    }
  }

  public async imageBase64({ request, response }: HttpContextContract){
    try {

      const id = parseInt(request.param("id"));
      if (isNaN(id)) return response.badRequest("The route expects an integer value corresponding to a drink image id");

      const imageBuffer = await DrinksImage.find(id);
      if (imageBuffer) {
        return Buffer.from(imageBuffer?.image).toString("base64");
      } else {
        return "";
      }

    } catch (e) {

      console.log(e);
      return response.internalServerError("Error while trying to get the resources from the database");

    }
  }

}

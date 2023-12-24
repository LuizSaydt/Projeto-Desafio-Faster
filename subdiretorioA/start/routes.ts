/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from "@ioc:Adonis/Core/Route";

Route.get("/", async () => {
  return { hello: "world" };
});

Route.get("/auth", "AuthController.check");
Route.post("/auth/sign-in", "AuthController.signIn");
Route.post("/auth/sign-up", "AuthController.signUp");
Route.post("/auth/sign-out", "AuthController.signOut");

Route.get("favorite", "FavoritesController.all");
Route.post("favorite/:id", "FavoritesController.favoriteDrink");
Route.patch("favorite/:id", "FavoritesController.unFavoriteDrink");

Route.get("drinks", "DrinksController.all");
Route.get("drink-image/:id", "DrinksController.image");
Route.get("drink-image-base64/:id", "DrinksController.imageBase64");
import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import DrinksImage from "App/Models/DrinksImage";
import { readFileSync } from "fs";
import path from "path";

const image1 = readFileSync(path.resolve(__dirname, "drinkImages/drink1.jpg"));
const image2 = readFileSync(path.resolve(__dirname, "drinkImages/drink2.jpg"));
const image3 = readFileSync(path.resolve(__dirname, "drinkImages/drink3.jpg"));
const image4 = readFileSync(path.resolve(__dirname, "drinkImages/drink4.jpg"));
const image5 = readFileSync(path.resolve(__dirname, "drinkImages/drink5.jpg"));
const image6 = readFileSync(path.resolve(__dirname, "drinkImages/drink6.jpg"));

export default class extends BaseSeeder {
  public async run () {
    await DrinksImage.createMany([
      {
        image: image1,
        drinkId: 1
      },
      {
        image: image2,
        drinkId: 2
      },
      {
        image: image3,
        drinkId: 3
      },
      {
        image: image4,
        drinkId: 4
      },
      {
        image: image5,
        drinkId: 5
      },
      {
        image: image6,
        drinkId: 6
      }
    ]);
  }
}

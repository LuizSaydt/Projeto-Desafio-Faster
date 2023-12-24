import { DateTime } from "luxon";
import { BaseModel, column, hasOne, HasOne, manyToMany, ManyToMany } from "@ioc:Adonis/Lucid/Orm";
import DrinksImage from "./DrinksImage";
import User from "./User";

export default class Drink extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public name: string;

  @column()
  public description: string;

  @column()
  public category: string;

  @hasOne(() => DrinksImage, { foreignKey: "drinkId" })
  public image: HasOne<typeof DrinksImage>;

  @manyToMany(() => User, {
    pivotTable: "favorites"
  })
  public favorites: ManyToMany<typeof User>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}

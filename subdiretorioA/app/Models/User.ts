import { DateTime } from "luxon";
import { BaseModel, ManyToMany, beforeSave, column, manyToMany } from "@ioc:Adonis/Lucid/Orm";
import Hash from "@ioc:Adonis/Core/Hash";
import Drink from "./Drink";

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public fullName: string;

  @column()
  public username: string;

  @column({ serializeAs: null })
  public password: string;

  @manyToMany(() => Drink, {
    pivotTable: "favorites"
  })
  public favorites: ManyToMany<typeof Drink>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @beforeSave()
  public static async hashPassword (user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password);
    }
  }
}

import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class DrinksImage extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public image: Buffer; //* Mysql BLOBs are binary strings

  @column()
  public drinkId: number; //* ID of the drink for relationship

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}

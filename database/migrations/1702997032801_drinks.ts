import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "drinks";

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.string("name", 100).unique().notNullable(); //* Unique name of the drink with a limit of 100 characters
      table.text("description").notNullable(); //* Description of the drink
      table.string("category").notNullable();

      table.timestamp("created_at", { useTz: true });
      table.timestamp("updated_at", { useTz: true });
    });
  }

  public async down () {
    this.schema.dropTable(this.tableName);
  }
}

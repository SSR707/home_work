import knex from "./db.js";

export const createTebals = async () => {
  try {
    await knex.schema.createTable("users", (table) => {
      table.increments("id").primary();
      table.string("username");
      table.string("email").unique().notNullable();
      table.string("password");
      table.timestamp("data_created").defaultTo(knex.fn.now());
      table.string("googleId");
      table.boolean("is_active").defaultTo(false);
      table.enu("role", ["user","admin"]).defaultTo("student");
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    });

    await knex.schema.createTable("posts", (table) => {
      table.increments("id").primary();
      table.integer("user_id").references("id").inTable("users").onDelete("CASCADE");
      table.string("title");
      table.text("body");
      table.integer("category_id").references("id").inTable("categories").onDelete("CASCADE");
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    });

    await knex.schema.createTable("comments", (table) => {
      table.increments("id").primary();
      table.integer("post_id").references("id").inTable("posts").onDelete("CASCADE");
      table.integer("user_id").references("id").inTable("users").onDelete("CASCADE");
      table.text("body");
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    });

    await knex.schema.createTable("categories", (table) => {
      table.increments("id").primary();
      table.string("name");
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    });

    await knex.schema.createTable("tags", (table) => {
      table.increments("id").primary();
      table.string("name");
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    });

    await knex.schema.createTable("posttags ", (table) => {
      table.increments("id").primary();
      table.integer("post_id").references("id").inTable("posts").onDelete("CASCADE");
      table.integer("tag_id").references("id").inTable("tags").onDelete("CASCADE");
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    });

    await knex.schema.createTable('otp',  (table) =>{
      table.increments("uuid").primary();
      table.integer("user_id").notNullable().references("id").inTable("users").onDelete("CASCADE");
      table.string("otp_code").notNullable()
      table.timestamp("expires_at").notNullable().defaultTo(knex.raw("now() + interval '10 minutes'"));
  });
  } catch (error) {
    throw error;
  } finally {
    knex.destroy();
  }
};

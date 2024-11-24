import knex from "./db.js";

export const createTebals = async () => {
  try {
    await knex.schema.createTable("users", (table) => {
      table.increments("id").primary();
      table.string("name");
      table.string("email").unique().notNullable();
      table.string("password").notNullable();
      table.timestamp("data_created").defaultTo(knex.fn.now());
      table.string("last_login");
      table.boolean("is_active").defaultTo(false);
      table.enu("role", ["student", "teacher", "admin"]);
    });

    await knex.schema.createTable("teacher", (table) => {
      table.increments("id").primary();
      table.string("name");
      table.integer("user_id").notNullable();
    });

    await knex.schema.createTable("students", (table) => {
      table.increments("id").primary();
      table.boolean("promission").notNullable();
      table.integer("user_id");
    });

    await knex.schema.createTable("assignment", (table) => {
      table.increments("id").primary();
      table.integer("course_id").notNullable();
      table.integer("student_id").notNullable();
      table.integer("teacher_id").notNullable();
    });

    await knex.schema.createTable("courses", (table) => {
      table.increments("id").primary();
      table.string("name");
      table.string("desc");
      table.time("start_time");
      table.time("end_time");
    });
    await knex.schema.createTable("otp", (table) => {
      table.increments("id").primary();
      table.string("otp_code").notNullable();
      table.integer("user_id").notNullable();
      table.timestamps('expires_at').defaultTo(knex.raw("DATE_ADD(NOW(), INTERVAL 10 MINUTE)"))
    });
  } catch (error) {
    throw error;
  } finally {
    knex.destroy();
  }
};

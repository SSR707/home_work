import knex from "./db.js";

export const createTebals = async () => {
  try {
    await knex.schema.createTable("users", (table) => {
      table.increments("id").primary();
      table.string("name");
      table.string("email").unique().notNullable();
      table.string("password");
      table.timestamp("data_created").defaultTo(knex.fn.now());
      table.string("googleId");
      table.boolean("is_active").defaultTo(false);
      table.enu("role", ["student", "teacher", "admin"]).defaultTo("student");
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
      table
        .timestamp("expires_at")
        .defaultTo(knex.raw("CURRENT_TIMESTAMP + interval '10 minutes'"));
    });
    
    await knex.schema.createTable("lesson", (table) => {
      table.increments("id").primary();
      table.string("lesson_name");
      table.integer("homework_id").notNullable();
      table.string("vidio");
      table.string("homework");
      table.string("room");
      table.time("start_time");
      table.time("end_time");
    });

    await knex.schema.createTable("homework", (table) => {
      table.increments("id").primary();
      table.string("text");
      table.integer("user_id").notNullable();
      table.string("file");
      table.string("link");
      table.string("grads");
      table.time("start_time");
      table.time("end_time");
    });
  } catch (error) {
    throw error;
  } finally {
    knex.destroy();
  }
};

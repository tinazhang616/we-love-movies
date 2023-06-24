
exports.up = function(knex) {
  return knex.schema.createTable("reviews",(t)=>{
    t.increments("review_id").primary();
    t.text("content");
    t.integer("score");
    t.integer("critic_id").unsigned().notNullable();
    t.foreign("critic_id")
    .references("critic_id")
    .inTable("critics")
    .onDelete("cascade");
    t.integer("movie_id").unsigned().notNullable();
    t.foreign("movie_id")
    .references("movie_id")
    .inTable("movies")
    .onDelete("cascade")
    t.timestamps(true,true)
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable("reviews");
};

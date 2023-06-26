
exports.up = function(knex) {
  return knex.schema.createTable("movies_theaters",(t)=>{
    t.integer("movie_id").unsigned().notNullable();
    t.foreign("movie_id")
    .references("movie_id")
    .inTable("movies")
    .onDelete("cascade");
    t.integer("theater_id")
    .references("theater_id")
    .inTable("theaters")
    .onDelete("cascade")
    t.boolean("is_showing").defaultTo(true)
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable("movies_theaters")
  
};

const knex = require("../db/connection")
const mapProperties = require("../utils/map-properties")
const reduceProperties = require("../utils/reduce-properties")

const findTheaters = reduceProperties("theater_id",{
    "movie_id":["movies",null,"movie_id"],
    "title":["movies",null,"title"],
    "runtime_in_minutes":["movies",null,"runtime_in_minutes"],
    "rating":["movies",null,"rating"],
    "description":["movies",null,"description"],
    "image_url":["movies",null,"image_url"],
    "created_at":["movies",null,"created_at"],
    "updated_at":["movies",null,"updated_at"],
    "is_showing":["movies",null,"is_showing"],
    "theater_id":["movies",null,"theater_id"]
})

function list(){
    return knex("theaters as t")
    .join("movies_theaters as mt","t.theater_id","mt.theater_id")
    .join("movies as m","m.movie_id","mt.movie_id")
    .select("t.*","m.*","mt.is_showing")
    .then(data=>findTheaters(data))
}

module.exports={
    list,
}
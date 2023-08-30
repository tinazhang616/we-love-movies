const { response } = require("../app")
const knex = require("../db/connection")
const mapProperties = require("../utils/map-properties")

const addCategory = mapProperties({
    critic_id: "critic.critic_id",
    preferred_name: "critic.preferred_name",
    surname:"critic.surname",
    organization_name:"critic.organization_name",
    created_at:"critic.created_at",
    updated_at:"critic.updated_at"
});

function list(){
    return knex("movies").select("*")
}

function movieIsShowing(){
    return knex("movies as m")
    .join("movies_theaters as mt","m.movie_id","mt.movie_id")
    .select("m.movie_id","m.title","m.runtime_in_minutes","m.rating","m.description","m.image_url")
    .distinct("m.title")
    .where({"mt.is_showing":true})
}
function read(movie_id){
    return knex("movies").select("*").where({"movie_id":movie_id}).first()
}
function movieInTheater(movie_id){
    return knex("movies as m")
    .join("movies_theaters as mt","m.movie_id","mt.movie_id")
    .join("theaters as t","t.theater_id","mt.theater_id")
    .select("t.*","mt.is_showing","m.movie_id")
    .where({"m.movie_id":movie_id})
}
function movieReviews(movie_id){
    return knex("movies as m")
    .join("reviews as r","m.movie_id","r.movie_id")
    .join("critics as c","c.critic_id","r.critic_id")
    .select("r.*","r.critic_id as critic_id","r.created_at as created_at","r.updated_at as updated_at","c.*")
    .where({"m.movie_id":movie_id})
    .then(movies=>movies.map(movie=>addCategory(movie)))
}

module.exports={
    list,
    read,
    movieIsShowing,
    movieInTheater,
    movieReviews
}
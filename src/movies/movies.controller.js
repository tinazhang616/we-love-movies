const moviesService=require("./movies.service")
const asyncErrorBoundary =require("../error/asyncErrorBoundary")

async function movieExists(req,res,next){
    const {movieId}=req.params;
    const movie = await moviesService.read(movieId)
    if(movie){
        res.locals.movie=movie;
        next()
    }
    next({
        status:404,
        message:"Movie cannot be found."
    })
}
function read(req,res){
    const {movie:data} = res.locals;
    res.json({data})
}
async function list(req,res){
    const isShowing=req.query.is_showing;
    let data;
    if(isShowing){
        data = await moviesService.movieIsShowing()
    }else{
        data = await moviesService.list()
    }
    res.json({data})
}
async function movieInTheater(req,res){
    const movie_id=req.params.movieId
    const data = await moviesService.movieInTheater(movie_id)
    res.json({data})
}
async function movieReviews(req,res){
    const data = await moviesService.movieReviews(req.params.movieId)
    res.json({data})
}

module.exports = {
    list:asyncErrorBoundary(list),
    read:[asyncErrorBoundary(movieExists),read],
    movieInTheater:asyncErrorBoundary(movieInTheater),
    movieReviews:asyncErrorBoundary(movieReviews),

    }
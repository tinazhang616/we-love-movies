const router = require("express").Router();
const controller = require("./movies.controller")
const methodNotAllowed = require("../error/methodNotAllowed")

router.route("/").get(controller.list).all(methodNotAllowed)
router.route("/:movieId").get(controller.read).all(methodNotAllowed)
router.route("/:movieId/theaters").get(controller.movieInTheater).all(methodNotAllowed)
router.route("/:movieId/reviews").get(controller.movieReviews).all(methodNotAllowed)



module.exports=router
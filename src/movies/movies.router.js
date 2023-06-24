const router = require("express").Router();
const controller = require("./movies.controller")
const methodNotAllowed = require("../error/methodNotAllowed")

router.route("/movies").get(controller.list).all(methodNotAllowed)

module.exports=router
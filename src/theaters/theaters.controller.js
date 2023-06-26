const theatersService = require("./theaters.service")
const asyncErrorBoundary = require("../error/asyncErrorBoundary")

async function list(req,res){
    const data = await theatersService.list();
    res.json({data})
}

module.exports = {
    list:asyncErrorBoundary(list),
}
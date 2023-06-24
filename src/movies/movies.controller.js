const moviesService=require("./movies.service")

async function list(req,res){
    const data = await moviesService.list()
    res.json({data})
    
}

module.exports = {
    list,
}
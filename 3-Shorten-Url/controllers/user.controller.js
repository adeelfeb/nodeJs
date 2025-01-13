const mongoose = require("mongoose")


const handleGetUser = (req, res)=>{
    console.log(req.body)
    return res.status(200).json({Message: "successful"})
}


module.exports = {
    handleGetUser
}
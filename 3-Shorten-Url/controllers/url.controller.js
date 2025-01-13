const Url = require("../models/url.model")
const {nanoid} = require("nanoid")

const handleGetUrl = async(req, res)=>{
    const shortId = nanoid(8)
    await Url.create()    
}

module.exports = {
    handleGetUrl
}
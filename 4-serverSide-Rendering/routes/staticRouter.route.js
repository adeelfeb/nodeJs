const express = require("express")
const Url= require("../models/url.model")

const staticRouter = express.Router()

staticRouter.get("/", async (req, res)=>{
    const allUrls = await Url.find({})

    return res.render("home", {
        urls: allUrls
    })
})

module.exports = staticRouter
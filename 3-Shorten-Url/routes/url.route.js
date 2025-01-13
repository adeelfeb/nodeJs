const express = require("express")
const {handleGetUrl} = require('../controllers/url.controller')
const urlRouter = express.Router()

urlRouter.route("/")
.get(handleGetUrl)
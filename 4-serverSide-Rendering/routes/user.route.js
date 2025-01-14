const express = require("express")
const {handleGetUser} = require("../controllers/user.controller")

const userRouter = express.Router()

userRouter.route("/")
.get(handleGetUser)


module.exports  = {
    userRouter
}
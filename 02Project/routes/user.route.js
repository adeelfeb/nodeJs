const express = require("express")
const {handleGetAllUsers, handleUpdateUser, handleDeleteUser, handleGetUser, handlePostUser } = require("../controllers/user.controller")

const router = express.Router()


    
    router.route("/:id")
    .get(handleGetUser)
    .patch(handleUpdateUser)
      .delete(handleDeleteUser);
      
    
    router.route("/")
    .get(handleGetAllUsers)
    .post(handlePostUser)
    

    module.exports = router
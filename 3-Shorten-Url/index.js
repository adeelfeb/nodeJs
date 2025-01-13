const express = require("express")
const { get } = require("mongoose")
const {userRouter} = require("./routes/user.route")
const {connectDb} = require("./connectionDb")
const app = express()

const PORT = 8000 // this will be taken from the .env file but for now using this way

connectDb("mongodb://127.0.0.1:27017/usersdb3")
app.use(express.urlencoded({extended: false}))
app.use("/api/user", userRouter)


app.listen(PORT, ()=>{
    console.log(`Server running on Port:${PORT}`)
})

const express = require("express")

const app = express()

app.route("/").get( (req, res)=>{
    console.log("Home page accessed")
    res.status(200).json({message: "everything went well"})
})


app.listen(8000, (err)=>{
    try {
        
        console.log(`Now listening on port 8000`)
    } catch (error) {
        console.log(error.message)
    }
})

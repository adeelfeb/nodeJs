const express = require("express");
const {connectDb} = require("./connection.js")
const {logReqRes} = require("./middleware/logFile.middleware.js")


const app = express();
const PORT = 8000;
connectDb("mongodb://127.0.0.1:27017/usersdb")

// midddleware for the encoded data posted on the req
app.use(express.urlencoded({extended: false}))
app.use(logReqRes('log.txt'))

app.route("/").get((req, res) => {
  //   console.log("Home page accessed");
    res.status(200).json({ message: "Everything went well" });
  });
  


const userRouter = require("./routes/user.route.js")

app.use("/api/user", userRouter)

app.listen(PORT, (err) => {
  try {
    if (err) throw err;  // In case of an error in app.listen
    console.log(`Now listening on port ${PORT}`);
  } catch (error) {
    console.log(error.message);
  }
});

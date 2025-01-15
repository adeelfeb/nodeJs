// Load environment variables from .env file
require('dotenv').config();

// Import required modules
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { pathToFileURL } = require('url');
const path = require("path");
const multer = require('multer');


// Create an Express application
const app = express();

// Disk Storage for multer
const storage = multer.diskStorage({
    destination: function (req, file, cb){
        return cb(null, "./uploads")
    },
    filename: function (req, file, cb){
        return cb(null, `${Date.now()}-${file.originalname}`)
    }
})


const upload = multer({storage})
// setting the view for the server side view rendering 

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))
// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(morgan('dev')); // Log HTTP requests to the console
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Define a port (default to 3000 if not specified in .env)
const PORT = process.env.PORT || 3000;

// Example route
app.get('/', (req, res) => {
    res.render("home")
});

app.post("/upload", upload.single('uploadImage'), (req, res)=>{
    console.log(req.body)
    console.log(req.file)

    return res.redirect("/")
})

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});


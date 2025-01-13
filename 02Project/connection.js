const mongoose = require("mongoose");

async function connectDb(url) {
    return mongoose.connect(url)
      .then(() => console.log("MongoDB Connected"))
      .catch((err) => console.log(`Error while connecting to DB: ${err.message}`));
}

module.exports = {connectDb}
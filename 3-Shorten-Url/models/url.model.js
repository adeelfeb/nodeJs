const mongoose = require("mongoose")

const urlSchema = new mongoose.Schema({
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    redirectUrl: {
      type: String,
      required: true,
    },
    visitHistory: [
      {
        timeStamp: { type: Date }, // Use Date instead of String
        
      },
    ],
  }, { timestamps: true });
  

const Url  = mongoose.model("Url", urlSchema)

module.exports = Url
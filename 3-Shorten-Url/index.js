const express = require("express");
const cors = require("cors"); // Import the CORS package
const { connectDb } = require("./connectionDb");
const urlRouter = require("./routes/url.route");
const Url = require("./models/url.model");

const app = express();

const PORT = 8000;

connectDb("mongodb://127.0.0.1:27017/usersdb3");

app.use(cors()); // Enable CORS
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/url", urlRouter);

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await Url.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visitHistory: {
          timeStamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectUrl);
});

app.listen(PORT, () => {
  console.log(`Server running on Port:${PORT}`);
});

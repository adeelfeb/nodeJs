const express = require("express");

// Initialize the Express app
const app = express();

// Middleware to log requests
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next(); // Pass control to the next middleware or route handler
});

// Home route
app.get("/", (req, res) => {
    res.status(200).send("Hi there from the home page!");
});

// About route
app.get("/about", (req, res) => {
    res.status(200).send("Looking to know about us?");
});

// Catch-all route for unknown paths
app.use((req, res) => {
    res.status(404).send("404: Page not found");
});

// Start the server and listen on port 8000
const PORT = 8000;
app.listen(PORT, (err) => {
    if (err) {
        console.error("Error starting the server:", err);
    } else {
        console.log(`App listening on http://localhost:${PORT}`);
    }
});

const http = require("http");
const fs = require("fs");

// Create the server
const server = http.createServer((req, res) => {
    // Log every request
    const log = `Date of Log: ${new Date().toISOString()} -- request at ${req.url}\n`;

    // Append the log to a file
    fs.appendFile("log.txt", log, (err) => {
        if (err) {
            console.error("Error writing to log file", err);
        }
    });

    // Set the response header for all requests
    res.setHeader("Content-Type", "text/plain");

    // Routing based on the request URL
    switch (req.url) {
        case '/': // Home route
            res.end("Welcome to the home page");
            break;
        case '/about': // About route
            res.end("This is just a random server example");
            break;
        case '/temp': // Temp route
            res.end("Temporary request handler here");
            break;
        case '/log': // Display the log file
            fs.readFile("log.txt", "utf8", (err, data) => {
                if (err) {
                    res.statusCode = 500;
                    res.end("Error reading log file");
                } else {
                    res.end(data);
                }
            });
            break;
        case '/clear-log': // Clear the log file
            fs.writeFile("log.txt", "", (err) => {
                if (err) {
                    res.statusCode = 500;
                    res.end("Error clearing log file");
                } else {
                    res.end("Log file cleared");
                }
            });
            break;
        default: // For all unknown routes
            res.statusCode = 404;
            res.end("404: Page not found");
    }
});

// Start the server and listen on port 8000
server.listen(8000, () => {
    console.log("Server started on http://localhost:8000");
});

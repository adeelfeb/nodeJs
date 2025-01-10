// Import required modules
const express = require("express");
const users = require("./MOCK_DATA.json"); // Mock user data

// Initialize express app
const app = express();

/**
 * Route: GET /api/users/:id
 * Description: Retrieve a user by their unique ID.
 */
app.route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id); // Convert id from string to number
    const user = users.find((user) => id === user.id); // Find user by id

    if (!user) {
      // If user not found, return 404 status
      return res.status(404).json({ error: "User not found" });
    }

    return res.json(user); // Respond with the user object
  })
  .patch((req, res) => {
    // Patch handler for updating user - currently placeholder
    return res.json({ status: "pending" });
  });

/**
 * Route: GET /api/users
 * Description: Retrieve the list of all users.
 */
app.get("/api/users", (req, res) => {
  return res.json(users); // Respond with the entire user array
});

/**
 * Route: GET /users
 * Description: Render a simple HTML page displaying user first names.
 */
app.get("/users", (req, res) => {
  const html = `
    <ul>
      ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
  `; // Generate HTML list from user first names

  res.send(html); // Send the generated HTML
});

/**
 * Route: GET /api/users/:id (duplicate)
 * Note: This route is redundant as it's already handled by app.route above.
 * Keeping it may cause conflicts.
 */
app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => id === user.id);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  return res.json(user);
});

/**
 * Route: POST /api/users
 * Description: Create a new user (currently a placeholder).
 */
app.post("/api/users", (req, res) => {
  // Placeholder for creating a new user
  return res.json({ status: "pending" });
});

/**
 * Route: PATCH /api/users/:id
 * Description: Update user by ID (currently a placeholder).
 */
app.patch("/api/users/:id", (req, res) => {
  // Placeholder for updating a user
  return res.json({ status: "pending" });
});

/**
 * Start the server on port 8000
 */
app.listen(8000, (err) => {
  if (err) {
    console.error("Error starting the server", err);
    return;
  }
  console.log("App listening on port 8000");
});

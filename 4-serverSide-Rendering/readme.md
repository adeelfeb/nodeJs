EJS (Embedded JavaScript) is a templating language that allows you to generate HTML with JavaScript. You embed JavaScript code within your HTML using special tags like `<% %>` and `<%= %>`. You **don't need to add `<% %>` on every line**, but where you use JavaScript logic or expressions.

Here’s a detailed explanation of how EJS syntax works:

---

### **EJS Syntax Tags**

1. **`<% ... %>` (Scriptlet Tag):**
   - Used for running JavaScript code but does not output anything to the HTML.
   - Example: Control structures like `if`, `for`, etc.
   ```ejs
   <% for (let i = 0; i < items.length; i++) { %>
       <p>Item: <%= items[i] %></p>
   <% } %>
   ```

2. **`<%= ... %>` (Output Tag):**
   - Outputs the value of the expression into the HTML (escaped by default to prevent XSS).
   - Example:
   ```ejs
   <h1>Welcome, <%= username %>!</h1>
   ```

3. **`<%- ... %>` (Unescaped Output Tag):**
   - Outputs unescaped HTML. Be cautious while using this as it can lead to XSS vulnerabilities.
   - Example:
   ```ejs
   <%- htmlContent %> <!-- Renders HTML inside the variable -->
   ```

4. **`<%# ... %>` (Comment Tag):**
   - Comments that do not appear in the rendered HTML.
   - Example:
   ```ejs
   <%# This is a server-side comment %>
   ```

---

### **Example Usage**

Let’s say you are rendering a list of users in EJS:

```ejs
<!DOCTYPE html>
<html>
<head>
    <title>User List</title>
</head>
<body>
    <h1>All Users</h1>
    <ul>
        <% if (users.length === 0) { %>
            <li>No users found.</li>
        <% } else { %>
            <% users.forEach(user => { %>
                <li><%= user.name %> - <%= user.email %></li>
            <% }) %>
        <% } %>
    </ul>
</body>
</html>
```

---

### **How It Works:**
1. **Control Flow with `<% ... %>`:**
   - You can write JavaScript control structures (like `if`, `else`, `for`, `while`) to manage logic.
   - Example:
   ```ejs
   <% if (users.length > 0) { %>
       <!-- Render user list -->
   <% } else { %>
       <p>No users found</p>
   <% } %>
   ```

2. **Output Data with `<%= ... %>`:**
   - Dynamically inject variables or expressions into HTML.
   ```ejs
   <p>Hello, <%= username %>!</p>
   ```

3. **Include Partial Templates with `<%- include(...) %>`:**
   - You can include other EJS templates into the current one.
   ```ejs
   <%- include('partials/header') %>
   ```

4. **Comments with `<%# ... %>`:**
   - Add server-side comments that won’t appear in the rendered HTML.
   ```ejs
   <%# This is for internal use only %>
   ```

---

### **Key Points**

1. **Escaping HTML:**
   - By default, `<%= ... %>` escapes characters like `<`, `>`, `&`, etc.
   - Use `<%- ... %>` to include raw, unescaped HTML.

2. **Passing Data:**
   - Data is passed from the server using `res.render()`.
   - Example:
   ```javascript
   app.get("/", (req, res) => {
       res.render("index", { username: "John", users: [{ name: "Alice" }] });
   });
   ```
   In `index.ejs`:
   ```ejs
   <h1>Hello, <%= username %>!</h1>
   ```

3. **Reusability:**
   - Use partials to reuse components like headers or footers across pages.

---

### **Full Example**

#### Server Code:
```javascript
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Set EJS as the templating engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    const users = [
        { name: "Alice", email: "alice@example.com" },
        { name: "Bob", email: "bob@example.com" },
    ];
    res.render("index", { users, title: "User List" });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
```

#### `views/index.ejs`:
```ejs
<!DOCTYPE html>
<html>
<head>
    <title><%= title %></title>
</head>
<body>
    <h1><%= title %></h1>
    <ul>
        <% if (users.length === 0) { %>
            <li>No users available.</li>
        <% } else { %>
            <% users.forEach(user => { %>
                <li>Name: <%= user.name %>, Email: <%= user.email %></li>
            <% }) %>
        <% } %>
    </ul>
</body>
</html>
```

---

### Output:
For the provided data:
- `title` will be "User List".
- The list will show the users Alice and Bob.


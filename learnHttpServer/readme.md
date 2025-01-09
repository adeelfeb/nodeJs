#### **Project Name**: Basic Node.js HTTP Server with Logging

#### **Description**:
This project demonstrates a simple HTTP server using Node.js. It includes basic routing, request logging, and some utility routes for handling server logs. This is a great starting point for understanding how HTTP requests and responses work in Node.js.

---

#### **Features**:
1. **Routing**:
   - `/`: Home page with a welcome message.
   - `/about`: Describes the server.
   - `/temp`: A temporary route for demonstration.
   - `/log`: Displays the contents of the log file.
   - `/clear-log`: Clears the log file.

2. **Request Logging**:
   - Logs every incoming request with its date and URL to `log.txt`.

3. **Error Handling**:
   - Proper error handling for reading/writing files.

4. **Modular Functions**:
   - Separates logging functionality from routing logic.

---

#### **Setup**:
1. **Install Node.js**: Ensure you have Node.js installed on your system.
2. **Run the server**:
   ```bash
   node server.js
   ```
3. **Access the server**:
   - Open your browser and visit: `http://localhost:8000`.

---

#### **File Details**:
- **`server.js`**:
  - The main script that creates and runs the server.
- **`log.txt`**:
  - Stores the log of all incoming requests.

---

#### **Future Improvements**:
- Add support for JSON responses.
- Serve static files (HTML, CSS, JS).
- Implement middleware for authentication.

---


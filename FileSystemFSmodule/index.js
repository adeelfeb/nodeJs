const fs = require("fs");

/**
 * Example 1: Reading a File (Asynchronous)
 */
fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File content:", data);
});

/**
 * Example 2: Writing to a File (Asynchronous)
 */
fs.writeFile("output.txt", "Hello, Node.js!", (err) => {
  if (err) {
    console.error("Error writing to file:", err);
    return;
  }
  console.log("File written successfully!");
});

/**
 * Example 3: Appending to a File (Asynchronous)
 */
fs.appendFile("output.txt", "\nAppended text!", (err) => {
  if (err) {
    console.error("Error appending to file:", err);
    return;
  }
  console.log("Text appended successfully!");
});

/**
 * Example 4: Deleting a File
 */
fs.unlink("deleteMe.txt", (err) => {
  if (err) {
    console.error("Error deleting file:", err);
    return;
  }
  console.log("File deleted successfully!");
});

/**
 * Example 5: Reading a Directory
 */
fs.readdir("./", (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }
  console.log("Directory contents:", files);
});

/**
 * Example 6: Creating a Directory
 */
fs.mkdir("newDirectory", (err) => {
  if (err) {
    console.error("Error creating directory:", err);
    return;
  }
  console.log("Directory created successfully!");
});

/**
 * Example 7: Removing a Directory
 */
fs.rmdir("newDirectory", (err) => {
  if (err) {
    console.error("Error removing directory:", err);
    return;
  }
  console.log("Directory removed successfully!");
});


console.log(`the files explanation is ${fs.statSync("./index.js").birthtime}`)
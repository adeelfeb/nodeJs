
---

# Node.js `fs` Module Examples

This project demonstrates the use of the Node.js `fs` (File System) module with various common operations:

## Examples

### 1. **Reading a File (Asynchronous)**
Reads the contents of a file asynchronously using `fs.readFile`.

```javascript
fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) console.error(err);
  else console.log(data);
});
```

### 2. **Writing to a File (Asynchronous)**
Writes text to a file. If the file doesn't exist, it's created.

```javascript
fs.writeFile("output.txt", "Hello, Node.js!", (err) => {
  if (err) console.error(err);
});
```

### 3. **Appending to a File**
Adds text to an existing file without overwriting.

```javascript
fs.appendFile("output.txt", "\\nAppended text!", (err) => {
  if (err) console.error(err);
});
```

### 4. **Deleting a File**
Deletes a file using `fs.unlink`.

```javascript
fs.unlink("deleteMe.txt", (err) => {
  if (err) console.error(err);
});
```

### 5. **Reading a Directory**
Lists the contents of a directory.

```javascript
fs.readdir("./", (err, files) => {
  if (err) console.error(err);
  else console.log(files);
});
```

### 6. **Creating a Directory**
Creates a new directory.

```javascript
fs.mkdir("newDirectory", (err) => {
  if (err) console.error(err);
});
```

### 7. **Removing a Directory**
Removes an empty directory.

```javascript
fs.rmdir("newDirectory", (err) => {
  if (err) console.error(err);
});
```

---

And many more function that can be seen via documentation or ust simply write fs.  and it will display the funcitons available
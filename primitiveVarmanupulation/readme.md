### **String Manipulation, Objects, and Arrays in JavaScript and TypeScript**

String, object, and array manipulation are foundational to solving coding problems, especially during interviews. Below is a comprehensive guide to important inbuilt methods and techniques, focusing on their practical use cases for problem-solving.

---

## **1. String Manipulation**

Strings are immutable in JavaScript/TypeScript, but many methods can manipulate and process them efficiently.

### **Common String Methods**

| Method                      | Description                                                                 | Example                                                                                     |
|-----------------------------|-----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| `charAt(index)`             | Returns the character at the specified index.                              | `"hello".charAt(1)` → `'e'`                                                                 |
| `charCodeAt(index)`         | Returns the Unicode of the character at the specified index.               | `"A".charCodeAt(0)` → `65`                                                                  |
| `concat()`                  | Joins two or more strings.                                                 | `"hello".concat(" world")` → `'hello world'`                                               |
| `includes(substring)`       | Checks if a string contains a specific substring.                          | `"hello world".includes("world")` → `true`                                                 |
| `indexOf(substring)`        | Returns the index of the first occurrence of a substring.                  | `"hello".indexOf("l")` → `2`                                                                |
| `lastIndexOf(substring)`    | Returns the index of the last occurrence of a substring.                   | `"hello".lastIndexOf("l")` → `3`                                                            |
| `slice(start, end)`         | Extracts a section of a string and returns it as a new string.             | `"hello".slice(1, 4)` → `'ell'`                                                             |
| `substring(start, end)`     | Similar to `slice()` but doesn't accept negative indices.                  | `"hello".substring(1, 4)` → `'ell'`                                                        |
| `toLowerCase()`/`toUpperCase()` | Converts the string to lowercase/uppercase.                               | `"Hello".toLowerCase()` → `'hello'`                                                        |
| `trim()`                    | Removes whitespace from both ends of a string.                            | `"  hello  ".trim()` → `'hello'`                                                           |
| `split(separator)`          | Splits a string into an array based on a separator.                       | `"a,b,c".split(",")` → `['a', 'b', 'c']`                                                   |
| `replace(substring, value)` | Replaces the first occurrence of a substring with another value.           | `"hello".replace("e", "a")` → `'hallo'`                                                    |
| `replaceAll(substring, value)` | Replaces all occurrences of a substring with another value (ES2021).      | `"hello hello".replaceAll("l", "x")` → `'hexxo hexxo'`                                     |
| `repeat(times)`             | Repeats a string for the specified number of times.                       | `"hi".repeat(3)` → `'hihihi'`                                                              |
| `match(regex)`              | Matches a string against a regular expression and returns the results.    | `"hello".match(/l/g)` → `['l', 'l']`                                                       |
| `startsWith(substring)`     | Checks if a string starts with the specified substring.                   | `"hello".startsWith("he")` → `true`                                                        |
| `endsWith(substring)`       | Checks if a string ends with the specified substring.                     | `"hello".endsWith("lo")` → `true`                                                          |
| `padStart(targetLength, padString)` | Pads the beginning of a string to the specified length.               | `"5".padStart(3, "0")` → `'005'`                                                           |
| `padEnd(targetLength, padString)`   | Pads the end of a string to the specified length.                     | `"5".padEnd(3, "0")` → `'500'`                                                             |

---

## **2. Array Manipulation**

Arrays are mutable and versatile, with many powerful methods.

### **Common Array Methods**

| Method                     | Description                                                                                     | Example                                                                                          |
|----------------------------|-------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| `push(element)`            | Adds one or more elements to the end of an array.                                              | `[1, 2].push(3)` → `[1, 2, 3]`                                                                  |
| `pop()`                    | Removes the last element from an array and returns it.                                         | `[1, 2, 3].pop()` → `3`                                                                          |
| `shift()`                  | Removes the first element from an array and returns it.                                        | `[1, 2, 3].shift()` → `1`                                                                       |
| `unshift(element)`         | Adds one or more elements to the beginning of an array.                                        | `[2, 3].unshift(1)` → `[1, 2, 3]`                                                               |
| `splice(start, deleteCount, ...items)` | Adds or removes elements at a specified index.                                           | `[1, 2, 3].splice(1, 1, "a", "b")` → `[1, 'a', 'b', 3]`                                         |
| `slice(start, end)`        | Returns a shallow copy of a portion of the array.                                              | `[1, 2, 3, 4].slice(1, 3)` → `[2, 3]`                                                           |
| `map(callback)`            | Creates a new array by applying a function to each element.                                    | `[1, 2, 3].map(x => x * 2)` → `[2, 4, 6]`                                                      |
| `filter(callback)`         | Creates a new array with elements that pass a condition.                                       | `[1, 2, 3].filter(x => x > 1)` → `[2, 3]`                                                      |
| `reduce(callback, initialValue)` | Reduces the array to a single value by applying a function.                                | `[1, 2, 3].reduce((sum, x) => sum + x, 0)` → `6`                                               |
| `forEach(callback)`        | Executes a function for each array element.                                                   | `[1, 2, 3].forEach(x => console.log(x))` → Logs `1`, `2`, `3`                                   |
| `find(callback)`           | Returns the first element that satisfies a condition.                                         | `[1, 2, 3].find(x => x > 1)` → `2`                                                             |
| `findIndex(callback)`      | Returns the index of the first element that satisfies a condition.                             | `[1, 2, 3].findIndex(x => x > 1)` → `1`                                                        |
| `sort(compareFunction)`    | Sorts the elements in place (mutates the original array).                                      | `[3, 1, 2].sort((a, b) => a - b)` → `[1, 2, 3]`                                                |
| `reverse()`                | Reverses the array in place.                                                                   | `[1, 2, 3].reverse()` → `[3, 2, 1]`                                                            |
| `concat(array)`            | Combines two or more arrays into a new array.                                                 | `[1, 2].concat([3, 4])` → `[1, 2, 3, 4]`                                                      |
| `includes(value)`          | Checks if an array includes a specific value.                                                 | `[1, 2, 3].includes(2)` → `true`                                                               |
| `every(callback)`          | Checks if all elements satisfy a condition.                                                   | `[1, 2, 3].every(x => x > 0)` → `true`                                                         |
| `some(callback)`           | Checks if at least one element satisfies a condition.                                         | `[1, 2, 3].some(x => x > 2)` → `true`                                                          |
| `join(separator)`          | Joins all array elements into a string.                                                       | `[1, 2, 3].join(",")` → `'1,2,3'`                                                              |

---

## **3. Object Manipulation**

Objects are key-value pairs and can be manipulated using various methods.

### **Common Object Methods**

| Method                              | Description                                                                 | Example                                                                                      |
|-------------------------------------|-----------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| `Object.keys(obj)`                  | Returns an array of keys of the object.                                     | `Object.keys({ a: 1, b: 2 })` → `['a', 'b']`                                                 |
| `Object.values(obj)`                | Returns an array of values of the object.                                   | `Object.values({ a: 1, b: 2 })` → `[1, 2]`                                                   |
| `Object.entries(obj)`               | Returns an array of key-value pairs of the object.                          | `Object.entries({ a: 1, b: 2 })` → `[['a', 1], ['b', 2]]`                                    |
| `Object.assign(target, ...sources)` | Copies properties from source objects to a target object.                   | `Object.assign({}, { a: 1 }, { b: 2 })` → `{ a: 1, b: 2 }`                                   |
| `Object.fromEntries(entries)`       | Converts an array of key-value pairs into an object.                        | `Object.fromEntries([['a', 1], ['b', 2]])` → `{ a: 1, b: 2 }`                                |
| `Object.hasOwnProperty(key)`        | Checks if the object contains a property directly (not inherited).          | `{ a: 1 }.hasOwnProperty('a')` → `true`                                                     |

---

### **Practical Interview Scenarios**
1. **Chunk a String into Equal Parts**:
   - Use `substring` or `slice`, combined with a loop.

2. **Merge and Flatten Arrays**:
   - Use `concat` or `flat`.

3. **Search an Array or Object**:
   - Use `filter`, `find`, or `some`.

4. **Reverse Words

 in a String**:
   - Combine `split`, `reverse`, and `join`.

---

Would you like code examples for common interview problems using these techniques?
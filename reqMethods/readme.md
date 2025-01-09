Yes, there are differences between the HTTP methods (PUT, POST, GET, PATCH, DELETE) in terms of **intended use**, **semantics**, and sometimes **performance implications**. However, the actual "weight" or overhead of the request doesn't vary significantly based on the HTTP method itself. Instead, the payload size, headers, and network factors contribute more to the request's "weight."

Here’s a breakdown:

---

### **1. Key Differences Between HTTP Methods**
| Method  | Use Case                                                                 | Behavior & Semantics                                                                                         |
|---------|--------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|
| **GET** | Retrieve data from the server                                            | Safe and idempotent. Should not have side effects on the server. Response contains data; no request body.    |
| **POST**| Submit data to create a new resource                                     | Non-idempotent. Typically used for actions that create new resources or trigger a process on the server.     |
| **PUT** | Replace an entire resource with the provided data                       | Idempotent. Multiple identical requests produce the same result.                                             |
| **PATCH**| Partially update an existing resource                                   | Not idempotent. Typically used for modifying only specific fields of a resource.                             |
| **DELETE**| Remove a resource from the server                                      | Idempotent. Multiple identical requests have the same effect.                                                |

---

### **2. Does PATCH Take Less Weight Compared to PUT or POST?**
- **Request Size**: 
  - PATCH usually requires a smaller payload compared to PUT because PATCH sends only the fields to update, while PUT requires the entire resource to be sent.
  - Example:
    - **PATCH** payload: `{ "name": "newName" }`
    - **PUT** payload: `{ "id": 1, "name": "newName", "email": "example@test.com" }`

- **Overhead**:
  - The overhead of using PATCH instead of PUT or POST is minimal. The main difference lies in the payload size, which affects the total request size and processing time.

---

### **3. Why Use the Appropriate Method?**
Even if "getting the job done" is your primary concern, sticking to the correct HTTP method is beneficial for several reasons:

- **Semantics**:
  - Following RESTful conventions makes your API more predictable, easier to use, and aligned with web standards.

- **Caching**:
  - GET requests can be cached by browsers and proxies, but POST, PUT, PATCH, and DELETE are generally not cached.

- **Idempotence**:
  - Methods like PUT and DELETE are idempotent, meaning the same request can be repeated without additional side effects. POST is non-idempotent.

- **Standards and Interoperability**:
  - Using the correct HTTP method ensures your API works well with tools and services that rely on these standards, such as browsers, proxies, and API clients.

---

### **4. When to Use Each Method?**
- **GET**: Fetch data without modifying anything.
- **POST**: Create a new resource or trigger an action that doesn't fit other methods.
- **PUT**: Update or replace an entire resource.
- **PATCH**: Update only specific fields of a resource.
- **DELETE**: Remove a resource.

---

### **5. Summary of Weight/Performance**
- **PATCH** may have a smaller request size compared to PUT or POST for updates because it only sends the changed fields.
- The HTTP method itself (e.g., PATCH vs. PUT) doesn’t significantly impact performance, as the network and server processing time are more dependent on the payload and how the server handles the request.

If you are looking for efficiency:
- Use **PATCH** for partial updates.
- Keep payloads and headers as small as possible.
- Optimize server-side processing for different methods. 

Following the correct HTTP method ensures better maintainability and scalability of your application.
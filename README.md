<img src="https://socialify.git.ci/Neliswa084/library_RESTful_API/image?language=1&owner=1&name=1&stargazers=1&theme=Light" alt="library_RESTful_API" width="640" height="320" />
# Library RESTful API

A RESTful API for managing a library system built with **Node.js**, **Express**, and **TypeScript**. The API supports full CRUD operations for Authors and Books, input validation, logging middleware, and error handling.

## Project Overview

A local community library needs a minimal system to manage books and authors. Librarians can add, search, update, and delete records. The system rejects invalid entries and enforces relationships between books and authors.

## Tech Stack

- Node.js
- Express
- TypeScript
- express-validator (input validation)

## Project Structure

```
src/
├── controllers/
│   ├── author.ts        # Author CRUD logic
│   └── book.ts          # Book CRUD logic
├── models/
│   ├── authorModel.ts   # Author interface
│   └── bookModel.ts     # Book interface
├── routes/
│   ├── author.ts        # Author routes
│   └── book.ts          # Book routes
├── middleware/
│   ├── logger.ts        # Request logger
│   └── error.ts         # Error handler
└── server.ts            # Entry point
```

## Models

### Author
```typescript
{
  id: number,
  firstName: string,
  lastName: string,
  emailAddress: string
}
```

### Book
```typescript
{
  id: number,
  title: string,
  year: number,
  authorId: number   // must reference a valid author
}
```

## Quick Start

```bash
# Install dependencies
npm install

# Run in development
npm run dev

# Build
npm run build
```

## API Endpoints

### Authors

| Method | Endpoint | Description |
|---|---|---|
| GET | `/authors` | List all authors |
| GET | `/authors/:id` | Get author by ID |
| POST | `/authors` | Create new author |
| PUT | `/authors/:id` | Update author |
| DELETE | `/authors/:id` | Delete author |
| GET | `/authors/:id/books` | List all books by an author |

### Books

| Method | Endpoint | Description |
|---|---|---|
| GET | `/books` | List all books |
| GET | `/books/:id` | Get book by ID |
| POST | `/books` | Create new book |
| PUT | `/books/:id` | Update book |
| DELETE | `/books/:id` | Delete book |

## Request & Response Examples

### POST /authors
**Request body:**
```json
{
  "firstName": "Chinua",
  "lastName": "Achebe",
  "emailAddress": "chinua@example.com"
}
```
**Response (201):**
```json
{
  "id": 1,
  "firstName": "Chinua",
  "lastName": "Achebe",
  "emailAddress": "chinua@example.com"
}
```

### POST /books
**Request body:**
```json
{
  "title": "Things Fall Apart",
  "year": 1958,
  "authorId": 1
}
```
**Response (201):**
```json
{
  "id": 1,
  "title": "Things Fall Apart",
  "year": 1958,
  "authorId": 1
}
```

### GET /authors/1/books
**Response (200):**
```json
[
  {
    "id": 1,
    "title": "Things Fall Apart",
    "year": 1958,
    "authorId": 1
  }
]
```

## Validation Rules

### Author (POST / PUT)
- `firstName` — required, cannot be empty
- `lastName` — required, cannot be empty
- `emailAddress` — must be a valid email address

### Book (POST / PUT)
- `title` — required, cannot be empty
- `year` — must be an integer
- `authorId` — must be an integer referencing a valid author

## Error Responses

| Status | Meaning |
|---|---|
| 400 | Validation failed — invalid or missing fields |
| 404 | Resource not found |
| 409 | Conflict — duplicate entry |

**Example 400 response:**
```json
{
  "errors": [
    {
      "msg": "First name is required",
      "path": "firstName"
    }
  ]
}
```

**Example 404 response:**
```json
{
  "message": "Author not found"
}
```

## Middleware

### Logger
Logs every incoming request method and URL to the console.
```
[LOG] GET /authors
[LOG] POST /books
```

### Error Handler
Catches unhandled errors and returns a consistent JSON error response with a 500 status code.

## Data Storage

This API uses **in-memory arrays** for data storage. Data resets when the server restarts. This is intentional for the scope of this project — no database setup is required to run it.

## Learning Outcomes

- Built a multi-resource REST API from scratch using Express and TypeScript
- Implemented input validation using express-validator
- Applied the separation of concerns pattern (models, controllers, routes, middleware)
- Enforced a relationship between two resources (book must reference a valid author)
- Handled errors consistently across all endpoints with appropriate HTTP status codes

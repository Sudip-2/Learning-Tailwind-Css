import express from "express";
import bodyParser from "body-parser"
import { dirname } from "path"; //The dirname function returns the directory name of a given file path.
import { fileURLToPath } from "url"; //The fileURLToPath function converts a file URL (like file:///path/to/file) into a regular file path that the operating system can understand (like /path/to/file).
const __dirname = dirname(fileURLToPath(import.meta.url));
// 1. import.meta.url is a special object that contains the URL of the current module (the file that this code is in).

// In Express.js, middleware refers to functions that have access to the request (req), response (res), and the next function 
// in the application’s request-response cycle. Middleware functions can modify the request or response objects, end the 
// request-response cycle, or call the next middleware in the stack.

// Middleware is used for various purposes, such as:

// Logging requests
// Authentication and authorization
// Parsing JSON or form data
// Handling errors

const app = express();
const port = 3000;


app.get("/", (req, res) => {
  console.log(__dirname)
  res.sendFile(__dirname + "/public/index.html");
});

app.use(bodyParser.urlencoded({extended:true})) // app.use() in Express is a method that adds middleware to your application
// use body-parser.urlencoded to handle URL-encoded data (like form)
// URL-encoded data is typically form data that is sent via an HTTP POST request, where the data is encoded in the format key=value&key=value.
// The extended option controls how the URL-encoded data is parse
app.post("/submit", (req, res) => {
  console.log(req.body)
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

const express = require("express");
const mongoose = require("mongoose");
const TodoSchema = require("./schema/TodoSchema");
const User = require("./schema/User");

mongoose.connect("mongodb://127.0.0.1:27017/todos", () => {
  console.log("Connected to database");
});

const app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get("/", (req, res) => {
  res.send("<h1>REST api</h1>");
});

// COnnect to TodoSchema
app.get("/todos", (req, res) => {
  TodoSchema.find({})
    .then((result) => res.status(200).json(result))
    .catch((e) => res.json(e));
});

// Connect Users Schema
app.get("/users", (req, res) => {
  User.find({})
    .then((result) => res.status(200).json(result))
    .catch((e) => res.json(e));
});

// Run server
app.listen(5000, () => {
  console.log("Server is running at port 5000");
});

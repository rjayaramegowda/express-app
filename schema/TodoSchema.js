const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  userId: {
    type: "Number",
  },
  id: {
    type: "Number",
  },
  title: {
    type: "String",
  },
  completed: {
    type: "Boolean",
  },
});

module.exports = mongoose.model("todoList", todoSchema);

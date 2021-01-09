const { classesRepo } = require("../repositories");
const ctrl = require("express").Router();

ctrl.post("/", function (req, res) {
  // ... insert a class into the classes table
});

ctrl.get("/", function (req, res) {
  // ... select all classes from the classes table
});

module.exports = ctrl;

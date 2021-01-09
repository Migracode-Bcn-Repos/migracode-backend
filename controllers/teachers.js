const { teachersRepo } = require("../repositories");
const ctrl = require("express").Router();

ctrl.post("/", function (req, res) {
  // ... insert a teacher into the teachers table
});

ctrl.get("/", function (req, res) {
  // ... select all teachers from the teachers table
});

ctrl.put("/:teacherId", function (req, res) {
  // ... update a teacher in the teachers table
});

ctrl.delete("/:teacherId", function (req, res) {
  // ... delete a teacher from the teachers table
});

module.exports = ctrl;

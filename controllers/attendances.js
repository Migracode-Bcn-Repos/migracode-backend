const { attendancesRepo } = require("../repositories");
const ctrl = require("express").Router();

ctrl.post("/attendances", function (req, res) {
  // ... record a student's attendance of a class in the attendances table
});

ctrl.get("/attendances", function (req, res) {
  // ... select all attendances from the attendances table
});

// Trickier:
// get all attendance records of a given class

module.exports = ctrl;

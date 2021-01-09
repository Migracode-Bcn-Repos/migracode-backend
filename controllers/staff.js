const { staffRepo } = require("../repositories");
const ctrl = require("express").Router();

ctrl.post("/staff", function (req, res) {
  // ... insert a staff member into the staff table
});

ctrl.get("/staff", function (req, res) {
  // ... select all staff members from the staff table
});

ctrl.put("/staff/:staffId", function (req, res) {
  // ... update a staff member in the staff table
});

ctrl.delete("/staff/:staffId", function (req, res) {
  // ... delete a staff member from the staff table
});

module.exports = ctrl;

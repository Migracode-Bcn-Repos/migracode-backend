const { modulesRepo } = require("../repositories");
const ctrl = require("express").Router();

ctrl.post("/modules", function (req, res) {
  // ... insert a module into the modules table
});

ctrl.get("/modules", function (req, res) {
  // ... select all modules from the modules table
});

ctrl.put("/modules/:moduleId", function (req, res) {
  // ... update a module in the modules table
});

ctrl.delete("/modules/:moduleId", function (req, res) {
  // ... delete a module from the modules table
});

module.exports = ctrl;

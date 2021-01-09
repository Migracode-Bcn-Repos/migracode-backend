const { languagesRepo } = require("../repositories");
const ctrl = require("express").Router();

ctrl.post("/", function (req, res) {
  // ... insert a language into the languages table
});

ctrl.get("/", function (req, res) {
  // ... select all languages from the languages table
});

ctrl.delete("/:languageId", function (req, res) {
  // ... delete a language from the languages table
});

module.exports = ctrl;

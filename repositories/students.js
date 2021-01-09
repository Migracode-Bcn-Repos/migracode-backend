const { Pool } = require("pg");

const pool = new Pool({
  user: "",
  host: "localhost",
  database: "migracode",
  password: "",
  port: 5432,
});

function find() {
  return pool.query("SELECT * FROM students;").then((result) => result.rows);
}

function create(student) {
  // ... create student in db
}

function update(student) {
  // ... update student in db
}

function remove(id) {
  // ... remove student from db
}

module.exports = {
  find: find,
  create: create,
  update: update,
  remove: remove,
};

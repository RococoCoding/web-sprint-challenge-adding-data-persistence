// build your `Project` model here
const db = require("../../data/dbConfig");

module.exports = {
  getProjects,
  addProject
}

function getProjects() {
  return db('projects')
}

function addProject(body) {
  return db('projects')
    .insert(body)
}
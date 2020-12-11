// build your `Project` model here
const db = require("../../data/dbConfig");

module.exports = {
  getProjects,
  addProject,
  getProjectById
}

function getProjects() {
  return db('projects')
}

function getProjectById(id) {
  return db('projects')
    .where({id})
}

function addProject(body) {
  return db('projects')
    .insert(body)
    .then(id => {
      return getProjectById(id)
    })
}
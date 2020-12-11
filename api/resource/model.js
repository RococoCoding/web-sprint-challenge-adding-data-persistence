// build your `Resource` model here
const db = require("../../data/dbConfig");

module.exports = {
  getResources,
  addResource,
  getResourceById
}

function getResources() {
  return db('Resources')
}

function getResourceById(id) {
  return db('Resources')
    .where({id})
}

function addResource(body) {
  return db('Resources')
    .insert(body)
    .then(id => {
      return getResourceById(id)
    })
}
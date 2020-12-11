// build your `Task` model here
const db = require("../../data/dbConfig");

module.exports = {
  getTasks,
  addTask,
  getTaskById
}

function getTasks() {
  return db('tasks as t')
    .join('projects as p', 't.project_id', 'p.id' )
    .select('t.notes', 't.description', 't.completed',  'p.name as project_name', 'p.description as project_description')
}

function getTaskById(id) {
  return db('tasks')
    .where({id})
}

function addTask(body) {
  return db('tasks')
    .insert(body)
    .then(id => {
      return getTaskById(id)
    })
}
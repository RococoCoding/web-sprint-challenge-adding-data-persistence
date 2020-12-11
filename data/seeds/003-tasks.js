
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {description: "Description 1", notes: 'rowValue1', completed: false, project_id: 1},
        {description: "Description 2", notes: 'rowValue2', completed: false, project_id: 2},
        {description: "Description 3", notes: null, completed: false, project_id: 3}
      ]);
    });
};

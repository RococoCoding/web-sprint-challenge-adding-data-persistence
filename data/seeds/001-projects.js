
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: "Project 1", description: 'rowValue1', completed: false},
        {name: "Project 2", description: null, completed: false},
        {name: "Project 3", description: 'rowValue1', completed: false}
      ]);
    });
};

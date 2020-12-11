
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: "Resource 1", description: 'rowValue1'},
        {name: "Resource 2", description: 'rowValue2'},
        {name: "Resource 3", description: 'rowValue3'}
      ]);
    });
};

const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // if (ids.length === 0) {
  //   return [];
  // }
  return data.species.filter((animalId) => ids.includes(animalId.id));
}
console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce',
  'e8481c1d-42ea-4610-8e11-1752cfc05a46'));

module.exports = getSpeciesByIds;

// const data = require('../data/zoo_data');

// function getEmployeeByName(...ids) {
//   // if (!employeeName) {
//   //   return {};
//   // }
//   return data.employees.find((findId) => ids.includes(findId.id));
// }
// console.log(getEmployeeByName('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
//   '56d43ba3-a5a7-40f6-8dd7-cbb05082383f'));

// module.exports = getEmployeeByName;

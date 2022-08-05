const data = require('../data/zoo_data');

const { employees } = data;

function getOldestFromFirstSpecies(id) {
  const idEmployee = employees.find((funcionario) => funcionario.id === id).responsibleFor[0];
  return idEmployee;
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;

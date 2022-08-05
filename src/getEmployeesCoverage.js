const data = require('../data/zoo_data');

function getEmployeesCoverage(dadoEmployee) {
  if (!dadoEmployee) {
    return data.employees;
  }
  return data.employees
    .find((person) => dadoEmployee === person.id || dadoEmployee === person.firstName || dadoEmployee === person.lastName)
    .filter((personInformation) => `${personInformation.id} ${personInformation.firstName}`);
}

console.log(getEmployeesCoverage('Nigel'));
module.exports = getEmployeesCoverage;
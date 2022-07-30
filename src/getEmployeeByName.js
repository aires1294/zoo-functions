const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return data.employees.find((nome) => employeeName
    .includes(nome.firstName) || employeeName.includes(nome.lastName));
}
console.log(getEmployeeByName('pedro'));
module.exports = getEmployeeByName;

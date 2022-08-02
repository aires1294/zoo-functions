const data = require('../data/zoo_data');

const { employees } = data;
function isManager(id) {
  return employees.some((funcionario) => funcionario.managers
    .find((manager) => manager.includes(id)));
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return employees.filter((funcionario) => funcionario.managers.includes(managerId))
    .map((abaixo) => `${abaixo.firstName} ${abaixo.lastName}`);
}
console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));
console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
module.exports = { isManager, getRelatedEmployees };

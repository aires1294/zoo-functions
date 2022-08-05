const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

function getOldestFromFirstSpecies(id) {
  const idEmployee = employees.find((funcionario) => funcionario.id === id).responsibleFor[0];
  // const idAnimal = idEmployee.reduce((older, actual) => {
  //   if (older.residents.age > actual.residents.age) {
  //     return older;
  //   }
  //   return actual;
  // });
  const idAnimal = species.find((animal) => animal.id === idEmployee).residents
    .reduce((older, actual) => {
      if (older.age > actual.age) {
        return older;
      }
      return actual;
    });

  return [idAnimal.name, idAnimal.sex, idAnimal.age];
  // return [idAnimal];
}
// console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;

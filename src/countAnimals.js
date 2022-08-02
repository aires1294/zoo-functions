const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return species.map((countAnimal) => `${countAnimal.name} : ${countAnimal.residents.length}`);
  }
  if (animal.specie && animal.sex) {
    return species.find((animalSex) => animalSex.name === animal.specie).residents
      .filter((animalSexOnly) => animalSexOnly.sex === animal.sex).length;
  }
  if (animal.specie) {
    return species.find((specificAnimal) => specificAnimal.name === animal.specie).residents.length;
  }
}
console.log(countAnimals({ specie: 'lions', sex: 'male' }));
module.exports = countAnimals;

const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return data.species
      .find((specie) => animal.includes(specie.name)).residents
      .every((older) => older.age >= age);
}
console.log(getAnimalsOlderThan('otters', 7));
module.exports = getAnimalsOlderThan;

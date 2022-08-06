const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const personByAge = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((element) => {
    if (element.age < 18) {
      personByAge.child += 1;
    } if (element.age < 50 && element.age >= 18) {
      personByAge.adult += 1;
    } if (element.age >= 50) {
      personByAge.senior += 1;
    }
  });
  return personByAge;
}

function calculateEntry(entrants) {
  if (!entrants || entrants.length === undefined) {
    return 0;
  }
  const value = data.prices;
  const { child, adult, senior } = countEntrants(entrants);
  let result = 0;

  result = (child * value.child) + (adult * value.adult) + (senior * value.senior);
  return result;
}
module.exports = { calculateEntry, countEntrants };

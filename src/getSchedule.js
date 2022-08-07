const data = require('../data/zoo_data');

const { hours, species } = data;

function getListSchedule() {
  const days = Object.keys(hours);
  return days.reduce((acc, day) => {
    const obj = {};
    if (day === 'Monday') {
      obj.officeHour = 'CLOSED';
      obj.exhibition = 'The zoo will be closed!';
    } else {
      obj.officeHour = `Open from ${hours[day].open}am until ${hours[day].close}pm`;
      obj.exhibition = species.filter((specie) => specie.availability.includes(day))
        .map((specie) => specie.name);
    }
    acc[day] = obj;
    return acc;
  }, {});
}

function getScheduleByDay(target) {
  const obj = {};
  if (target === 'Monday') {
    obj.officeHour = 'CLOSED';
    obj.exhibition = 'The zoo will be closed!';
  } else {
    obj.officeHour = `Open from ${hours[target].open}am until ${hours[target].close}pm`;
    obj.exhibition = species.filter((specie) => specie.availability.includes(target))
      .map((specie) => specie.name);
  }
  return { [target]: obj };
}

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) {
    return getListSchedule();
  }

  const animal = species.find((specie) => specie.name === scheduleTarget);
  if (animal) {
    return animal.availability;
  }

  const days = Object.keys(hours);

  if (days.includes(scheduleTarget)) {
    return getScheduleByDay(scheduleTarget);
  }

  return getListSchedule();
}
module.exports = getSchedule;
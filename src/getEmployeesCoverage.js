const data = require('../data/zoo_data');
const { employees, species } = require('../data/zoo_data');

function montaObjeto(funcionario) {
  const idEmployee = funcionario.id;
  // console.log(idEmployee);
  const fullName = `${funcionario.firstName} ${funcionario.lastName}`;
  console.log(fullName);
  const allSpecies = funcionario.responsibleFor.map((specieId) => species
    .find((nome) => nome.id === specieId).name);
  // console.log(allSpecies);
  const location = funcionario.responsibleFor.map((specieId) => species
    .find((nome) => nome.id === specieId).location);
  return {
    id: idEmployee, // id da pessoa
    fullName, // nome completo: firstName + lastName
    species: allSpecies, // espécies as quais a pessoa é responsável
    locations: location, // Um array contendo todas as localizações das espécies
  };
}

function getError(mistake) {
  if (mistake === undefined) {
    throw new Error('Informações inválidas');
  }
}

function getInfosFuncionarios(info) {
  const funcionarioCompleto = employees.find((funcionario) => {
    if (funcionario.firstName === info.name || funcionario.lastName === info.name) {
      return funcionario;
    } if (funcionario.id === info.id) {
      return funcionario;
    }
    return undefined;
  });
  getError(funcionarioCompleto);
  return montaObjeto(funcionarioCompleto);
}

function getEmployeesCoverage(dadoEmployee) {
  if (!dadoEmployee) {
    return employees.map((funcionario) => montaObjeto(funcionario));
  }
  return getInfosFuncionarios(dadoEmployee);
}

// console.log(getInfosFuncionarios('Nigel'));
console.log(getEmployeesCoverage());
module.exports = getEmployeesCoverage;

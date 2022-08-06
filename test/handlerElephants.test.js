const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('retorna a quantidade de elefantes', () => {
    const actual = handlerElephants('count');
    const expected = 4;
    expect(actual).toBe(expected);
  });
});

// Faz a mesma coisa que a de cima
// describe('Testes da função HandlerElephants', () => {
//   test('retorna a quantidade de elefantes', () => expect(handlerElephants('count')).toBe(4));
// });

test('Testa se esta recebendo array com os nomes de todos os elefantes', () => {
  expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
});

test('Testa a idade média dos elefantes é igual a averageAge', () => {
  expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
});

test('Retorna a localizacão dos elefantes dentro do Zoológico', () => {
  expect(handlerElephants('location')).toEqual('NW');
});

test('Retorna a popularidade dos elefantes', () => {
  expect(handlerElephants('popularity')).toBe(5);
});

test('Retorna um array com a relação de dias em que é possível visitar os elefantes ', () => {
  expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
});

test('Faz a mesma coisa que o de cima', () => {
  expect(handlerElephants('availability')).not.toContain('Monday');
});

test('Não passando argumentos a função deve retornar undefined', () => {
  expect(handlerElephants()).toBe(undefined);
});

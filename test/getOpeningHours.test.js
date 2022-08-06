const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {});
test('Teste quando nao se passa argumentos', () => {
  expect(getOpeningHours()).toEqual({
    Tuesday: { open: 8, close: 6 },
    Wednesday: { open: 8, close: 6 },
    Thursday: { open: 10, close: 8 },
    Friday: { open: 10, close: 8 },
    Saturday: { open: 8, close: 10 },
    Sunday: { open: 8, close: 8 },
    Monday: { open: 0, close: 0 },
  });
});

test('Para os argumentos Monday e 09:00-AM', () => {
  expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
});

test('Para os argumentos Tuesday e 09:00-AM', () => {
  expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
});

test('Para os argumentos Wednesday e 09:00-PM', () => {
  expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
});

test('Para os argumentos Thu e 09:00-AM', () => {
  expect(() => getOpeningHours('Thu', '09:00-AM')).toThrowError('The day must be valid. Example: Monday');
});
// fazer esse de cima de outro jeito
// describe('Testes da função HandlerElephants', () => {
//     it('retorna a quantidade de elefantes', () => {
//       const actual = handlerElephants('count');
//       const expected = 4;
//       expect(actual).toBe(expected);
//     });
//   });

test('Para os argumentos Friday e 09:00-ZM', () => {
  expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrowError('The abbreviation must be \'AM\' or \'PM\'');
});

test('Para os argumentos Saturday e C9:00-AM', () => {
  expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrowError('The hour should represent a number');
});

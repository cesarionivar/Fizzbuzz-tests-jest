const { fizzbuzz } = require('../index.js');

describe('test over functionality of fizzbuzz', () => {
  test('number not divisible by 3 or 5 should return the number', () => {
    const number = 0;
    const expected = 0;

    expect(fizzbuzz(number)).toBe(expected);
  });

  test('number divisible by 3 should return fizz', () => {
    const number = 3;
    const expected = 'fizz';

    expect(fizzbuzz(number)).toBe(expected);
  });

  test('number divisible by 5 should return buzz', () => {
    const number = 5;
    const expected = 'buzz';

    expect(fizzbuzz(number)).toBe(expected);
  });

  test('number divisible by 3 and 5 should return fizzbuzz', () => {
    const number = 15;
    const expected = 'fizzbuzz';

    expect(fizzbuzz(number)).toBe(expected);
  });
});

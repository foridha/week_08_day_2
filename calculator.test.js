const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 100_000
    actual = sum(30_000, 70_000)
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -10
    actual = sum(-3, -7)
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 30_000
    actual = sum(30_000, 0)
    expect(actual).toBe(expected);
  });
  
  test('can subtract', () => {
    expected = 7
    actual = subtract(10, 3)
    expect(actual).toBe(expected);
  });
  
  test('can multiply', () => {
    expected = 100
      actual = multiply(10, 10)
      expect(actual).toBe(expected);
  });
  
  test('can divide', () => {
    expected = 10
    actual = divide(20, 2)
    expect(actual).toBe(expected);
  });
  
  // test('modulus', () => {
  
  // });
  
  test('can test for even', () => {
    expected = true
    actual = even(2)
    expect(actual).toBe(expected);
  
  });
  
  test('can test for odd', () => {
    expected = true
    actual = odd(3)
    expect(actual).toBe(expected);
  });

});




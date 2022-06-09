const Calculator = require('./calculator');

describe('calculation >', () => {
  test('Test summation: ', () => {
    const sumall = new Calculator()
    let num1 = 2
    let num2 = 3
    let result = sumall.add(num1,num2)
    expect(result).toBe(5);
  });
  
  test('Test subtruction: ', () => {
    const subtract_all = new Calculator()
    let num1 = 2
    let num2 = 3
    let result = subtract_all.subtruct(num1,num2)
    expect(result).toBe(-1);
  });

  test('Test multiplication', () => {
    const multiply_all = new Calculator()
    let num1 = 2
    let num2 = 3
    let result = multiply_all.multiplication(num1,num2)
    expect(result).toBe(6);
  });

  test('Test division', () => {
    const divideall = new Calculator()
    let num1 = 10
    let num2 = 5
    let result = divideall.division(num1,num2)
    expect(result).toBe(2);
  });

});
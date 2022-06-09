const newString = require('./index');

test('Find string length ', () => {
  const stringOne = new newString();
  let new_string = "Microverse";
  let result = stringOne.stringLength(new_string);
  expect(result).toBe(result)
})
const newString = require('./index');

test('Find string length ', () => {
  const stringOne = new newString();
  let new_string = "Microverse";
  let result = stringOne.stringLength(new_string);
  expect(result).toBe(true)
})

test('Find the reverse of a string ', () => {
  const stringOne = new newString();
  let new_string = "Microverse";
  let reversedStr2 = new_string.split("").reverse().join("");
  let result = stringOne.reverseString(new_string);
  expect(result).toBe(reversedStr2)
})
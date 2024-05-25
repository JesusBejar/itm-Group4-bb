// helloworld.test.js
const { sayHello } = require('../src/helloworld');

test('sayHello function should return a greeting with the provided name', () => {
  const result = sayHello('Daniel Penha');
  expect(result).toBe('Hello, Daniel Penha!');
});

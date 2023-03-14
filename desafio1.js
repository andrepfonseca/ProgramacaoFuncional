// sum(3)(4)(5)
const sum = (num1) => (num2) => (num3) => num1 + num2 + num3;
console.log(sum(3)(4)(5));

// calculate(3)(7)(fn)

const calculate = (num1) => (num2) => (operation) => operation(num1, num2);

const addNumbers = (num1, num2) => num1 + num2;
const subtractNumbers = (num1, num2) => num1 - num2;
const multiplyNumbers = (num1, num2) => num1 * num2;
const divideNumbers = (num1, num2) => num1 / num2;

console.log(calculate(5)(8)(multiplyNumbers));

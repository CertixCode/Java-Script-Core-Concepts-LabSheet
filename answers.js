function generateOutput(label, value) {
  return {
    label,
    value,
  };
}

function toNumber(value) {
  return Number(value);
}

function toStringValue(value) {
  return String(value);
}

function convertToBoolean(value) {
  return Boolean(value);
}

function extractIntegerValue(value) {
  return Number.parseInt(value, 10);
}

function extractDecimalValue(value) {
  return Number.parseFloat(value);
}

function fixAdditionBug(price, quantity) {
  return Number(price) + Number(quantity);
}

function checkNaNValue(value) {
  return Number.isNaN(Number(value));
}

function convertNumericStrings(values) {
  return values.map(Number);
}

function roundNumber(value) {
  return {
    round: Math.round(value),
    floor: Math.floor(value),
    ceil: Math.ceil(value),
  };
}

function randomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rollDice() {
  return randomNumberInRange(1, 6);
}

function findLargestInArray(numbers) {
  return Math.max(...numbers);
}

function squareRootsUpTo(limit) {
  const results = [];

  for (let index = 1; index <= limit; index += 1) {
    results.push({
      number: index,
      squareRoot: Number(Math.sqrt(index).toFixed(2)),
    });
  }

  return results;
}

function generateOtp(length) {
  const digits = "0123456789";
  let otp = "";

  for (let index = 0; index < length; index += 1) {
    otp += digits[randomNumberInRange(0, digits.length - 1)];
  }

  return otp;
}

function checkGuess(guess, secretNumber) {
  if (guess === secretNumber) {
    return "Correct guess";
  }

  return guess < secretNumber ? "Too low" : "Too high";
}

function averageOfRandomNumbers(count, min, max) {
  const numbers = Array.from({ length: count }, () =>
    randomNumberInRange(min, max),
  );
  const total = numbers.reduce((sum, current) => sum + current, 0);

  return {
    numbers,
    average: Number((total / numbers.length).toFixed(2)),
  };
}

function demonstrateGlobalScope() {
  return `Inside function: ${window.globalLabMessage}`;
}

function demonstrateFunctionScope() {
  const scopedMessage = "I live only inside this function";
  return scopedMessage;
}

function demonstrateBlockScope() {
  let blockMessage;

  {
    let localMessage = "I exist only inside this block";
    blockMessage = localMessage;
  }

  return blockMessage;
}

function demonstrateVarVsLet() {
  const results = {};

  if (true) {
    var legacyValue = "var is function-scoped";
    let modernValue = "let is block-scoped";
    results.insideBlock = `${legacyValue} | ${modernValue}`;
  }

  results.outsideBlockWithVar = legacyValue;
  results.outsideBlockWithLet = "ReferenceError: modernValue is not defined";

  return results;
}

function demonstrateScopeChain() {
  const outerMessage = "outer";

  function middle() {
    const middleMessage = "middle";

    function inner() {
      const innerMessage = "inner";
      return `${outerMessage} > ${middleMessage} > ${innerMessage}`;
    }

    return inner();
  }

  return middle();
}

window.globalLabMessage = "Global variable is accessible here";

window.labSheetData = [
  {
    section: "Type Conversion",
    id: "type-conversion-1",
    title: "Convert string to number and add 50",
    question:
      'Convert the following string into a number and add 50. let salary = "500";',
    explanation: "Use Number() to convert the string before adding.",
    code: `let salary = '500';

const total = Number(salary) + 50;
console.log(total);`,
    output: () => generateOutput('Number("500") + 50', toNumber("500") + 50),
  },
  {
    section: "Type Conversion",
    id: "type-conversion-2",
    title: "Convert number to string",
    question: "Convert this number into a string and display: let marks = 95;",
    explanation: "Use String() to convert the number into text.",
    code: `let marks = 95;

const marksText = String(marks);
console.log(marksText);`,
    output: () => generateOutput("String(95)", toStringValue(95)),
  },
  {
    section: "Type Conversion",
    id: "type-conversion-3",
    title: "Convert values to booleans",
    question:
      'Convert these values into booleans and print the results: 0, 1, "", "Hello", null, undefined',
    explanation: "Boolean() reveals which values are truthy and falsy.",
    code: `console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(''));
console.log(Boolean('Hello'));
console.log(Boolean(null));
console.log(Boolean(undefined));`,
    output: () =>
      generateOutput("Boolean conversions", [
        convertToBoolean(0),
        convertToBoolean(1),
        convertToBoolean(""),
        convertToBoolean("Hello"),
        convertToBoolean(null),
        convertToBoolean(undefined),
      ]),
  },
  {
    section: "Type Conversion",
    id: "type-conversion-4",
    title: "Extract integer value",
    question: 'Extract only the integer value: let value = "250px";',
    explanation:
      "parseInt stops reading when it reaches the non-numeric suffix.",
    code: `let value = '250px';

const integerValue = Number.parseInt(value, 10);
console.log(integerValue);`,
    output: () =>
      generateOutput('parseInt("250px", 10)', extractIntegerValue("250px")),
  },
  {
    section: "Type Conversion",
    id: "type-conversion-5",
    title: "Extract decimal value",
    question: 'Extract the decimal number: let price = "99.99USD";',
    explanation: "parseFloat keeps the decimal portion and ignores the suffix.",
    code: `let price = '99.99USD';

const decimalValue = Number.parseFloat(price);
console.log(decimalValue);`,
    output: () =>
      generateOutput('parseFloat("99.99USD")', extractDecimalValue("99.99USD")),
  },
  {
    section: "Type Conversion",
    id: "type-conversion-6",
    title: "Fix the addition bug",
    question:
      'Fix the bug and calculate the total: let price = "100"; let quantity = "5"; console.log(price + quantity);',
    explanation:
      "Convert both values to numbers before adding so the result is numeric addition.",
    code: `let price = '100';
let quantity = '5';

console.log(Number(price) + Number(quantity));`,
    output: () =>
      generateOutput('Number("100") + Number("5")', fixAdditionBug("100", "5")),
  },
  {
    section: "Type Conversion",
    id: "type-conversion-7",
    title: "Check for NaN",
    question: "Write a program that checks whether a converted value is NaN.",
    explanation: "Use Number.isNaN() after converting the input.",
    code: `const input = 'hello';
const convertedValue = Number(input);

console.log(Number.isNaN(convertedValue));`,
    output: () =>
      generateOutput('Number.isNaN(Number("hello"))', checkNaNValue("hello")),
  },
  {
    section: "Type Conversion",
    id: "type-conversion-8",
    title: "Convert numeric strings to numbers",
    question:
      'Convert an array of numeric strings into numbers. ["10", "20", "30", "40"]',
    explanation: "Map each string through Number() to get a numeric array.",
    code: `const values = ['10', '20', '30', '40'];

const numbers = values.map(Number);
console.log(numbers);`,
    output: () =>
      generateOutput(
        "map(Number)",
        convertNumericStrings(["10", "20", "30", "40"]),
      ),
  },
  {
    section: "Math Methods",
    id: "math-methods-1",
    title: "Round numbers",
    question:
      "Round the following number using: let num = 7.8; Math.round(), Math.floor(), Math.ceil()",
    explanation:
      "Shows the difference between rounding down, up, and to the nearest integer.",
    code: `let num = 7.8;

console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));`,
    output: () => generateOutput("Math rounding", roundNumber(7.8)),
  },
  {
    section: "Math Methods",
    id: "math-methods-2",
    title: "Random number between 50 and 100",
    question: "Generate a random number between 50–100.",
    explanation:
      "Random integers in the requested range are generated with Math.random().",
    code: `const randomValue = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
console.log(randomValue);`,
    output: () => generateOutput("Random 50-100", randomNumberInRange(50, 100)),
  },
  {
    section: "Math Methods",
    id: "math-methods-3",
    title: "Dice roll simulator",
    question: "Create a dice roll simulator. Expected output: 1–6",
    explanation: "Uses a random integer between 1 and 6.",
    code: `const dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);`,
    output: () => generateOutput("Dice roll", rollDice()),
  },
  {
    section: "Math Methods",
    id: "math-methods-4",
    title: "Largest number in array",
    question: "Find the largest number from this array: [10, 45, 2, 99, 23]",
    explanation: "Math.max works directly with spread syntax.",
    code: `const values = [10, 45, 2, 99, 23];

console.log(Math.max(...values));`,
    output: () =>
      generateOutput(
        "Math.max(...[10, 45, 2, 99, 23])",
        findLargestInArray([10, 45, 2, 99, 23]),
      ),
  },
  {
    section: "Math Methods",
    id: "math-methods-5",
    title: "Square roots from 1 to 20",
    question: "Calculate the square root of numbers from 1–20 using a loop.",
    explanation: "Builds a list of each number with its square root.",
    code: `for (let i = 1; i <= 20; i += 1) {
  console.log(i, Math.sqrt(i));
}`,
    output: () => generateOutput("Square roots 1-20", squareRootsUpTo(20)),
  },
  {
    section: "Math Methods",
    id: "math-methods-6",
    title: "Generate 6-digit OTP",
    question: "Generate a 6-digit OTP using Math.random().",
    explanation: "Creates six random digits and joins them into a string.",
    code: `let otp = '';

for (let i = 0; i < 6; i += 1) {
  otp += Math.floor(Math.random() * 10);
}

console.log(otp);`,
    output: () => generateOutput("6-digit OTP", generateOtp(6)),
  },
  {
    section: "Math Methods",
    id: "math-methods-7",
    title: "Number guessing logic",
    question: "Create a number guessing game logic.",
    explanation: "Compares a guess with a secret number and returns a hint.",
    code: `const secretNumber = 42;
const guess = 30;

if (guess === secretNumber) {
  console.log('Correct guess');
} else if (guess < secretNumber) {
  console.log('Too low');
} else {
  console.log('Too high');
}`,
    output: () => generateOutput("Guess 30 vs secret 42", checkGuess(30, 42)),
  },
  {
    section: "Math Methods",
    id: "math-methods-8",
    title: "Average of random numbers",
    question: "Find the average of random numbers generated by JavaScript.",
    explanation:
      "Generates a batch of random values and calculates the average.",
    code: `const numbers = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100));
const average = numbers.reduce((sum, current) => sum + current, 0) / numbers.length;

console.log(numbers, average);`,
    output: () =>
      generateOutput(
        "Average of random numbers",
        averageOfRandomNumbers(5, 1, 100),
      ),
  },
  {
    section: "Scope",
    id: "scope-1",
    title: "Global variable access",
    question: "Create a global variable and access it inside a function.",
    explanation: "A function can read variables declared in the global scope.",
    code: `let globalMessage = 'I am global';

function showGlobalMessage() {
  console.log(globalMessage);
}

showGlobalMessage();`,
    output: () => generateOutput("Global scope", demonstrateGlobalScope()),
  },
  {
    section: "Scope",
    id: "scope-2",
    title: "Function scope",
    question:
      "Create a function-scoped variable and try accessing it outside the function.",
    explanation:
      "Function-scoped values are not visible outside the function body.",
    code: `function testScope() {
  var functionMessage = 'Inside function only';
  console.log(functionMessage);
}

testScope();
// console.log(functionMessage);`,
    output: () => generateOutput("Function scope", demonstrateFunctionScope()),
  },
  {
    section: "Scope",
    id: "scope-3",
    title: "Block scope with let",
    question:
      "Create a block-scoped variable using let and test accessibility outside the block.",
    explanation:
      "let respects block scope, so it cannot be read outside the block.",
    code: `{
  let blockMessage = 'Block only';
  console.log(blockMessage);
}

// console.log(blockMessage);`,
    output: () => generateOutput("Block scope", demonstrateBlockScope()),
  },
  {
    section: "Scope",
    id: "scope-4",
    title: "var vs let inside if block",
    question:
      "Demonstrate the difference between var and let inside an if block.",
    explanation: "var leaks outside the block, while let stays confined to it.",
    code: `if (true) {
  var legacyValue = 'var is function-scoped';
  let modernValue = 'let is block-scoped';
  console.log(legacyValue);
  console.log(modernValue);
}

console.log(legacyValue);
// console.log(modernValue);`,
    output: () => generateOutput("var vs let", demonstrateVarVsLet()),
  },
  {
    section: "Scope",
    id: "scope-5",
    title: "Nested functions and scope chain",
    question: "Create nested functions and demonstrate scope chain.",
    explanation: "Inner functions can access variables from every outer scope.",
    code: `function outer() {
  const outerValue = 'outer';

  function middle() {
    const middleValue = 'middle';

    function inner() {
      const innerValue = 'inner';
      console.log(outerValue, middleValue, innerValue);
    }

    inner();
  }

  middle();
}

outer();`,
    output: () => generateOutput("Scope chain", demonstrateScopeChain()),
  },
];

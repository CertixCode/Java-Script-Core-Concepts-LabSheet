function reverseString(value) {
	return value.split('').reverse().join('');
}

function calculateFactorial(number) {
	let result = 1;

	for (let index = 2; index <= number; index += 1) {
		result *= index;
	}

	return result;
}

function isPrime(number) {
	if (number < 2) {
		return false;
	}

	for (let divisor = 2; divisor * divisor <= number; divisor += 1) {
		if (number % divisor === 0) {
			return false;
		}
	}

	return true;
}

function countVowels(text) {
	const matches = text.match(/[aeiou]/gi);
	return matches ? matches.length : 0;
}

function capitalizeWords(sentence) {
	return sentence
		.toLowerCase()
		.split(' ')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
}

function findLargestNumber(numbers) {
	return Math.max(...numbers);
}

function removeDuplicates(numbers) {
	return [...new Set(numbers)];
}

function flattenArray(values) {
	return values.flat(Infinity);
}

function calculateAverage(numbers) {
	const total = numbers.reduce((sum, current) => sum + current, 0);
	return total / numbers.length;
}

function buildFibonacciSequence(limit) {
	const sequence = [0, 1];

	while (sequence[sequence.length - 1] + sequence[sequence.length - 2] <= limit) {
		sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
	}

	return sequence;
}

function sortNumbersAscending(numbers) {
	return [...numbers].sort((left, right) => left - right);
}

function generateOutput(label, value) {
	return {
		label,
		value,
	};
}

window.labSheetData = [
	{
		id: 'q1',
		title: 'Reverse a String',
		question: 'Write a function to reverse a string.',
		explanation: 'Uses split, reverse, and join to transform the text.',
		code: `function reverseString(value) {
	return value.split('').reverse().join('');
}

reverseString('JavaScript');`,
		output: () => generateOutput('reverseString("JavaScript")', reverseString('JavaScript')),
	},
	{
		id: 'q2',
		title: 'Factorial',
		question: 'Create a function that returns the factorial of a number.',
		explanation: 'Uses an iterative loop so the output is easy to follow.',
		code: `function calculateFactorial(number) {
	let result = 1;

	for (let index = 2; index <= number; index += 1) {
		result *= index;
	}

	return result;
}

calculateFactorial(6);`,
		output: () => generateOutput('calculateFactorial(6)', calculateFactorial(6)),
	},
	{
		id: 'q3',
		title: 'Prime Checker',
		question: 'Check whether a given number is prime.',
		explanation: 'Stops early once a divisor is found.',
		code: `function isPrime(number) {
	if (number < 2) {
		return false;
	}

	for (let divisor = 2; divisor * divisor <= number; divisor += 1) {
		if (number % divisor === 0) {
			return false;
		}
	}

	return true;
}

isPrime(29);`,
		output: () => generateOutput('isPrime(29)', isPrime(29)),
	},
	{
		id: 'q4',
		title: 'Count Vowels',
		question: 'Count the vowels in a string.',
		explanation: 'Uses a regular expression to collect every vowel match.',
		code: `function countVowels(text) {
	const matches = text.match(/[aeiou]/gi);
	return matches ? matches.length : 0;
}

countVowels('Frontend Fundamentals');`,
		output: () => generateOutput('countVowels("Frontend Fundamentals")', countVowels('Frontend Fundamentals')),
	},
	{
		id: 'q5',
		title: 'Capitalize Words',
		question: 'Convert each word in a sentence to title case.',
		explanation: 'Normalizes case first, then capitalizes each word.',
		code: `function capitalizeWords(sentence) {
	return sentence
		.toLowerCase()
		.split(' ')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
}

capitalizeWords('learn javascript deeply');`,
		output: () => generateOutput('capitalizeWords("learn javascript deeply")', capitalizeWords('learn javascript deeply')),
	},
	{
		id: 'q6',
		title: 'Largest Number',
		question: 'Find the largest number in an array.',
		explanation: 'Leverages Math.max with spread syntax.',
		code: `function findLargestNumber(numbers) {
	return Math.max(...numbers);
}

findLargestNumber([12, 45, 7, 91, 18]);`,
		output: () => generateOutput('findLargestNumber([12, 45, 7, 91, 18])', findLargestNumber([12, 45, 7, 91, 18])),
	},
	{
		id: 'q7',
		title: 'Remove Duplicates',
		question: 'Remove duplicate values from an array.',
		explanation: 'Creates a Set and spreads it back to an array.',
		code: `function removeDuplicates(numbers) {
	return [...new Set(numbers)];
}

removeDuplicates([1, 1, 2, 3, 3, 4, 5]);`,
		output: () => generateOutput('removeDuplicates([1, 1, 2, 3, 3, 4, 5])', removeDuplicates([1, 1, 2, 3, 3, 4, 5])),
	},
	{
		id: 'q8',
		title: 'Flatten Array',
		question: 'Flatten a nested array into a single level array.',
		explanation: 'Uses flat(Infinity) so deeply nested arrays are supported.',
		code: `function flattenArray(values) {
	return values.flat(Infinity);
}

flattenArray([1, [2, [3, 4]], 5]);`,
		output: () => generateOutput('flattenArray([1, [2, [3, 4]], 5])', flattenArray([1, [2, [3, 4]], 5])),
	},
	{
		id: 'q9',
		title: 'Average',
		question: 'Calculate the average of a list of numbers.',
		explanation: 'Adds the values with reduce and divides by the array length.',
		code: `function calculateAverage(numbers) {
	const total = numbers.reduce((sum, current) => sum + current, 0);
	return total / numbers.length;
}

calculateAverage([10, 20, 30, 40]);`,
		output: () => generateOutput('calculateAverage([10, 20, 30, 40])', calculateAverage([10, 20, 30, 40])),
	},
	{
		id: 'q10',
		title: 'Fibonacci',
		question: 'Generate the Fibonacci sequence up to a limit.',
		explanation: 'Builds the sequence iteratively until the next number exceeds the limit.',
		code: `function buildFibonacciSequence(limit) {
	const sequence = [0, 1];

	while (sequence[sequence.length - 1] + sequence[sequence.length - 2] <= limit) {
		sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
	}

	return sequence;
}

buildFibonacciSequence(50);`,
		output: () => generateOutput('buildFibonacciSequence(50)', buildFibonacciSequence(50)),
	},
	{
		id: 'q11',
		title: 'Sort Numbers',
		question: 'Sort an array of numbers in ascending order.',
		explanation: 'Uses a numeric comparator so values sort correctly.',
		code: `function sortNumbersAscending(numbers) {
	return [...numbers].sort((left, right) => left - right);
}

sortNumbersAscending([34, 7, 23, 32, 5, 62]);`,
		output: () => generateOutput('sortNumbersAscending([34, 7, 23, 32, 5, 62])', sortNumbersAscending([34, 7, 23, 32, 5, 62])),
	},
	{
		id: 'q12',
		title: 'Object Summary',
		question: 'Read a simple summary from an object and format it for display.',
		explanation: 'Shows how to expose a function that returns structured output.',
		code: `function generateOutput(label, value) {
	return {
		label,
		value,
	};
}

generateOutput('Lab status', 'Ready');`,
		output: () => generateOutput('Lab status', 'Ready'),
	},
];

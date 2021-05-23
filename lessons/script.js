"use strict";

// let i = 0;

// while (i <= 12) {
// 	if (i % 2 == 0) {
// 		console.log(i);
// 	}
	
// 	i++;
// }

// let i = 0;
// let n = 2;

// while (i < 9) {
// 	n *= 2;
// 	i++;
// }

// console.log(n);

// for (let i = 0; i <= 12; i++) {
// 	if (i % 2 == 0) {
// 		console.log(i);
// 	}
// }

// let num = 2;

// for (let k = 0; k < 9; k++) {
// 	num *= 2;
// }

// console.log(num);

// for (let i = '#'; i.length <= 7; i += '#') {
// 	console.log(i);
// }

// for (let n = 1; n <= 100; n++) {
// 	if (n % 3 === 0 && n % 5 === 0) {
// 		console.log('FizzBuzz');		
// 	} else if (n % 3 === 0) {
// 		console.log('Fizz');
// 	} else if (n % 5 === 0) {
// 		console.log('Buzz');		
// 	}  else {
// 		console.log(n);
// 	}
// }

// let size = 8;
// let board = '';

// for (let i = 0; i < size; i++) {
// 	for (let n = 0; n < size; n++) {
// 		if (board.length % 2 === 0) {
// 			board += ' ';
// 		} else {
// 			board += '#';
// 		}
// 	}

// 	board += '\n';
// }

// console.log(board);
// console.log(board.length);

// Глава 3. Функции

// Минимум
const minNum = (a, b) => {
	return a > b ? b : a;
};

console.log(minNum(0, -10));

// Рекурсия
const isEven = (num) => {
	if (num % 2 === 0 || num === 0 || num % 1 !== 0) {
		return true;
	}

	return false;
};

console.log(isEven(-1));

// Подсчет букв
const countBs = (str) => {
	let counter = 0;

	for (let i = 0; i < str.length; i++) {
		if (str[i] === 'B') {
			counter++;
		}
	}

	return counter;
};

console.log(countBs('BBC'));

const countChar = (str, letter) => {
	let counter = 0;

	for (let i = 0; i < str.length; i++) {
		if (str[i] === letter) {
			counter++;
		}
	}

	return counter;
};

console.log(countChar('kakkerlak', 'k'));
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

// Глава 4. Структуры данных: объекты и массивы

// Сумма диапазона
const range = (from, to, step = 1) => {
	let arr = [];

	if (step < 0) {
		for (from; from >= to; from += step) {
			arr.push(from);
		}
	} else	if (step > 0) {
		for (from; from <= to; from += step) {
			arr.push(from);
		}
	} else {
		for (from; from <= to; from++) {
			arr.push(from);
		}
	}

	return arr;
};

console.log(range(1, 10));
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));

const summ = (numbers) => {
	let summValue = 0;

	for (let number of numbers) {
		summValue += number;
	}

	return summValue;
};

console.log(summ(range(1, 10)));

// Массив в обратном порядке
const oldArr = ['start', 20, 30, 40, 'finish'];

const reverseArr = (arr) => {
	let newArr = [];

	for (let i = 0; i < arr.length; i++) {
		newArr[i] = oldArr[(arr.length - 1) - i];
	}

	return newArr;
};

console.log(reverseArr(oldArr));

// Список
let list = {
	value: 1,
	rest: {
		value: 2,
		rest: {
			value: 3,
			rest: null
		}
	}
};

const newList = {
	value: 0,
	rest: list
};

const newList1 = {
	value: -1,
	rest: list
};

let arr1 = [1, 2, 3];

const arrayToList = (oldArr, newArr) => {
	oldArr.push(newArr);

	return oldArr;
};

console.log(arr1);

const arr2 = arrayToList([10, 20], arr1);
console.log(arr2);

const arr3 = arrayToList(arr2, arr1);
console.log(arr3);

// Глубокое сравнение
const myObj1 = {
	name: 'Dima',
	age: 26,
	isMarried: true
};

const myObj2 = {
	name: 'Dima',
	age: 26,
	isMarried: true
};

let obj = {here: {is: "an"}, object: 2};

const deepEqual = (obj1, obj2) => {
	if (Object.keys(obj1).length === Object.keys(obj2).length && typeof obj1 === 'object' && typeof obj2 === 'object') {
		let obj1Values = [];

		for (let key of Object.keys(obj1)) {
			obj1Values.push(obj1[key]);
		}

		let obj2Values = [];

		for (let key of Object.keys(obj2)) {
			obj2Values.push(obj2[key]);
		}

		for (let i = 0; i < obj1Values.length; i++) {
			if (obj1Values[i] === obj2Values[i]) {
				return true;
			} else {
				return false;
			}
		}

		return true;
	}
};

// deepEqual(myObj1, myObj2);
// console.log(deepEqual(obj, obj));
// console.log(deepEqual(obj, {here: 1, object: 2}));
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

const chessSize = 8;
let line = '';

for (let i = 0; i < chessSize; i++) {
	for (let k = 0; k < chessSize; k++) {
		if (line.length % 2 == 0) {
			line += ' ';
		} else {
			line += '#';
		}
	}

	line += '\n';
}
console.log(line);
console.log(line.length);
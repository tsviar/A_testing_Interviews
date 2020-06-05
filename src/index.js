import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const solution = () => {
	// const A = [1, 2, 3];
	//const A = [-1, -2, -10000];
	const A = [1, 2, 3, 6, 4, 1, 2, 4];

	let orderedA = [0];
	orderedA[0] = 0;
	for (let i = 1; i < A.length + 2; i++) {
		orderedA[i] = i;
	}

	//orderedA[orderedA.length] = orderedA.length ;
	console.log('A :' + A + '\n');
	console.log('Start orderedA :' + orderedA + '\n');

	for (let i = 0; i < A.length; i++) {
		console.log('A[' + i + '] =' + A[i] + '\n');
		if (A[i] > 0) {
			orderedA[A[i]] = 0;
		}
	}

	console.log('After orderedA :' + orderedA + '\n');

	for (let i = 1; i < orderedA.length; i++) {
		if (orderedA[i] > 0) {
			console.log('orderedA[' + i + '] =' + orderedA[i] + '\n');
			return orderedA[i];
		}
	}
}; //solution

/*
shortest possible length of the compressed representation of a string

Strings with long blocks of repeating characters take much less space if kept in a compressed representation. To obtain the compressed representation, we replace each segment of equal characters in the string with the number of characters in the segment followed by the character(e.x we replace segment "CCCC" with 4C). To avoid increasing the size, we leave the one-letter segments unchanged(the compressed representation of "BC" is the same string - "BC"). For example, the compressed representation of the string "ABBBCCDDCCC" is "A3B2C2D3C", and the compressed representation of the string "AAAAAAAAAAABXXAAAAAAAAAA" is "11AB2X10A". Observe that, in the second example, if we removed the "BXX" segment from the middle of the word, we would obtain a much shorter compressed representation - "21A". In order to take advantage of this observation, we decided to modify the compression algorithm. Now before compression, we remove exactly K consecutive letters from the input string. We would like to know the shortest compressed form that we can generate this way.

Write a function:
that given a string S of length N and an integer K, returns the shortest possible length of the compressed representation of S after removing exactly K consecutive characters from S.
Example:
Given S = "AAAAAAAAAAABXXAAAAAAAAAA" and K=3, the function should return 3, because after removing "BXX" from S, we are left with "AAAAAAAAAAAAAAAAAAAAA", which compresses to a representation of length 3 - "21A".
Requirement:
N is an integer within the range [1...100,000];
K is an integer within the range [0...100,000];
K <= N;
string S consists only of uppercase letters (A-Z)

*/

const compressedString = (S, K) => {
    let chars = S.split('');
	let newS = chars[0];
	let i = 0,
		j = 0;
	let currChar = 0,
		nextChat = 0;
	let counterCurr = 0,
		counterNext = 0;

	console.log(`compressedString input S = ${S} newS= ${newS}`);

	for (i = 1; i < S.length; i++) {

         

    }

	return newS;
};

var val2 = compressedString('ABBBCCDDCCC', 3);
console.log('compressedString =' + val2 + '\n');

val2 = compressedString('AAAAAAAAAAABXXAAAAAAAAAA', 3);
console.log('compressedString =' + val2 + '\n');


/*

const shortestLength = (S, K) => {
	let length = Number.MAX_SAFE_INTEGER;
	console.log(`shortestLength input S = ${S} K= ${K}`);

	if (K > S.length) {
		return S.length;
	}

	let shortestStr = '';
	let chars = S.split('');
	console.log('shortestLength input chars = ' + chars + '\n');

	chars.forEach((char, index, arr) => {
		let tempStr = S.replace(S.substr(index, K), '');
		console.log('tempStr= ' + tempStr + '\n');

		let countObj = {};

		tempStr.split('').forEach(char => {
			countObj[char] === undefined ? (countObj[char] = 1) : countObj[char]++;
		});

		let ansStr = '';

		for (const char in countObj) {
			ansStr += `${countObj[char] === 1 ? '' : countObj[char]}${char}`;
		}

		if (ansStr.length < length) {
			//shortestStr = `${ansStr}`;
			shortestStr = ansStr;
		}

		length = ansStr.length < length ? ansStr.length : length;

		console.log('shortestStr= ' + shortestStr + ' length = ' + length + '\n');

		console.log(
			'ansStr= ' + ansStr + ' ansStr.length = ' + ansStr.length + '\n'
		);
	});

	console.log('END shortestStr= ' + shortestStr + ' length = ' + length + '\n');

	return length;
};

// document.write(solution("ABBBCCDDCCC", 3))
// console.log(shortestLength('ABBBCCDDCCC', 3));
var val = shortestLength('ABBBCCDDCCC', 3);
console.log('shortestLength =' + val + '\n');

val = shortestLength('AAAAAAAAAAABXXAAAAAAAAAA', 3);
console.log('shortestLength =' + val + '\n');

val = shortestLength('ABCDDEFG', 2);
console.log('shortestLength =' + val + '\n');

*/
////////////////////////////////////////////////////////////////////

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

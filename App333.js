import React, { Component } from "react";
import MyComponent from "./MyComponent";
import EventPractice from "./EventPractice";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";
import IterationSample from "./IterationSample";

function maxGap_CountGaps(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  let maxGap = 0;
  let binIntStr = N.toString(2);

  //console.log('42 to binary ' + 42..toString(2));
  console.log(N + " to binary " + binIntStr);

  let binArr = binIntStr.split("");
  // console.log(binIntStr + ' to binary array ' + binArr);

  let start1 = 0;
  let counter = 0,
    counterGaps = 0;

  for (let i = 0; i < binArr.length; i++) {
    if (1 === start1) {
      if ("0" === binArr[i]) {
        //console.log('1 === start1 0 === binArr[i] \n maxGap is ' + maxGap + ' counter ' + counter + '\n');
        counter++;
      } else if ("1" === binArr[i] && "0" === binArr[i - 1]) {
        //  console.log('1 === start1 1 === binArr[i] \n start1 ' + start1 + ' binArr[' + i + '] = ' + binArr[i] + '\n');

        maxGap = Math.max(maxGap, counter);
        counterGaps++;
        //  if (counter > maxGap) {
        //   maxGap = counter;
        // } //
        console.log(
          "loop maxGap is " +
            maxGap +
            " counter " +
            counter +
            " counterGaps " +
            counterGaps
        );
        counter = 0;
        start1 = 0;
      }
    } // (1 === start1)

    if (0 === start1) {
      if (
        "1" === binArr[i]
        // && (  ((i>0) && ("0" === binArr[i - 1] )) || (0 === i) )
      ) {
        start1 = 1;
        // console.log('1 === binArr[i] \n start1 ' + start1 +'---\n');
      }

      // console.log('0 === start1  \n start1 ' + start1 + ' binArr[' + i + '] = ' + binArr[i] + '\n');
    }
  } //loop

  console.log("maxGap is " + maxGap);

  return maxGap;
}
maxGap_CountGaps(1162);

/*
1162 to binary 10010001010 
loop maxGap is 2 counter 2 counterGaps 1 
loop maxGap is 3 counter 3 counterGaps 2 
loop maxGap is 3 counter 1 counterGaps 3 
maxGap is 3 
endArray 8,9,7,6,3
 
*/
// Example: { '3': 2, '7': 1, '9': 4 }

function CyclicRotation(A, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  //  let initialArray = [1, 2, 3, 4] ;
  let endArray = [...A];
  //let endArray = [...initialArray] ;

  // to save computation time, the array stays the same when K = arr length
  // so shift only the extra :)

  for (let nShifts = 0; nShifts < K % A.length; nShifts++) {
    endArray.unshift(endArray.pop());
  }

  // eighter solution is ok

  /* 
  for (let nShifts = 0; nShifts < (K % A.length); nShifts++) {
    let endItem = endArray[endArray.length - 1];
   
    // shift right the prior item
    for (let i = endArray.length - 1; i > 0; i--) {
      endArray[i] = endArray[i - 1];
    }
    endArray[0] = endItem;
  }
*/

  console.log("endArray " + endArray + "\n");

  return [...endArray];
}

var t0 = performance.now();

var ret = CyclicRotation([3, 8, 9, 7, 6], 4); //endArray 8,9,7,6,3
// <---- The function you're measuring time for

console.log("ret", ret);
var t1 = performance.now();
console.log("Call to CyclicRotation took " + (t1 - t0) + " milliseconds.");

/*

ret 
[8, 9, 7, 6, 3]
Call to CyclicRotation took 0.24500000290572643 milliseconds. 
0.20999996922910213 milliseconds. 0.1449999981559813 milliseconds. 


vs.
ret 
[8, 9, 7, 6, 3]
Call to CyclicRotation took 0.26000000070780516 milliseconds. 0.22500002523884177 milliseconds. 0.15000003622844815 milliseconds. 
*/

// Convert the array to a map
// with element as a key and number of occurrences as a value
// Example: { '3': 2, '7': 1, '9': 4 }

// Then filter the map by checking
//if the key's value is equal to 1
// Returns array with key

function oddOccur(A) {
  const makeIntegerOccurrencesMap = (map, nextInteger) => {
    const isMissingKey = key => map[key] === undefined;

    if (isMissingKey(nextInteger)) {
      map[nextInteger] = 0;
    }

    ++map[nextInteger];

    return map;
  };

  const isOdd = number => number % 2 !== 0;
  const integerOccurrencesMap = A.reduce(makeIntegerOccurrencesMap, {});

  return +Object.keys(integerOccurrencesMap).find(integer =>
    isOdd(integerOccurrencesMap[integer])
  );
}
/*
expected worst-case time complexity is O(N);
expected worst-case space complexity is O(1), beyond input storage (not counting the storage required for input arguments).
Elements of input arrays can be modified.
*/

function findSingle(a) {
  for (var i = 0; i < a.length; i++) {
    var first = a.indexOf(a[i]);
    var second = a.lastIndexOf(a[i]);

    //console.log(first)
    //console.log(second)

    if (first != -1 && first == second) {
      return a[i];
    }
    // console.log(a[i]);
  }
}
console.log("findSingle " + findSingle([9, 3, 9, 9, 7, 3, 3, 9]));
console.log("findSingle " + findSingle([3, 9, 3, 9, 3, 7, 7]));

// findSingle 7
// findSingle undefined

// Apply Bitwise XOR on current temp result and next element
//if the similar ( 0 or 1) bit will occur at the same position it
//will produce 0 ( i.e., false ) if otherwise non similar then it
//will produce 1 ( i.e., true).

function OddOccuricyFAST(A) {
  let result = 0;

  for (let element of A) {
    result ^= element;
  }

  return result;
}
console.log("OddOccuricyFAST " + OddOccuricyFAST([9, 3, 9, 3, 9, 7, 9]));
console.log("OddOccuricyFAST " + OddOccuricyFAST([3, 9, 3, 9, 3, 7, 7]));
console.log("OddOccuricyFAST " + OddOccuricyFAST([3, 3, 3, 1, 1, 7, 7]));

//OddOccuricyFAST 7
//OddOccuricyFAST 3
// 3 3 3 1 1 7 7
//   0 3 2 3 4 3

// NOT FAST!!!!!
function OddOccuricyFAST2(A) {
  const data = [...A];
  const freqMap = data.reduce(
    //(accumalor  is array, current value)
    // instead of:
    // map[AA_item] = (undefined === map[AA_item]) ? 1 : map[AA_item]+1;
    (map, AA_item) => ({ ...map, [AA_item]: (map[AA_item] | 0) + 1 }),
    {} // current value
  );
  const oddFreq = Object.keys(freqMap).filter(k => freqMap[k] % 2);
  //return oddFreq;  //[ '7' ] or [1,2 ]

  // or only the first one
  // console.log (oddFreq); //[ '7' ]
  return +oddFreq[0];
}
console.log(
  "OddOccuricyFAST2 " + OddOccuricyFAST2([1, 2, 2, 2, 4, 4, 4, 4, 4, 4, 5, 5])
);
console.log("OddOccuricyFAST2 " + OddOccuricyFAST2([9, 3, 9, 3, 9, 7, 9]));
console.log("OddOccuricyFAST2 " + OddOccuricyFAST2([3, 9, 3, 9, 3, 7, 7]));
console.log("OddOccuricyFAST2 " + OddOccuricyFAST2([3, 3, 3, 1, 1, 7, 7]));
// => ["1", "2"]
// OddOccuricyFAST2 1,2
// OddOccuricyFAST2 7
// OddOccuricyFAST2 3
// OddOccuricyFAST2 3

// "1,2,3,4".split(',').map(function(el){ return +el;});

function Distinct(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  //let valuesMap = new Map();

  let size = A.length || 0;

  //reduce(callback( accumulator, currentValue[, index[, array]] )[, initialValue])
  /*
  let freqMap = A.reduce( (map, Aitem) => {
          map[Aitem] = ++map[Aitem] || 1; // count, just in case
          return map;
      }, {});
  */
  const freqMap = A.reduce(
    //(accumalor  is array, current value)
    // instead of:
    // map[Aitem] = (undefined === map[Aitem]) ? 1 : map[Aitem]+1;
    (map, Aitem) => ({ ...map, [Aitem]: (map[Aitem] | 0) + 1 }),
    {} // current value
  );
  //console.log(valuesMap);
  //console.log(Object.keys(valuesMap).length);

  return Object.keys(freqMap).length || 0;
}

//Compute number of integers divisible by k in range [a..b].
function countDividablesByK(A, B, K) {
  return Math.floor(B / K) - Math.floor((A - 1) / K);
}

//=====================================================

function MinAvgTwoSlice(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const MAX_INT = 100000000;

  let Alen = Array.isArray(A) && A.length > 0 ? A.length : 0;

  if (2 > Alen) return -1; // just checking

  let currMin = A[0];
  let i = 1;

  let avgFrame = 2; // how many items we check
  let currStartIdx = 0;
  let currMinAvg = MAX_INT;
  let curAvg = 0;
  let sumStart = 0;

  // replace A with a sums array per each j for this j
  A = A.map((item, j) => (A[j] = j > 0 ? A[j - 1] + item : item));

  //console.log( 'A ', A);

  // we'll start changing A items with the former average
  // at each iteration after avgFrame incremented,
  // we compute ith average as ((A[i-1] * (avgFrame-1)) + A[i]) / avgFrame
  // at the end of each row we'll find the minial average
  // compute its currStartIdx = i-avgFrame+1
  // and place the currMinAvg at location currStartIdx only if currMinAvg < avgArr[currStartIdx]

  // one row
  while (avgFrame < Alen) {
    // min avg per row
    for (i = avgFrame - 1; i < Alen - 1; i++) {
      sumStart = i - avgFrame < 0 ? 0 : A[i - avgFrame];
      // console.log(`avgFrame=${avgFrame} i=${i} sumStart=${sumStart} `);

      curAvg = (A[i] - sumStart) / avgFrame;

      // console.log(`avgFrame=${avgFrame} i=${i} currStartIdx=${currStartIdx} curAvg= ${curAvg}`);

      if (currMinAvg > curAvg) {
        currMinAvg = curAvg;
        currStartIdx = i - avgFrame + 1;
      }

      // console.log (`currMinAvg  ${currMinAvg} currStartIdx  ${currStartIdx}`);
    } //for i

    avgFrame++;
  } // while avgFrame

  return currStartIdx;
}

function minimalPositiveIntMissing(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  /*
  A.sort((a,b) => a - b) to ensure A = [min, ..., max]
  prev = 0
  for each i=0, ..., A.length-1, {
      if max(Ai, 1) - max(prev, 0) >1 => return missing = max(prev, 0) + 1
         //each negative or 0 turns to 1 or 0, positive int
         // this applies to A len =1 also
      else => prev = Ai 
  }
  end of loop, prev = A[len-1] => return missing = max(prev, 0) + 1
  
  
  test cases:
  
  [100, 101, 103]
  [-1, -3, 1, 2]
  [-3, 0, 2]
  [0]
  [1]
  [1000]
  [-3]
  */

  const len = A.length | 0;

  let prev = 0,
    i = 0;

  try {
    A.sort((a, b) => a - b); // asc, note that sort() for -1, -3 will stay -1 -3!

    console.log("sorted ", A);

    for (i = 0; i < len; i++) {
      console.log(
        `i ${i} A[i] ${A[i]} ${Math.max(A[i], 1)} prev ${prev} ${Math.max(
          prev,
          0
        )}`
      );

      if (Math.max(A[i], 1) - Math.max(prev, 0) > 1) {
        console.log(`in loop prev ${prev} ret ${Math.max(prev, 0) + 1}`);

        return Math.max(prev, 0) + 1;
      }

      prev = A[i];
      console.log(`i ${i} prev ${prev}`);
    }

    // here i= len, prev= A[len-1], even for len =1 prev =A[0]
    console.log(`out of loop prev ${prev} ret ${Math.max(prev, 0) + 1}`);

    return Math.max(prev, 0) + 1;
  } catch (e) {
    console.log(e);
  }
}

function BracketsStack(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  /*
    {[()()]}
     ([)()]
     
     " 3]]"
      'w[k'
      'w[4]'
      '89]ddf'
      ''
      '{23}ui{dd'
      '(hsdkha('
      '(htb[12]'
      '((((((((((((((((((((((((((())))))))))))))))))))))))))))('
  */

  const MAX_S_LEN = 200000;
  const lenS = S.length | 0;

  const startCodes = "([{",
    endCodes = ")]}"; // MUST BE SAME INDEX !

  const OK_CODE = 1,
    ERR_CODE = 0,
    NOT_FOUND = -1;

  let codesQ = [],
    sizeCodesQ = 0,
    curCode = "",
    prevStartIdx = "",
    curStartIdx = 0,
    curEndIdx = 0;

  for (let i = 0; i < lenS && i < MAX_S_LEN; i++) {
    curCode = S.charAt(i);
    curStartIdx = startCodes.indexOf(curCode);
    curEndIdx = endCodes.indexOf(curCode);

    // console.log(codesQ);

    // console.log(
    //   `i ${i}  curCode  ${curCode}  curStartIdx ${curStartIdx} curEndIdx ${curEndIdx}  `
    // );

    if (curStartIdx > NOT_FOUND) {
      // this is a start code

      codesQ.push(curStartIdx);
    } else if (curEndIdx > NOT_FOUND) {
      //its an end code

      if ((codesQ.length | 0) > 0) {
        prevStartIdx = codesQ.pop();

        if (curEndIdx != prevStartIdx) {
          // not the matching end code
          return ERR_CODE;
        }
      } else {
        return ERR_CODE;
      }
    }
  }

  //console.log(`end loop  `, codesQ);

  // completed traversing all S or jumped here cause lenS = 0...
  // if codesQ still contains unClosed start codes, its an ERR

  return (codesQ.length | 0) > 0 ? ERR_CODE : OK_CODE;
}

function BracketsStack2(S) {
  // write your code in JavaScript (Node.js 8.9.4)

  /*
  {[()()]}
   ([)()]
   
   " 3]]"
    'w[k'
    'w[4]'
    '89]ddf'
    ''
    '{23}ui{dd'
    '(hsdkha('
    '(htb[12]'
    '((((((((((((((((((((((((((())))))))))))))))))))))))))))('
*/

  const MAX_S_LEN = 200000;
  const lenS = S.length | 0;

  const startCodes = "([{",
    endCodes = ")]}"; // MUST BE SAME INDEX !
  const matchingStartEnd = {
    "(": ")",
    "[": "]",
    "{": "}"
  };

  const OK_CODE = 1,
    ERR_CODE = 0,
    NOT_FOUND = -1;

  let codesQ = [],
    curCode = "",
    prevStartCode = "";

  if (!lenS) {
    return 1;
  }

  for (let i = 0; i < lenS; i++) {
    curCode = S[i];

    // console.log(codesQ);
    //console.log(curCode);

    // console.log(
    //   `i ${i}  curCode  ${curCode}  curStartIdx ${curStartIdx} curEndIdx ${curEndIdx}  `
    // );

    if (matchingStartEnd[curCode]) {
      // this is a start code

      codesQ.push(curCode);
    } else {
      //its an end code

      if (codesQ.length > 0) {
        prevStartCode = codesQ.pop();

        if (curCode != matchingStartEnd[prevStartCode]) {
          // not the matching end code
          return ERR_CODE;
        }
      } else {
        return ERR_CODE;
      }
    }
  }

  //console.log(`end loop  `, codesQ);

  // completed traversing all S or jumped here cause lenS = 0...
  // if codesQ still contains unClosed start codes, its an ERR

  return codesQ.length > 0 ? ERR_CODE : OK_CODE;
}

//

let S = "";
console.log(S[100]);
S = S.padEnd(1000, "(");
console.log("S ", S);
S = S.padEnd(S.length + 10000, ")");
console.log("S ", S);
S = S.padEnd(S.length + 2, ")(");
console.log("S ", S.length);

var t0 = performance.now();

var ret = BracketsStack(S); // <---- The function you're measuring time for

console.log("ret", ret);
var t1 = performance.now();
console.log("Call to BracketsStack took " + (t1 - t0) + " milliseconds.");
//Call to BracketsStack took 0.7250000052154064 milliseconds.
//Call to BracketsStack took 2.11499999568332 milliseconds.

//Call to BracketsStack took 1.0549999861977994 milliseconds.
//Call to BracketsStack took 0.40499999886378646 milliseconds.
//Call to BracketsStack took 0.6350000039674342 milliseconds.

var t0 = performance.now();

var ret = BracketsStack2(S); // <---- The function you're measuring time for

console.log("ret", ret);
var t1 = performance.now();
console.log("Call to BracketsStack2 took " + (t1 - t0) + " milliseconds.");

//Call to BracketsStack2 took 0.31999999191612005 milliseconds.
//Call to BracketsStack2 took 0.31999999191612005 milliseconds.
//Call to BracketsStack2 took 0.3399999984540045 milliseconds.

function ERRaliveDowStreamConnectionsCount(A, B) {
  // write your code in JavaScript (Node.js 8.9.4)

  /*
    
    ([4, 3, 2, 1, 5], [0, 1, 0, 0, 0])
    ([4, 3, 2, 1, 5, 6 ,8, 8, 9, 9, 9, 3, 10, 11], [0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0])
  ([ 5], [0])
  ([ 5], [1])
    ([ 5 , 6], [1, 0])
    ([ 6 , 5], [1, 0])
    ([ 5 , 6], [1, 1])
    ([ 5 , 5], [0, 0])
    ([ 5 , 6], [1, 0])
    ([ 6 , 5], [1, 0])
    ([ 5 , 6], [1, 1])
    
    ([1,  5, 6], [0, 0, 1])
    ([1,  6 , 5], [0, 1, 0])
    ([1,  5 , 6], [0, 1, 0])
    ([1,  6 , 5], [0, 1, 1])
    ([ 5 , 5, 3], [1, 1 , 0])
    ([ 5 , 5, 6], [1, 1 , 0])
    
    ([ 6 , 5, 3], [1, 0 , 0])
    ([ 5 , 6, 3], [1, 0 , 1])
    ([ 6 , 5, 2], [1, 0 , 0])
    ([ 6 , 5, 7], [1, 0 , 0])
    ([ 5 , 6, 7], [1, 0 , 1])

    
    ([ 5 , 5, 6, 7], [1, 1 , 0, 1])
    
    
    
    */

  const inputLen = A.length | B.length | 0;

  let arrAlive = [0]; // = i = 0
  //countAlive = 1;

  let P = -1,
    Q = 0,
    priorB = 0,
    currentB = 1,
    priorA = 0,
    currentA = 0;

  // console.log(`inputLen ${inputLen} A , B `, A, B);

  for (let i = 1; i < inputLen; i++) {
    // P= arrAlive[ countAlive-1 ];
    // Q =i;

    priorB = B[arrAlive[arrAlive.length - 1]];
    currentB = B[i];

    console.log(
      `priorB ${priorB} currentB ${currentB} curr arrAlive `,
      arrAlive
    );

    // if biggest level till now with B=1 then a bigger B=0 will replace it in the Queue
    // and so on, till next B =1, then the new B=1 will be the last biggest.
    // if biggest level till now with B=0, all new B=0 or B = 1 go in

    if (1 === priorB && 0 === currentB) {
      priorA = A[arrAlive[arrAlive.length - 1]];
      currentA = A[i];

      if (currentA > priorA) {
        arrAlive.pop();
        arrAlive.push(i);

        console.log(
          `priorA ${priorA} currentA ${currentA} NEW arrAlive `,
          arrAlive
        );
      }
    } else {
      arrAlive.push(i);

      console.log(
        `priorA ${priorA} currentA ${currentA} NEW arrAlive `,
        arrAlive
      );
    }
  }

  console.log(`arrAlive length ${arrAlive.length}  `, arrAlive);

  return arrAlive.length | 0;
}

function aliveDowStreamConnectionsCount(A, B) {
  // write your code in JavaScript (Node.js 8.9.4)

  /*
    
    ([4, 3, 2, 1, 5], [0, 1, 0, 0, 0])
    ([4, 3, 2, 1, 5, 6 ,8, 8, 9, 9, 9, 3, 10, 11], [0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0])
  ([ 5], [0])
  ([ 5], [1])
    ([ 5 , 6], [1, 0])
    ([ 6 , 5], [1, 0])
    ([ 5 , 6], [1, 1])
    ([ 5 , 5], [0, 0])
    ([ 5 , 6], [1, 0])
    ([ 6 , 5], [1, 0])
    ([ 5 , 6], [1, 1])
    
    ([1,  5, 6], [0, 0, 1])
    ([1,  6 , 5], [0, 1, 0])
    ([1,  5 , 6], [0, 1, 0])
    ([1,  6 , 5], [0, 1, 1])
    ([ 5 , 5, 3], [1, 1 , 0])
    ([ 5 , 5, 6], [1, 1 , 0])
    
    ([ 6 , 5, 3], [1, 0 , 0])
    ([ 5 , 6, 3], [1, 0 , 1])
    ([ 6 , 5, 2], [1, 0 , 0])
    ([ 6 , 5, 7], [1, 0 , 0])
    ([ 5 , 6, 7], [1, 0 , 1])

    
    ([ 5 , 5, 6, 7], [1, 1 , 0, 1])
     ([ 5 , 5, 6, 8 , 3 ,4, 7], [1, 1 , 0, 0, 1, 1, 0])
    
    
    
    */

  const inputLen = A.length | B.length | 0;

  let arrAlive = [0]; // = i = 0
  //countAlive = 1;

  let P = -1,
    Q = 0,
    priorB = 0,
    currentB = 1,
    priorA = 0,
    currentA = 0,
    stopFlag = 0;

  // console.log(`inputLen ${inputLen} A , B `, A, B);

  for (let i = 1; i < inputLen; i++) {
    // P= arrAlive[ countAlive-1 ];
    // Q =i;

    currentB = B[i];

    // console.log(`priorB ${priorB} currentB ${currentB} curr arrAlive `, arrAlive);

    /*
    if current B =0 as long as former B = 1, if currA > formerA pop(former), push(curr)
   
*/
    if (0 === currentB) {
      var addNew = 1;
      stopFlag = 0;

      // find all alive opposite direction
      //------------------------------------

      while (arrAlive.length > 0 && 0 === stopFlag) {
        priorB = B[arrAlive[arrAlive.length - 1]];

        if (0 === priorB) {
          stopFlag = 1;
        } else {
          //if ( 1 === priorB ) {
          priorA = A[arrAlive[arrAlive.length - 1]];
          currentA = A[i];

          if (currentA > priorA) {
            arrAlive.pop();
          }
          // new has been eliminated
          else {
            stopFlag = 1;
            addNew = 0;
          }
        } // opposite former predator
      } // while

      if (1 === addNew) {
        arrAlive.push(i);
      }
    } else {
      arrAlive.push(i);
    }
  } //for

  // console.log(`arrAlive length ${arrAlive.length}  `, arrAlive);

  return arrAlive.length | 0;
}

/*
Example test:   ([4, 3, 2, 1, 5], [0, 1, 0, 0, 0])
Output:
priorB 0 currentB 1 curr arrAlive  [ 0 ]
priorB 0 currentB 0 curr arrAlive  [ 0, 1 ]
priorB 1 currentB 0 curr arrAlive  [ 0, 1 ]
priorB 1 currentB 0 curr arrAlive  [ 0, 1 ]
arrAlive length 2   [ 0, 4 ]
OK

Your test case: [[6, 5, 3], [1, 1, 0]]
Output:
priorB 0 currentB 1 curr arrAlive  [ 0 ]
priorB 0 currentB 0 curr arrAlive  [ 0, 1 ]
arrAlive length 2   [ 0, 1 ]
Returned value: 2

Your test case: [[1, 5, 6], [0, 0, 1]]
Output:
priorB 0 currentB 0 curr arrAlive  [ 0 ]
priorB 0 currentB 1 curr arrAlive  [ 0, 1 ]
arrAlive length 3   [ 0, 1, 2 ]
Returned value: 3

Your test case: [[1, 6, 5], [0, 1, 0]]
Output:
priorB 0 currentB 1 curr arrAlive  [ 0 ]
priorB 0 currentB 0 curr arrAlive  [ 0, 1 ]
arrAlive length 2   [ 0, 1 ]
Returned value: 2

Your test case: [[1, 5, 6], [0, 1, 0]]
Output:
priorB 0 currentB 1 curr arrAlive  [ 0 ]
priorB 0 currentB 0 curr arrAlive  [ 0, 1 ]
arrAlive length 2   [ 0, 2 ]
Returned value: 2

Your test case: [[1, 6, 5], [0, 1, 1]]
Output:
priorB 0 currentB 1 curr arrAlive  [ 0 ]
priorB 0 currentB 1 curr arrAlive  [ 0, 1 ]
arrAlive length 3   [ 0, 1, 2 ]
Returned value: 3

Your test case: [[5, 5, 3], [1, 1, 0]]
Output:
priorB 0 currentB 1 curr arrAlive  [ 0 ]
priorB 0 currentB 0 curr arrAlive  [ 0, 1 ]
arrAlive length 2   [ 0, 1 ]
Returned value: 2

Your test case: [[5, 5, 6], [1, 1, 0]]
Output:
priorB 0 currentB 1 curr arrAlive  [ 0 ]
priorB 0 currentB 0 curr arrAlive  [ 0, 1 ]
arrAlive length 1   [ 2 ]
Returned value: 1


Your test case: [[5, 5, 6, 8, 3, 4, 7], [1, 1, 0, 0, 1, 1, 0]]
Returned value: 3

*/

function nestedString(S) {
  // write your code in JavaScript (Node.js 8.9.4)

  /*
   
   ')()()()()'
  '(()()()())('
  '('
  ')'
  '()((()))'
  ''
   */

  const matchingStartEnd = { "(": ")" },
    OK_CODE = 1,
    ERR_CODE = 0;

  const lenS = S.length | 0;
  let curStart = "",
    currEnd = "",
    curChar = "";
  let bracketsStack = [];

  console.log("S ", S);

  if (0 === S.len) return OK_CODE;

  for (let i = 0; i < lenS; i++) {
    curStart = S[i];

    //console.log(`curStart ${curStart} bracketsStack `, bracketsStack);

    if (undefined !== matchingStartEnd[curStart]) {
      bracketsStack.push(S[i]); // push start code
    } else {
      //end code

      if (bracketsStack.length > 0) {
        currEnd = curStart;
        curStart = bracketsStack.pop();

        if (currEnd !== matchingStartEnd[curStart]) {
          return ERR_CODE;
        }
      } else {
        return ERR_CODE;
      }
    }
  }

  return bracketsStack.length > 0 ? ERR_CODE : OK_CODE;
}

S = "";
//console.log(S[100]);
S = S.padEnd(1000, "(");
console.log("S ", S);
S = S.padEnd(S.length + 10000, ")");
console.log("S ", S);
S = S.padEnd(S.length + 2, ")(");
console.log("S ", S.length);

t0 = performance.now();

var ret = nestedString(S); // <---- The function you're measuring time for

console.log("ret", ret);
var t1 = performance.now();
console.log("Call to nestedString took " + (t1 - t0) + " milliseconds.");

function StoneWall(H) {
  // write your code in JavaScript (Node.js 8.9.4)

  let len = H.length | 0,
    wall = [H[0]],
    count = 1;

  if (len < 1) {
    return 0;
  }
  for (var i = 1; i < len; i++) {
    var currentHeight = H[i];

    while (wall.length && wall[wall.length - 1] >= currentHeight) {
      if (currentHeight === wall[wall.length - 1]) {
        count--; // same block
      }
      //
      wall.pop();
    }
    wall.push(currentHeight);
    count++;
  }
  return count;
}

/*
Example test:   [8, 8, 5, 7, 9, 8, 7, 4, 8]
OK

*/

const isPalindrome = P => {
  const lenP = P.length | 0;
  let i = 0,
    j = P.length - 1,
    count = 0;

  console.log(`isPalindrome lenP ${lenP}  count ${count}`);

  if (2 > lenP) return 0;

  while (i < j) {
    if (P[i] === P[j]) {
      count++;
    }

    i++;
    j--;
    console.log(`i ${i} j ${j} count ${count}`);
  }

  console.log(`END i ${i} j ${j} count ${count}`);
  return i === count ? 1 : 0;
};

//var AP = [ 1, 2, 3, 3, 2, 1];
//var AP = [ 1, 2, 3, 3, 3, 2, 1];
//var AP = [ 1, 2, 3, 5, 3, 2, 1];
var AP = ["a", "b", "c", "c", "b", "a"];
//var AP = [ 'a', 'b', 'c', 'D','c', 'b', 'a'];

t0 = performance.now();

var res1 = isPalindrome(AP);

t1 = performance.now();

console.log("res1", res1);
console.log("Call to isPalindrome took " + (t1 - t0) + " milliseconds.");

/*

isPalindrome lenP 7  count 0 
i 1 j 5 count 1 
i 2 j 4 count 2 
i 3 j 3 count 3 
END i 3 j 3 count 3 
res1 
1
Call to isPalindrome took 0.3400000333786011 milliseconds. 

isPalindrome lenP 6  count 0 
i 1 j 4 count 1 
i 2 j 3 count 2 
i 3 j 2 count 3 
END i 3 j 2 count 3 
res1 
1
Call to isPalindrome took 0.27000004053115845 milliseconds. 

isPalindrome lenP 7  count 0 
i 1 j 5 count 1 
i 2 j 4 count 2 
i 3 j 3 count 3 
END i 3 j 3 count 3 
res1 
1
Call to isPalindrome took 0.27000001072883606 milliseconds. 

isPalindrome lenP 6  count 0 
i 1 j 4 count 1 
i 2 j 3 count 2 
i 3 j 2 count 3 
END i 3 j 2 count 3 
res1 
1
Call to isPalindrome took 0.2199999988079071 milliseconds. 

*/

function equiLeaderCounter(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  /*
  [6,6,8,4,6,6,8]
  [8,6,8,4,6,6,6]
  [4, 4, 2, 5, 3, 4, 4, 4]
    */

  const N = A.length | 0,
    N_DIV_2 = Math.floor(N / 2);
  let candidate = -1,
    leader = -1,
    count = 0,
    i = 0;
  let leaderRightCount = 0,
    countEquiLeaders = 0,
    indexes = [];

  if (3 > N) return 0;

  // In a sorted array most likely that A[n/2] is the leader
  //  ( 0…n/2 = n/2+1 = (n+2)/2 )
  // first find the leader
  for (i = 0, count = 0; i < N; i++) {
    // whenever a specific value count = 0 , time to switch candidate
    if (0 === count) {
      count++;
      candidate = A[i];
    } else {
      if (A[i] === candidate) {
        count++;
      } else {
        count--;
      }
    }
  } //for

  if (count <= 0) {
    candidate = -1;
  }

  for (i = 0, count = 0; i < N; i++) {
    if (A[i] === candidate) {
      indexes.push(i); // good only for returning the leader locations
      count++;
    }
  } //for

  leader = count > N_DIV_2 ? candidate : -1;

  console.log(
    "leader " +
      leader +
      " leaderCount " +
      count +
      " N_DIV_2 " +
      N_DIV_2 +
      " indexes ",
    indexes
  );

  // must check all posible string size options
  //---------------------------------

  var leaderLeftCount = 0;
  leaderRightCount = count;

  for (let k = 0; k < N - 1; k++) {
    var lenLeft = k + 1;
    var lenRight = N - lenLeft;

    // console.log(
    //   "lenLeft " + lenLeft + " lenRight " + lenRight + " indexes ",
    //   indexes
    // );

    //console.log( "leaderLeftCount " +   leaderLeftCount + " leaderRightCount " +     leaderRightCount    );

    if (A[k] === leader) {
      leaderLeftCount++;
      leaderRightCount--;
    }
    if (leaderLeftCount > lenLeft / 2 && leaderRightCount > lenRight / 2) {
      countEquiLeaders++;
      //console.log("true countEquiLeaders " + countEquiLeaders);
    }

    //console.log("countEquiLeaders " + countEquiLeaders);
  }

  //console.log( indexes[ Math.floor( indexes.length / 2) ]  );

  return countEquiLeaders;
}

//var Arr = [4, 3, 4, 4, 4, 2];  //2
//var Arr = [8,6,8,4,6,6,6];  //1
var Arr = [4, 4, 2, 5, 3, 4, 4, 4]; //3
//var Arr = [4];
//var Arr = [4,2];
//var Arr = [4,2, 2];
//var Arr = [0, 0];

var t0 = performance.now();

var ret = equiLeaderCounter(Arr); // <---- The function you're measuring time for

console.log("ret", ret);
var t1 = performance.now();
console.log("Call to equiLeaderCounter took " + (t1 - t0) + " milliseconds.");

/*
ret 
3
Call to equiLeaderCounter took 0.18500001169741154 milliseconds. 
ret 
3
Call to equiLeaderStack took 0.1900000497698784 milliseconds. 
*/

function equiLeaderStack(A) {
  //const frequence = {}; // object of arrays!
  const frequence = []; // array of arrays!
  const half = Math.floor(A.length / 2);

  let result = 0;

  let leaderFrequence = 0;
  let leaderValue = 0;

  for (let i = 0; i < A.length; i++) {
    if (frequence[A[i]] === undefined) {
      frequence[A[i]] = [i]; // must
    } else {
      frequence[A[i]].push(i);
    }
    if (
      frequence[A[i]].length > half &&
      frequence[A[i]].length > leaderFrequence
    ) {
      leaderFrequence = frequence[A[i]].length;
      leaderValue = A[i];
    }
  }

  let numOfLeaderInLeft = 0;

  // return frequence[f][0]
  for (let j = 0; j < A.length; j++) {
    //length of left array
    const leftLen = j + 1;

    //num of leaders in the left array
    if (A[j] === leaderValue) numOfLeaderInLeft++;

    //length of right array
    const rightLen = A.length - leftLen;

    // num of leaders in the right array
    const numOfLeaderInRight = leaderFrequence - numOfLeaderInLeft;

    if (
      numOfLeaderInLeft > Math.floor(leftLen / 2) &&
      numOfLeaderInRight > Math.floor(rightLen / 2)
    ) {
      result++;
    }
  }

  return result;
}

//var Arr = [4, 3, 4, 4, 4, 2];  //2
//var Arr = [8,6,8,4,6,6,6];  //1
//var Arr =[4, 4, 2, 5, 3, 4, 4, 4]; //3
//var Arr = [4];
//var Arr = [4,2];
//var Arr = [4,2, 2];
//var Arr = [0, 0];

var t0 = performance.now();

var ret = equiLeaderStack(Arr); // <---- The function you're measuring time for

console.log("ret", ret);
var t1 = performance.now();
console.log("Call to equiLeader took " + (t1 - t0) + " milliseconds.");

/*


ret 
3
Call to equiLeaderCounter took 0.2049999893642962 milliseconds. 
ret 
3
Call to equiLeader took 0.18999999156221747 milliseconds. 


*/

/*
 */
function CountFactors(N) {
  const sqetN = Math.floor(Math.sqrt(N));

  let countDividors = 0,
    i = 1;

  if (1 === N) return 1;

  while (i <= sqetN) {
    if (N % i === 0) {
      countDividors += 2;
    }

    i++;
  }

  return countDividors;
}

var N = 25;
console.log(" CountFactors N " + N, CountFactors(N));

function PrimalityTest(N) {
  const sqetN = Math.floor(Math.sqrt(N));

  console.log(" PrimalityTest N sqetN " + N, sqetN);

  let i = 2;

  if (1 === N) return 1;

  while (i <= sqetN) {
    if (N % i === 0) {
      return 0;
    }

    i++;
  }

  return 1;
}

N = 11;

console.log(" PrimalityTest N " + N, PrimalityTest(N));

N = 1;

const numOfcoinsFlippedToTail = Num => {
  const len = Num;
  let count = 0,
    k = 0;

  let coin = Array(Num + 1).fill(0);

  console.log("coin " + coin);

  for (let i = 1; i < Num + 1; i++) {
    k = i;

    //for each coin if flipped even times, it returns to Head,
    //its original StaticRange.
    while (k < Num) {
      coin[k] = (coin[k] + 1) % 2; // 1 if even 0 if odd
      console.log("coin " + coin);
      k += i;
    } // coin

    count += coin[i];
  } // coins

  return count;
};

// Each coin will be turned over exactly as many times as the
// number of its divisors.
// The coins that are reversed an odd number of times show tails, meaning
// that it is sufficient to find the coins with an odd number of divisors.

const numOfcoinsFlippedToTailShort = Num => {
  const len = Num;
  let count = 0,
    k = 0;

  let coin = Array(Num + 1).fill(0);

  console.log("coin " + coin);

  for (let i = 1; i < Num + 1; i++) {
    k = i;

    //Compute number of integers divisible by k in range [a..b].
    //function countDividablesByK(A, B, K) {
    coin[i] = Math.floor(10 / i) - Math.floor((1 - 1) / i);

    //for each coin if flipped even times, it returns to Head,
    //its original StaticRange.

    count += (coin[i] + 1) % 2;
  } // coins

  return count;
};

console.log("numOfcoinsFlippedToTailShort ", numOfcoinsFlippedToTailShort(10)); //3

let MyArr = Array(1000).fill(4);
console.log("MyArr " + MyArr);

/*
coin 0,0,0,0,0,0,0,0,0,0,0 
coin 0,1,0,0,0,0,0,0,0,0,0 
coin 0,1,1,0,0,0,0,0,0,0,0 
coin 0,1,1,1,0,0,0,0,0,0,0 
coin 0,1,1,1,1,0,0,0,0,0,0 
coin 0,1,1,1,1,1,0,0,0,0,0 
coin 0,1,1,1,1,1,1,0,0,0,0 
coin 0,1,1,1,1,1,1,1,0,0,0 
coin 0,1,1,1,1,1,1,1,1,0,0 
coin 0,1,1,1,1,1,1,1,1,1,0 
coin 0,1,0,1,1,1,1,1,1,1,0 
coin 0,1,0,1,0,1,1,1,1,1,0 
coin 0,1,0,1,0,1,0,1,1,1,0 
coin 0,1,0,1,0,1,0,1,0,1,0 
coin 0,1,0,0,0,1,0,1,0,1,0 
coin 0,1,0,0,0,1,1,1,0,1,0 
coin 0,1,0,0,0,1,1,1,0,0,0 
coin 0,1,0,0,1,1,1,1,0,0,0 
coin 0,1,0,0,1,1,1,1,1,0,0 
coin 0,1,0,0,1,0,1,1,1,0,0 
coin 0,1,0,0,1,0,0,1,1,0,0 
coin 0,1,0,0,1,0,0,0,1,0,0 
coin 0,1,0,0,1,0,0,0,0,0,0 
coin 0,1,0,0,1,0,0,0,0,1,0 
numOfcoinsFlippedToTail  3
*/

const PrimeDivisors = Num => {
  let isPrimeArr = Array(Num + 1).fill(true);

  isPrimeArr[0] = isPrimeArr[1] = false;

  let i = 2,
    k = 0;

  while (i * i <= Num) {
    // find all multiplications of i that weren't covered by i-1
    if (isPrimeArr[i]) {
      k = i * i;
      while (k <= Num) {
        isPrimeArr[k] = false;
        k += i;
      }
    }

    i++;
  }

  return isPrimeArr;
};

console.log("PrimeDivisors 10 ", PrimeDivisors(10));
//PrimeDivisors 17
[false, false, true, true, false, true, false, true, false, false, false];

console.log("PrimeDivisors 17 ", PrimeDivisors(17));
//PrimeDivisors 17  : 2, 3, 5,  7, 11,13, 17
//[false, false, true, true, false, true, false, true, false, false, false, true, false, true, false, false, false, true]

///=======================================================================
////   FTP insert unsorted data packet to its right place
////=====================================================================

const InsertSortInputData = (newArrival, InSortedA) => {
  //console.log('insertSortInputData START)', newArrival,  InSortedA );

  let SArr = [];

  if (InSortedA.length === 0) {
    SArr.push(newArrival);

    //console.log('InSortedA.length === 0 SArr ' , SArr);

    return SArr;
  } else {
    SArr = InSortedA.concat();
    //console.log('copy InArr  SArr ' , InSortedA, SArr);
  }

  //console.log('insertSortInputData 2 newArrival InSortedA SArr',
  //                                 newArrival, InSortedA, SArr );

  // find first index of a bigger then val

  if (InSortedA[InSortedA.length - 1] <= newArrival) {
    SArr.push(newArrival);
    // console.log('push at END InSortedA SArr ' , InSortedA, SArr);

    return SArr;
  }

  // -4 -3 -2 -1 0 1 2 3 4

  var foundBigger = SArr.find(sa => sa >= newArrival);
  //console.log('insertSortInputData foundBigger)',  foundBigger );

  var foundBiggerIdx = SArr.indexOf(foundBigger);
  //console.log('insertSortInputData foundBiggerIdx)',  foundBiggerIdx );

  const INSERT_ONLY = 0;
  SArr.splice(foundBiggerIdx, INSERT_ONLY, newArrival);

  //console.log('insertSortInputData END)', newArrival,  SArr );

  return SArr;
};

const SA = [-4, -1, 0, 0, 3, 3, 3, 4, 4, 5, 5];
//const SA = [];
//  0   1  2  3  4  5  6  7   8  9  10
//const newVal = 9;
//const newVal = 2;
//const newVal = 5;
const newVal = 3;

console.log("calling insertSortInputData)", newVal, SA);

var t0 = performance.now();

var SAOut = InsertSortInputData(newVal, SA); // <---- The function you're measuring time for

var t1 = performance.now();

console.log("result SAOut", SAOut);
console.log("Call to InsertSortInputData took " + (t1 - t0) + " milliseconds.");

/*

calling insertSortInputData) 
-9
[]
InSortedA.length === 0 SArr  
[-9]
result SAOut 
[-9]

calling insertSortInputData) 
-9
[-4, -1, 0, 0, 3, 3, 3, 4, 4, 5, 5]
insertSortInputData 2 newArrival InSortedA SArr 
-9
[-4, -1, 0, 0, 3, 3, 3, 4, 4, 5, 5]
[-9, -4, -1, 0, 0, 3, 3, 3, 4, 4, 5, 5]
insertSortInputData foundBigger) 
-4
insertSortInputData foundBiggerIdx) 
0
insertSortInputData END) 
-9
[-9, -4, -1, 0, 0, 3, 3, 3, 4, 4, 5, 5]
result SAOut 
[-9, -4, -1, 0, 0, 3, 3, 3, 4, 4, 5, 5]

alling insertSortInputData) 
2
[-4, -1, 0, 0, 3, 3, 3, 4, 4, 5, 5]
insertSortInputData 2 newArrival InSortedA SArr 
2
[-4, -1, 0, 0, 3, 3, 3, 4, 4, 5, 5]
[-4, -1, 0, 0, 2, 3, 3, 3, 4, 4, 5, 5]
insertSortInputData foundBigger) 
3
insertSortInputData foundBiggerIdx) 
4
insertSortInputData END) 
2
[-4, -1, 0, 0, 2, 3, 3, 3, 4, 4, 5, 5]
result SAOut 
[-4, -1, 0, 0, 2, 3, 3, 3, 4, 4, 5, 5]


calling insertSortInputData) 
5
[-4, -1, 0, 0, 3, 3, 3, 4, 4, 5, 5]
insertSortInputData 2 newArrival InSortedA SArr 
5
[-4, -1, 0, 0, 3, 3, 3, 4, 4, 5, 5]
[-4, -1, 0, 0, 3, 3, 3, 4, 4, 5, 5, 5]
push at END InSortedA SArr  
[-4, -1, 0, 0, 3, 3, 3, 4, 4, 5, 5]
[-4, -1, 0, 0, 3, 3, 3, 4, 4, 5, 5, 5]
result SAOut 
[-4, -1, 0, 0, 3, 3, 3, 4, 4, 5, 5, 5]

calling insertSortInputData) 
3
[-4, -1, 0, 0, 3, 3, 3, 4, 4, 5, 5]
insertSortInputData 2 newArrival InSortedA SArr 
3
[-4, -1, 0, 0, 3, 3, 3, 4, 4, 5, 5]
[-4, -1, 0, 0, 3, 3, 3, 3, 4, 4, 5, 5]
insertSortInputData foundBigger) 
3
insertSortInputData foundBiggerIdx) 
4
insertSortInputData END) 
3
[-4, -1, 0, 0, 3, 3, 3, 3, 4, 4, 5, 5]
result SAOut 
[-4, -1, 0, 0, 3, 3, 3, 3, 4, 4, 5, 5]
*/
//-------------------------------------------------------------

const InsertSortInputStream = (InArr, S) => {
  const lenInArr = InArr.length | 0;
  var StempArr = S.concat();

  for (let i = 0; i < lenInArr; i++) {
    StempArr = InsertSortInputData(InArr[i], StempArr);
  }

  return StempArr;
};

const SA1 = [-4, -1, 0, 0, 3, 3, 3, 4, 4, 5, 5];
//const SA = [];
const newData = [-7, 6, 8, 3, -3, 0, 70, -12, 2, 1, 5];

var t0 = performance.now();

let resSortedArr = InsertSortInputStream(newData, SA1);

var t1 = performance.now();

console.log("InsertSortInputStream res", resSortedArr);
console.log(
  "Call to InsertSortInputStream took " + (t1 - t0) + " milliseconds."
);

/*
calling insertSortInputData) 
3
[-4, -1, 0, 0, 3, 3, 3, 4, 4, 5, 5]
result SAOut 
[-4, -1, 0, 0, 3, 3, 3, 3, 4, 4, 5, 5]
Call to InsertSortInputData took 0.07000000961124897 milliseconds. 
InsertSortInputStream res 
[-12, -7, -4, -3, -1, 0, 0, 0, 1, 2, 3, 3, 3, 3, 4, 4, 5, 5, 5, 6, 8, 70]
*/

/*
Write a function solution that, given an integer N, returns the maximum possible value obtained by inserting one '5' digit inside the decimal representation of integer N. Examples: 1. Given N 268, the function should return 5268. 2. Given N 670, the function should return 6750. 3. Given N 0, the function should return 50. 4. Given N -999, the function should return -5999. Assume that: N is an integer within the range [-8,000.8,000]
*/

const FindMaxWhenAddedDigit = (N, inDigit) => {
  const INSERT_ONLY = 0;
  let foundFirstIdx = 0;

  let digits = [];

  digits = ("" + Math.abs(N)).split("");

  // for positive nums find the 1st index of the smalest and insert at that index
  if (N >= 0) {
    console.log("start POS digits ", digits);

    foundFirstIdx = digits.findIndex(d => d <= "" + inDigit);
    console.log(`smalest than  inDigit  ${foundFirstIdx} `);
  }

  // for negative nums find the biggest and insert before
  else {
    console.log("start NEG digits ", digits);

    foundFirstIdx = digits.findIndex(d => d > "" + inDigit);

    console.log(digits);
    console.log(`+digits[1]  ${+digits[1]} `);
  }

  if (foundFirstIdx < 0) {
    digits.push(inDigit);
  } else {
    digits.splice(foundFirstIdx, INSERT_ONLY, "" + inDigit);
  }

  digits = (N < 0 ? -1 : 1) * Number(digits.join(""));

  return digits;
};

var res = 0;
// res = FindMaxWhenAddedDigit(2, 5);
// res = FindMaxWhenAddedDigit(0, 5);
// res = FindMaxWhenAddedDigit(6, 5);

//  res = FindMaxWhenAddedDigit(12, 5);
//  res = FindMaxWhenAddedDigit(52, 5);
//  res = FindMaxWhenAddedDigit(58, 5);
//  res = FindMaxWhenAddedDigit(98, 5);

// res = FindMaxWhenAddedDigit(128, 5);
// res = FindMaxWhenAddedDigit(528, 5);
// res = FindMaxWhenAddedDigit(158, 5);
// res = FindMaxWhenAddedDigit(918, 5);

//  res = FindMaxWhenAddedDigit(554, 5);
//  res = FindMaxWhenAddedDigit(814, 5);
// res = FindMaxWhenAddedDigit(268, 5);
//  res = FindMaxWhenAddedDigit(8000, 5);
// res = FindMaxWhenAddedDigit(111, 5);

// res = FindMaxWhenAddedDigit(-2, 5);
// res = FindMaxWhenAddedDigit(0, 5);
// res = FindMaxWhenAddedDigit(-6, 5);

// res = FindMaxWhenAddedDigit(-128, 5);
// res = FindMaxWhenAddedDigit(-528, 5);
// res = FindMaxWhenAddedDigit(-158, 5);
// res = FindMaxWhenAddedDigit(-918, 5);
// res = FindMaxWhenAddedDigit(-381, 5);

//  res = FindMaxWhenAddedDigit(-111, 5);
// res = FindMaxWhenAddedDigit(-125, 5);
// res = FindMaxWhenAddedDigit(-8000, 5);
//  res = FindMaxWhenAddedDigit(-999, 5);
// res = FindMaxWhenAddedDigit(-153, 5);

console.log(`sres  ${res} `);

//=========================================================

class App extends Component {
  render() {
    return (
      <div>
        <MyComponent name="React" />
        <hr />
        <br />
        <EventPractice />
        <hr />
        <br />
        <ValidationSample />
        <hr />
        <br />
        <ScrollBox ref={ref => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          Goto bottom
        </button>
        <hr />
        <br />
        <IterationSample />
        <hr />
        <br />
      </div>
    );
  }
}
export default App;

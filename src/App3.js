import React, { Component } from "react";
import MyComponent from "./MyComponent";
import EventPractice from "./EventPractice";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";
import IterationSample from "./IterationSample";

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  let maxGap = 0;
  let binIntStr = N.toString(2);

  //console.log('42 to binary ' + 42..toString(2));
  console.log(N + " to binary " + binIntStr);

  let binArr = binIntStr.split("");
  // console.log(binIntStr + ' to binary array ' + binArr);

  let start1 = 0;
  let counter = 0;

  for (let i = 0; i < binArr.length; i++) {
    if (1 === start1) {
      if ("0" === binArr[i]) {
        //console.log('1 === start1 0 === binArr[i] \n maxGap is ' + maxGap + ' counter ' + counter + '\n');
        counter++;
      } // (0 === binArr[i])
      else if ("1" === binArr[i] && "0" === binArr[i - 1]) {
        //  console.log('1 === start1 1 === binArr[i] \n start1 ' + start1 + ' binArr[' + i + '] = ' + binArr[i] + '\n');

        if (counter > maxGap) {
          //  console.log('loop maxGap is ' + maxGap + ' counter ' + counter);
          maxGap = counter;
        } //
        counter = 0;
        start1 = 0;
      } // (1 === binArr[i])
    } // (1 === start1)
    if (0 === start1) {
      if (
        "1" === binArr[i]
        // && (  ((i>0) && ("0" === binArr[i - 1] )) || (0 === i) )
      ) {
        start1 = 1;
        // console.log('1 === binArr[i] \n start1 ' + start1 +'---\n');
      } // (0 === binArr[i])

      // console.log('0 === start1  \n start1 ' + start1 + ' binArr[' + i + '] = ' + binArr[i] + '\n');
    }
  } //loop

  console.log("maxGap is " + maxGap);

  return maxGap;
}
solution(1162);

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution1(A, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  //  let initialArray = [1, 2, 3, 4] ;
  let endArray = [...A];
  //let endArray = [...initialArray] ;

  // to save computation time, the array stays the same when K = arr length
  // so shift only the extra :)

  for (let nShifts = 0; nShifts < K % A.length; nShifts++) {
    let endItem = endArray[endArray.length - 1];

    for (let i = endArray.length - 1; i > 0; i--) {
      endArray[i] = endArray[i - 1];
    }
    endArray[0] = endItem;
  }

  console.log("endArray " + endArray + "\n");

  return [...endArray];
}

solution1([3, 8, 9, 7, 6], 4);

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

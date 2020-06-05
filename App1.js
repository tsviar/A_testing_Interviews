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

      codesQ.unshift(curStartIdx);
    } else if (curEndIdx > NOT_FOUND) {
      //its an end code

      if ((codesQ.length | 0) > 0) {
        prevStartIdx = codesQ.shift();

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

let S = "";
S = S.padEnd(1000, "(");
console.log("S ", S);
S = S.padEnd(S.length + 1000, ")");
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

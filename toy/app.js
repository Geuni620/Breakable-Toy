/*
5
5 50 50 70 80 100
7 100 95 90 80 70 60 50
3 70 90 80
3 70 90 81
9 100 99 98 97 96 95 94 93 91
*/

const fs = require(`fs`);
const input = fs.readFileSync("./input.txt").toString().split(`\n`);
const inputC = +input[0]; //5
const inputTestCase = [];

for (let i = 1; i <= inputC; i++) {
  const arr = input[i].split(` `).map((item) => +item);
  const newArr = [];
  for (j = 1; j <= arr[0]; j++) {
    //5, 7, 3, 3, 3, 9
    newArr.push(arr[j]);
  }

  const testCase = {
    N: arr[0],
    arr: newArr,
  };
  inputTestCase.push(testCase);
}

/*
C = 5
testCase = [
  {
  N: 5,
  arr : [50, 50, 70, 80, 100],
}
{
N: 7,
arr : [100, 95, 90, 80, 60, 60, 50],
}
...
]

*/
function solution(C, testCase) {
  console.log(`C :`, C);
  console.log(`testCase :`, testCase);
}
solution(inputC, inputTestCase);

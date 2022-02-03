/*5
5 50 50 70 80 100
7 100 95 90 80 70 60 50
3 70 90 80
3 70 90 81
9 100 99 98 97 96 95 94 93 1
*/

const fs = require(`fs`);
let input = fs.readFileSync(`./input.txt`).toString();
input = input.split("\n");

const inputC = Number(input[0]); //5
const inputTestCase = [];

for (let i = 1; i <= inputC; i++) {
  const arr = input[i].split(` `);
  const newArr = []; // 5 50 50 70 80 100
  for (i = 1; i <= arr[0]; i++) {
    newArr.push(Number(arr[i])); // 50 50 70 80 100
  }
  const testCase = {
    N: arr[0],
    arr: newArr,
  };
  inputTestCase.push(testCase);
}

console.log(inputTestCase);

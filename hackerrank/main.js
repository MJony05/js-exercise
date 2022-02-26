/*
let arr = [1, 1, 0, -1, -1];
function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let zero = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive++;
    } else if (arr[i] < 0) {
      negative++;
    } else {
      zero++;
    }
  }

  console.log(positive / arr.length);
  console.log(negative / arr.length);
  console.log(zero / arr.length);
}

plusMinus(arr);
*/

// let n = 4;
// let s = [];
// for (let i = 0; i < 4; i++) {
//   for (let j = 0; j < i; j++) {
//     console.log("#");
//   }
// }

/*
let func = function (n) {
  let str = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      str += "1";
    }
    for (let k = 1; k <= i + 1; k++) {
      str += "2";
    }
    str += "\n";
  }
  console.log(str);
};
func(3);
*/

// n = 4
// sss#  i=0  j=3 k=1
// ss##  i=1  j=2 k=2
// s###  i=2  j=1 k=3
// ####  i=3  j=0 k=4

/** for(let i = 1; i< n +1; i++){
        for(let j = 1; j <= n-i; j++){
            Mystr += ' ';
        }
        for(let k = n-i; k <= n-1; k++){
            Mystr += "#";
        }
        Mystr += '\n';
    }
    console.log(Mystr);
} */

// let candles = [3, 2, 1, 3];

// function birthdayCakeCandles(candles) {
//   let sum = 0;
//   for (let i = 0; i < candles.length; i++) {
//     let kotta = Math.max(...candles);
//     if (kotta === candles[i]) {
//       sum++;
//     } else {
//       continue;
//     }
//   }
//   return sum;
// }
// console.log(birthdayCakeCandles(candles));

let str = "07:40:45PM";
console.log(str.substring(2, str.length - 2));
console.log(str[str.length - 2]);

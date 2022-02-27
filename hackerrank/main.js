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
/*
let str = "07:40:45PM";
console.log(str.substring(2, str.length - 2));
console.log(str[str.length - 2]);
*/

// let person = { name: "html" };
// const members = [person];
// person = null;
// console.log(members);

// let n = 4;
// let x = 3;
// let sum = 1;
// let a = 0;
// for (let i = 1; i <= n; i++) {
//  sum= sum
// }
// console.log(a);

// let x = 3;
// let n = 3;
// let sum = 1;
// let f = 1;
// for (let i = 0; i <= n; i + 2) {
//   f = f * i;
//   sum = sum + x ** i / f;
// }
// console.log(sum);

// let n = 5;
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum = sum + i ** i;
// }
// console.log(sum);

// let str =
//   "SALOMLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL";
// let s = str.toUpperCase();
// console.log(s);
// console.log(str.length);
// let arr = s.split("");
// console.log(arr);
// let arr2 = [];
// for (let i = 0; i < arr.length; i++) {
//   arr2.push(arr[i]);
//   if (arr[i] == "L") {
//     arr2.push("L");
//   }
// }
// console.log(arr2);

// let str = prompt("soz kiriting");

// let stringYak = function (str) {
//   let sr1 = str.split("yak");
//   return sr1.join("");
// };
// console.log(stringYak(str));

function myFunction(a, b) {
  let c = a.indexOf(b);
  let arr2 = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== a[c]) {
      arr2.push(a[i]);
    }
  }
  return arr2;
}

console.log(myFunction([1, 2, 3], 2));
// ["ASSALOM", "TATU"]
// let a = str.slice(str.lastIndexOf("s"), str.indexOf("l") + 1);
// let b = str.slice(str.lastIndexOf("T"), str.indexOf("U") + 1);
// console.log(a, b);
// let b = str.indexOf("sal");
// console.log(b);
// let c = str.indexOf("l");
// console.log(c);
// let a = str.slice(b, ++c); //m
// console.log(a);

/** --------------------------------  for39 */
/*
let a = 2;
let b = 6;
let str = "";
for (let i = a; i <= b; i++) {
  for (let j = 1; j <= i; j++) {
    str += i;
  }
  str += " ";
}
console.log(str);
*/

let a = 13;
let b = 4;
// let i = 0;
while (a > b) {
  a = a - b;
}
console.log(a);

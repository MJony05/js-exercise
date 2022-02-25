let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let usluga = [];
let total = [];

let calc = function () {
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] < 50 || bills[i] > 300) {
      let a = bills[i] * 0.2;
      usluga.push(a);
      let b = bills[i] + a;
      total.push(b);
    } else if (bills[i] >= 50 && bills[i] <= 300) {
      let a = bills[i] * 0.15;
      usluga.push(a);
      let b = bills[i] + a;
      total.push(b);
    } else {
      console.log("xato");
    }
  }
  console.log(usluga);
  console.log(total);
};

calc();
/*
let average = function (arg) {
  let sum = 0;
  for (let i = 0; i < arg.length; i++) {
    sum = sum + arg[i];
  }
  return sum / arg.length ;
};
console.log(average(bills));
*/

let kun = ["dushanba", "seshanba", "chorshanba", "Payshanba", "Juma"];
let a = 2;
for (let i = 0; i < kun.length; i++) {
  a++;
  console.log(kun[i]);
  for (let j = 1; j < a; j++) {
    console.log(`${j}-para`);
  }
}

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

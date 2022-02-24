const kalkulyator = function (x, y, b) {
  switch (b) {
    case "-":
      r = x - y;
      break;
    case "+":
      r = x + y;
      break;
    case "*":
      r = x * y;
      break;
    case "/":
      r = x / y;
      break;
    default:
      alert("boshqattan urinib koring");
  }
  return r;
};

let x = prompt("birinchi sonni kiriting:");
let y = prompt("ikkinchi sonni kiriting");
let oper = prompt("qaysi operatorni tanlaysiz:(+,-,/,*)");
alert(kalkulyator(x, y, oper));

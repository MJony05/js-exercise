let num1 = prompt("birinchi son:");
let num2 = prompt("ikkinchi son:");
let switchFunc = function (n1, n2) {
  let n3 = 0;
  n3 = n1;
  n1 = n2;
  n2 = n3;
  console.log(n1, n2);
};
switchFunc(num1, num2);

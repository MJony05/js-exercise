const num1 = prompt("Birinchi sonni kiriting:");
const num2 = prompt("Ikkinchi sonni kiriting:");
const num3 = prompt("Uchinchi sonni kiriting:");
if (num1 > num2) {
  if (num1 > num3) {
    alert(num1);
  } else {
    alert(num3);
  }
} else if (num1 < num2) {
  if (num2 > num3) {
    alert(num2);
  } else {
    alert(num3);
  }
} else {
  ("boshqattan urinib ko'ring");
}

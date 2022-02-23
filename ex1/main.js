let num = Number(prompt("Son kiriting: "));
let qol = num % 2;
if (num > 0) {
  if (qol == 1) {
    alert(`Siz toq son kiritdingiz. ${num} toq son.`);
  } else if (qol == 0) {
    alert(`Siz juft son kiritdingiz. ${num} juft son.`);
  }
} else {
  alert("Manfiy son kiritdingiz");
}

let price = Number(prompt("Hisob kitob qancha bo'ldi"));
let usluga;
let sum;
if (price >= 50 && price <= 300) {
  usluga = price * 0.15;
  sum = price + usluga;
  alert(
    `Hisob-kitob ${price}, usluga ${usluga}, Jami ${sum} tolashingiz kerak`
  );
} else if (price < 50 || price > 300) {
  usluga = price * 0.2;
  sum = price + usluga;
  alert(
    `Hisob-kitob ${price}, usluga ${usluga}, Jami ${sum} tolashingiz kerak`
  );
} else {
  ("xato qiymat kiritildi");
}

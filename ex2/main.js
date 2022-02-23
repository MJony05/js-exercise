let delphin1 = Number(prompt("Delfinlarning birinchi bali: "));
let delphin2 = Number(prompt("Delfinlarning ikkinchi bali: "));
let delphin3 = Number(prompt("Delfinlarning uchinchi bali: "));

let koala1 = Number(prompt("Koalalarning birinchi bali: "));
let koala2 = Number(prompt("Koalalarning ikkinchi bali: "));
let koala3 = Number(prompt("Koalalarning uchinchi bali: "));

let koala = (koala1 + koala2 + koala3) / 3;
let delphin = (delphin1 + delphin2 + delphin3) / 3;
alert(`Delfinlarni o'rtacha bali ${delphin}, Koalalarniki esa ${koala}`);
if (koala > delphin) {
  if (koala >= 100) {
    alert(`musobaqada koalar g'olib. Koalar toplagan o'rtacha ball ${koala}`);
  } else {
    alert(
      `Musobaqa Koalar golib, ammo kubok berilmaydi chunki o'rtacha bali 100dan kam`
    );
  }
} else if (koala < delphin) {
  if (delphin >= 100) {
    alert(
      `musobaqada delfinlar g'olib. Delfinlar toplagan o'rtacha ball ${delphin}`
    );
  } else {
    alert(
      `Musobaqa delfinlar golib, ammo kubok berilmaydi chunki o'rtacha bali 100dan kam`
    );
  }
} else if (koala == delphin) {
  if (koala >= 100 && delphin >= 100) {
    alert(`Durang`);
  }
}

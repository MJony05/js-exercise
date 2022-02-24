const dolhin = [85, 54, 41];
const koalas = [23, 34, 27];

let calcAverage = function (a, b, c) {
  return (a + b + c) / 3;
};

let avgDolphins = calcAverage(dolhin[0], dolhin[1], dolhin[2]);
let avgKoalas = calcAverage(koalas[0], koalas[1], koalas[2]);

const checkWinner = function (d, k) {
  if (d / k >= 2) {
    console.log(`Delfinlar jamoasi g'olib(${avgDolphins} va ${avgKoalas})`);
  } else if (k / d >= 2) {
    console.log(`Koalar jamoasi golib(${avgDolphins} va ${avgKoalas})`);
  } else {
    console.log(`Hech kim yutmadi(${avgDolphins} va ${avgKoalas})`);
  }
};

checkWinner(avgDolphins, avgKoalas);

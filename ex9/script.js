const num1 = prompt("Birinchi sonni kiriting:");
const num2 = prompt("Ikkinchi sonni kiriting:");
const num3 = prompt("Uchinchi sonni kiriting:");

const maxFunc = function (num1, num2, num3) {
  if (num1 > num2) {
    if (num1 > num3) {
      maxnum = num1;
    } else {
      maxnum = num3;
    }
  } else if (num1 < num2) {
    if (num2 > num3) {
      maxnum = num2;
    } else {
      maxnum = num3;
    }
  } else {
    ("boshqattan urinib ko'ring");
  }
  return maxnum;
};

const minFunc = function (num1, num2, num3) {
  if (num1 < num2) {
    if (num1 < num3) {
      minnum = num1;
    } else {
      minnum = num3;
    }
  } else if (num1 > num2) {
    if (num2 < num3) {
      minnum = num2;
    } else {
      minnum = num3;
    }
  } else {
    ("boshqattan urinib ko'ring");
  }
  return minnum;
};

const result = [maxFunc(num1, num2, num3), minFunc(num1, num2, num3)];
console.log(result);

/*
let minMax = [0, 0];
const maxFunc = function (num1, num2, num3) {
  if (num1 > num2 && num2 > num3) {
    minMax[0] = num1;
    if (num2 > num3) {
      minMax[1] = num3;
    } else {
      minMax[1] = num2;
    }
  } else if (num2 > num1 && num1 > num3) {
    minMax[0] = num2;
    if (num1 > num3) {
      minMax[1] = num3;
    } else {
      minMax[1] = num1;
    }
  } else if (num3 > num1 && num1 > num2) {
    minMax[0] = num3;
    if (num1 > num2) {
      minMax[1] = num2;
    } else {
      minMax[1] = num1;
    }
  } else {
    ("boshqattan urinib ko'ring");
  }
};
maxFunc(n1, n2, n3);
console.log(minMax); */

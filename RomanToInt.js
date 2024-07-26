const intValuesOfRomans = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

var romanToInt = function (s) {
  let prevVal = 0;
  let total = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const currentVal = intValuesOfRomans[s[i]];
    // console.log(currentVal);

    if (currentVal < prevVal) {
      total -= currentVal;
    } else {
      total += currentVal;
    }

    prevVal = currentVal;
  }

  return total;
};

console.log(romanToInt("CVII"));

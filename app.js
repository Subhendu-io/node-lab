const realPin = '5555';

tryPin = (pin) => {
  const total = [...realPin]
    .map((dig, i) => [...pin][i] - dig)
    .reduce((a, b) => Math.abs(a) + Math.abs(b), 0);
  return total;
};

console.log(tryPin('6644'));

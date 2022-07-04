const realPin = '8888';
let count = 0;
tryPin = (pin) => {
  count++;
  let total = 0;
  for (let i = 0; i < 4; i++) {
    total += Math.abs(parseInt(pin.charAt(i)) - parseInt(realPin.charAt(i)));
  }

  return total;
};

let guss, diff, add;

if (tryPin('0000') > tryPin('9999')) {
  add = -1;
  guss = '9999';
  diff = tryPin('9999');
} else {
  add = 1;
  guss = '0000';
  diff = tryPin('0000');
}

let i = 0;

hack = () => {
  if (diff && i < 3) {
    let newGuss =
      guss.substring(0, i) +
      (parseInt(guss.charAt(i)) + add) +
      guss.substring(i + 1);
    if (tryPin(newGuss) > diff) {
      i++;
    } else {
      guss = newGuss;
      diff--;
    }
    hack();
  } else {
    guss = guss.substring(0, i) + (parseInt(guss.charAt(i)) + diff);
    console.log(guss, count);
  }
};

hack();

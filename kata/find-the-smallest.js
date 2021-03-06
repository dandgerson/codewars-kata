const smaller = (n) => {
  console.log(n);
  const digits = `${n}`.split('').map(value => +value);
  let least = digits.lastIndexOf(Math.min(...digits.slice(1)));
  let insert = digits[least] > digits[0] ? 1 : 0;

  if (digits[least] === 0 && least === 1 && insert === 0
    && digits[0] !== Math.max(...digits) && digits.filter(value => value === 0).length < 2) {
    console.log('Simple swap');
    least = 0;
    if (digits[0] > digits[2]) {
      insert = 2;
    } else insert = 1;
  }

  if ((digits[0] === Math.max(...digits) && (digits[least] !== 0)
      || (digits[least] === 0 && least === 1))) {
    console.log('Greater first');
    least = 0;
    insert = digits.lastIndexOf(Math.min(...digits));
  }

  if (digits[least] === digits[least - 1]) {
    console.log('Earlier least');
    for (let i = least; i > 0; i -= 1) {
      if (digits[i] !== digits[i - 1]) break;
      least -= 1;
    }
  }

  if (`${digits[0]}`.repeat(digits.length) === digits.join('')) {
    console.log('Same digits');
    least = 0;
    insert = 0;
  }
  //   if (digits[1] === 0 && digits.lastIndexOf(0) > 0
  //     && (digits.filter(value => value === 0).length > 1
  //       && digits.filter(value => value === 0).lenth < 4)) {
  //     least = 0;
  //     insert = digits.lastIndexOf(0) + 1;
  //   }
  digits.splice(insert, 0, digits.splice(least, 1)[0]);
  return [+(digits.join('')), least, insert];
};

const smallest = (n) => {
  const digits = `${n}`.split('').map(value => +value);
  const set = [];
  const setOfResults = [];
  for (let i = 0; i < digits.length; i += 1) {
    for (let j = 0; j < digits.length; j += 1) {
      const digitsClone = digits.slice();
      digitsClone.splice(i, 0, digitsClone.splice(j, 1)[0]);
      const number = +(digitsClone.join(''));
      set.push(number);
      if (i === 0 && j === 1) {
        setOfResults.push([number, i, j]);
      } else setOfResults.push([number, j, i]);
    }
  }
  return setOfResults.find(value => value[0] === Math.min(...set));
};

module.exports = smallest;

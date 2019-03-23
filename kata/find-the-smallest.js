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

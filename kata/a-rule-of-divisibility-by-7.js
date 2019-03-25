const seven = (m) => {
  if (m === 0) return [0, 0];
  let steps = 0;

  const checkDivisibility = (num) => {
    const numAsArr = `${num}`.split('');
    const [cutNum, restNum] = [+numAsArr.slice(0, -1).join(''), +numAsArr.slice(-1)];
    const subNum = cutNum - restNum * 2;
    steps += 1;

    return `${subNum}`.length <= 2 ? subNum : checkDivisibility(subNum);
  };

  return [checkDivisibility(m), steps];
};

const seven2 = (m) => {
  if (m === 0) return [0, 0];

  let steps = 0;
  let num = m;
  let subNum = null;

  do {
    steps += 1;
    const numAsArr = `${num}`.split('');
    const [cutNum, restNum] = [+numAsArr.slice(0, -1).join(''), +numAsArr.slice(-1)];
    subNum = cutNum - restNum * 2;
    if (`${subNum}`.length <= 2) return [subNum, steps];
    num = subNum;
  } while (true);
};

module.exports = seven;

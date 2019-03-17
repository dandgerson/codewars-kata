const asteriscItArray = (n) => {
  const rawString = `${n}`;
  let resultString = '';

  if (Array.isArray(n)) {
    const rawArray = rawString.split(',');
    const absArray = rawArray.slice();

    if (n[0] < 0) absArray[0] = -n[0];

    for (let i = 0; i < absArray.length; i += 1) {
      resultString += absArray[i];
      if (+absArray[i] % 2 === 0) resultString += '*';
    }

    if (n[0] < 0) resultString = `-${resultString}`;
  } else {
    const absString = rawString[0] === '-' ? rawString.slice(1) : rawString;

    for (let i = 0; i < absString.length; i += 1) {
      resultString += absString[i];
      if (absString[i] % 2 === 0) resultString += '*';
    }

    if (rawString[0] === '-') resultString = `-${resultString}`;
  }

  if (resultString[resultString.length - 1] === '*') resultString = resultString.slice(0, resultString.length - 1);

  return resultString;
};

const asteriscIt = (n) => {
  let rawString = `${n}`;
  let resultString = '';

  if (Array.isArray(n)) rawString = rawString.replace(/,/g, '');

  const absString = rawString[0] === '-' ? rawString.slice(1) : rawString;

  for (let i = 0; i < absString.length; i += 1) {
    resultString += absString[i];
    if (absString[i] % 2 === 0 && absString[i + 1] % 2 === 0) resultString += '*';
  }

  if (rawString[0] === '-') resultString = `-${resultString}`;

  if (resultString[resultString.length - 1] === '*') resultString = resultString.slice(0, resultString.length - 1);

  return resultString;
};

module.exports = asteriscIt;

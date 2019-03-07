function longestConsec(strings, count) {
  // your code
  if (count > strings.length || strings.length === 0 || count <= 0) return '';

  const findIndexOfLongest = (array) => {
    const longest = array.slice().sort((a, b) => b.length - a.length)[0];
    return array.indexOf(longest);
  };

  const indexOfLongest = findIndexOfLongest(strings);

  if (count === 1) return strings[indexOfLongest];

  const matrix = [];

  let start = indexOfLongest - (count - 1);
  if (start < 0) start = 0;
  let end = indexOfLongest + (count - 1);
  if (end > strings.length) end = strings.length - 1;

  for (let i = start; i < end; i += 1) {
    const set = [];
    for (let j = 0; j < count; j += 1) {
      if (!strings[i + j]) break;
      set.push(strings[i + j]);
    }
    if (set.length === count) {
      matrix.push(set);
    }
  }

  for (let i = 0; i < matrix.length; i += 1) {
    matrix[i] = matrix[i].join('');
  }

  return matrix[findIndexOfLongest(matrix)];
}

const longestConsecWorks = (strings, count) => {
  const arrLen = strings.length;
  if (arrLen === 0 || count > arrLen || count <= 0) {
    return '';
  }
  const consecStrings = getAllConsecutiveStrings(strings, count, arrLen);
  return getFirstLongestString(consecStrings);
};

const getAllConsecutiveStrings = (strings, count, arrLen) => {
  const numConsecStr = arrLen - count;
  const result = [];
  let consecStr;
  for (let i = 0; i <= numConsecStr; i++) {
    consecStr = '';
    for (let s = i; s < i + count; s++) {
      consecStr += strings[s];
    }
    result.push(consecStr);
  }
  return result;
};

const getFirstLongestString = (strings) => {
  let firstlongestString = '';
  let longestLength = 0;
  strings.forEach((string) => {
    const strLen = string.length;
    if (strLen > longestLength) {
      firstlongestString = string;
      longestLength = strLen;
    }
  });
  return firstlongestString;
};

module.exports = {
  longestConsec,
  longestConsecWorks,
};

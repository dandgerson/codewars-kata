const sumOfDifferences = arr => arr
  .reverse()
  .sort((a, b) => b - a)
  .reduce(
    (acc, current, index, array) => (index + 1 < array.length
      ? acc + (current - array[index + 1])
      : acc),
    0,
  );

module.exports = sumOfDifferences;

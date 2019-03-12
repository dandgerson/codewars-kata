const divisibleBy = (numbers, divisor) => {
  const result = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % divisor === 0) result.push(numbers[i]);
  }
  return result;
};

module.exports = divisibleBy;

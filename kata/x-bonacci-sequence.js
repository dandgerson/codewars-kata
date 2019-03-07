const xBonacci = (signature, n) => {
  const result = signature.slice();

  for (let i = 0; i < n - signature.length; i += 1) {
    const sum = result.slice(-signature.length).reduce((acc, current) => acc + current);
    result.push(sum);
  }

  return result.slice(0, n);
};


module.exports = xBonacci;

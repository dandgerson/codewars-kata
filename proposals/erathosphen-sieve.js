const sieve = (n) => {
  const numbers = Array.from(
    { length: n + 1 },
    () => true,
  );
  const primes = [2];
  let p = 2;
  while (true) {
    for (let i = p ** 2; i <= n; i += p) {
      numbers[i] = false;
    }
    const prev = p;
    for (let i = p + 1; i <= n; i += 1) {
      if (numbers[i] && i > p) {
        p = i;
        primes.push(p);
        break;
      }
    }
    if (prev === p) break;
  }

  return primes;
};

module.exports = sieve;

const tribonacci = (signature, n) => {
  if (n === 0) return [];
  if (n <= signature.length - 1) return [signature[n]];

  let a = signature[0];
  let b = signature[1];
  let c = signature[2];
  let d;

  const result = signature.slice();
  let i = 4;
  while (i <= n) {
    d = a + b + c;
    a = b;
    b = c;
    c = d;
    result.push(c);
    i += 1;
  }

  return result;
};

function fibRec(n) {
  if (n <= 2) return 1;
  return fibRec(n - 1) + fibRec(n - 2);
}

function fib(n) {
  if (n <= 2) return 1;

  let a = 0;
  let b = 1;
  let c;
  let i = n;

  while (i > 2) {
    c = a + b;
    a = b;
    b = c;
    i -= 1;
  }

  return b;
}

module.exports = tribonacci;

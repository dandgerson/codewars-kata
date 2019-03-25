const pyramid = (n) => {
  if (n === 0) return '\\n';
  if (n === 1) return '/\\\n';
  let str = '';
  for (let i = 0; i < n; i += 1) {
    i === n - 1
      ? str += `/${'_'.repeat(n * 2 - 2)}\\\n`
      : str += `${n - (i + 1) ? ' '.repeat(n - (i + 1)) : ''}/${i ? ' '.repeat(i * 2) : ''}\\\n`;
  }
  return str;
};

module.exports = pyramid;

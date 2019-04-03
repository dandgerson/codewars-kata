const verifyText = (text) => {
  const open = '([<';
  const close = ')]>';
  const levels = [0, 0, 0];
  const stack = [];

  for (let i = 0; i < text.length; i += 1) {
    if (open.includes(text[i])) {
      levels[open.indexOf(text[i])] += 1;
      stack.push(text[i]);
    }
    if (close.includes(text[i])) {
      levels[close.indexOf(text[i])] -= 1;
      if (stack.pop() !== open[close.indexOf(text[i])]) return 0;
    }

    for (let j = 0; j < levels.length; j += 1) if (levels[j] < 0) return 0;
  }
  return levels.join('') === '000' ? 1 : 0;
};

function func(s, a, b) {
  if (!s) return -1;
  const aIndex = s.indexOf(a);
  const bIndex = s.indexOf(b);

  if (aIndex !== -1) {
    if (bIndex === -1) return aIndex;
    return Math.max(aIndex, bIndex);
  }
  if (bIndex !== -1) return bIndex;
  return -1;
}

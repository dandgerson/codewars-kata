const removeChars = (arr) => {
  if (!arr || !/\,/.test(arr) || /\s/.test(arr)) return null;
  const splitted = arr.split(',');
  if (splitted.length < 3) return null;
  return splitted.slice(1, -1).toString().replace(/\,/g, ' ');
};

module.exports = removeChars;

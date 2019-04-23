const removeChars = (arr) => {
  if (!arr || !/\,/.test(arr) || /\s/.test(arr)) return null;

  const splitted = arr.split(',');
  const trimmed = splitted.slice(1, splitted.length - 1);
  return trimmed.toString().replace(/\,/g, ' ');
};

module.exports = removeChars;
const stockList = (listOfArt, listOfCat) => {
  if (!(listOfArt.length && listOfCat.length)) return '';

  const arts = new Map();

  listOfArt.forEach((art) => {
    const [key, value] = art.split(' ');
    arts.set(key, value);
  });

  const result = {
    toString() {
      let string = '';
      const entries = Object.entries(this);
      entries.forEach((entry) => {
        string += ` (${entry[0]} : ${entry[1]}) -`;
      });
      string = string.split('');
      string.splice(0, 1);
      string.splice(-2, 2);
      string = string.join('');
      return string;
    },
  };
  Object.defineProperty(result, 'toString', {
    enumerable: false,
  });
  const codes = [...arts.keys()];

  listOfCat.forEach((category) => {
    result[category] = 0;
    codes.forEach((code) => {
      if (code[0] === category) {
        result[category] += +arts.get(code);
      }
    });
  });
  return result.toString();
};

module.exports = stockList;

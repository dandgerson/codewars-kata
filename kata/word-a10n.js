const abbreviate = (string) => {
  const getWords = str => str.match(/\w*/g).filter(word => word !== '');

  const getNonWords = str => str.match(/(\W*)/g).filter(char => char !== '');

  const processWord = word => (word.length > 3
    ? `${word.slice(0, 1)}${word.slice(1, -1).length}${word.slice(-1)}`
    : word);

  const constructAbbreviation = (words, nonWords) => {
    let str = '';
    if (nonWords.length > 0 && string[0] === nonWords[0][0]) {
      for (let i = 0; i < nonWords.length; i += 1) {
        str += `${nonWords[i]}${words[i] || ''}`;
      }
    } else {
      for (let i = 0; i < words.length; i += 1) {
        str += `${words[i]}${nonWords[i] || ''}`;
      }
    }
    return str;
  };

  const processedWords = getWords(string).map(word => processWord(word));
  const nonWords = getNonWords(string);

  return constructAbbreviation(processedWords, nonWords);
};

// const abbreviate = string => (string.replace(
//   /[a-z]{4,}/gi,
//   match => `${match[0]}${match.length - 2}${match[match.length - 1]}`,
// ));

// const abbreviate = string => (string.split(/([^\w])/i)
//   .map(element => (element.length >= 4
//     ? (`${element[0]}${element.length - 2}${element[element.length - 1]}`)
//     : element))
//   .join(''));

module.exports = abbreviate;

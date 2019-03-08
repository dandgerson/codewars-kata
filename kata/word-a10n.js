const abbreviate = (string) => {
  const getWords = phrase => phrase.match(/\w*/g).filter(word => word !== '');
  const getNonWords = phrase => phrase.match(/(\W*)/g).filter(char => char !== '');
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

  const words = getWords(string);
  const processedWords = getWords(string).map(word => processWord(word));
  const nonWords = getNonWords(string);

  return constructAbbreviation(processedWords, nonWords);
};


module.exports = abbreviate;

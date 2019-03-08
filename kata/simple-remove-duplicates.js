const solve = (array) => {
  const unique = array.slice();
  for (let i = 1; i < unique.length; i += 1) {
    while (unique.indexOf(unique[i]) !== unique.lastIndexOf(unique[i])) {
      unique.splice(unique.indexOf(unique[i]), 1);
    }
  }
  return unique;
};

module.exports = solve;

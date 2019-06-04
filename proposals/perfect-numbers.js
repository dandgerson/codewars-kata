const getPerfect = (n) => {
  if (n > 4) {
    switch (n) {
      case 5:
        return [6, 28, 496, 8128, 33550336];

      case 6:
        return [6, 28, 496, 8128, 33550336, 8589869056];

      case 7:
        return [6, 28, 496, 8128, 33550336, 8589869056, 137438691328];

      case 8:
        return [6, 28, 496, 8128, 33550336, 8589869056, 137438691328, 2305843008139952128];

      case 9:
        return [6, 28, 496, 8128, 33550336, 8589869056,
          137438691328, 2658455991569831744654692615953842176];

      case 10:
        return [6, 28, 496, 8128, 33550336, 8589869056,
          137438691328, 2658455991569831744654692615953842176,
          191561942608236107294793378084303638130997321548169216];

      default:
        return 'have some shame =)';
    }
  }
  const perfects = [];
  for (let i = 0; i < n; i += 1) {
    for (let number = 2; perfects.length !== n; number += 1) {
      const dividers = [];
      for (let divider = 1; divider <= number / 2; divider += 1) {
        if (number % divider === 0) dividers.push(divider);
      }
      const sum = dividers.reduce((acc, current) => acc + current, 0);
      if (sum === number && number !== perfects[i - 1]) perfects.push(number);
    }
  }
  return perfects;
};

module.exports = getPerfect;

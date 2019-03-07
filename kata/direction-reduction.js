// const dirReduc = (directions) => {
//   if (
//     directions.toString() == ['NORTH', 'WEST', 'SOUTH', 'EAST']
//     || directions.toString() == ['NORTH', 'EAST', 'SOUTH', 'WEST']
//     || directions.toString() == ['SOUTH', 'WEST', 'NORTH', 'EAST']
//     || directions.toString() == ['SOUTH', 'EAST', 'NORTH', 'WEST']
//     || directions.toString() == ['WEST', 'NORTH', 'EAST', 'SOUTH']
//     || directions.toString() == ['WEST', 'SOUTH', 'EAST', 'NORTH']
//     || directions.toString() == ['EAST', 'NORTH', 'WEST', 'SOUTH']
//     || directions.toString() == ['EAST', 'SOUTH', 'WEST', 'NORTH']
//   ) return directions;

//   if (
//     directions.toString() == ['EAST', 'EAST', 'WEST', 'NORTH', 'WEST', 'EAST', 'EAST', 'SOUTH', 'NORTH', 'WEST']
//   ) return ['EAST', 'NORTH'];

//   //   if (
//   //     directions.toString() == ['NORTH', 'SOUTH', 'EAST', 'WEST', 'SOUTH', 'NORTH', 'EAST', 'SOUTH', 'WEST', 'EAST', 'NORTH', 'SOUTH', 'EAST', 'WEST']
//   //   ) return ['EAST', 'SOUTH'];

//   const sides = new Map([
//     ['NORTH', [1, 0]],
//     ['SOUTH', [-1, 0]],
//     ['WEST', [0, -1]],
//     ['EAST', [0, 1]],
//   ]);

//   const state = [0, 0];

//   directions.forEach((direction) => {
//     const side = sides.get(direction);
//     state[0] += side[0];
//     state[1] += side[1];
//   });

//   const parseState = (state) => {
//     let result = [];
//     (state[0] >= 0) ? result[0] = 'NORTH,'.repeat(state[0]): result[0] = 'SOUTH,'.repeat(-state[0]);
//     (state[1] >= 0) ? result[1] = 'EAST,'.repeat(state[1]): result[1] = 'WEST,'.repeat(-state[1]);


//     result = result.join(',')
//       .replace(',', ' ')
//       .trim()
//       .replace(' ', ',')
//       .split(',')
//       .filter(value => !!value === true);

//     return result;
//   }

//   return parseState(state);
// }

const dirReduc = (directions) => {
  const stack = [];

  for (let i = 0; i < directions.length; i += 1) {
    if (stack.length >= 1) {
      if (stack[stack.length - 1] === 'NORTH'
        && directions[i] === 'SOUTH') {
        stack.pop();
        continue;
      }
      if (stack[stack.length - 1] === 'SOUTH'
        && directions[i] === 'NORTH') {
        stack.pop();
        continue;
      }
      if (stack[stack.length - 1] === 'WEST'
        && directions[i] === 'EAST') {
        stack.pop();
        continue;
      }
      if (stack[stack.length - 1] === 'EAST'
        && directions[i] === 'WEST') {
        stack.pop();
        continue;
      }
    }

    stack.push(directions[i]);
  }

  return stack;
};

module.exports = dirReduc;

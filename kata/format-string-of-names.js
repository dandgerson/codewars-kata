const parseData = (data) => {
  const values = data.map(item => item.name);
  if (values.length <= 1) {
    return `${values}`;
  }
  if (values.length <= 2) {
    return `${values.join(' & ')}`;
  }
  return `${values.slice(0, -2).join(', ')}, ${values.slice(-2).join(' & ')}`;
};

module.exports = parseData;

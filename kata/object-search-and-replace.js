const objectSearchAndReplace = (data, replace) => {
  if (!data) return data;
  const keys = (Array.isArray(data) && data.keys()) || Object.keys(data);
  for (const key of keys) {
    data[key] === 'dynamic' && (data[key] = replace);
    if (typeof data[key] === 'object') objectSearchAndReplace(data[key], replace);
  }
  return data;
};

module.exports = objectSearchAndReplace;

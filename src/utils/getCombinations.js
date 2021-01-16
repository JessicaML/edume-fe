const getCombinations = (value, data) => {
  if (value.length !== 2) return null;
  const combinations = [];

  data[value[0]].forEach((firstOption) => {
    data[value[1]].forEach((secondOption) => {
      combinations.push(firstOption + secondOption);
    });
  });
  return combinations;
};

export default getCombinations;

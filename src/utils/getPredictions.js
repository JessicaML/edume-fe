const findDuplicateWord = (predictions, word) => (
  predictions.find((prediction) => prediction === word)
);

const getPredictions = (combinations, words) => {
  const predictions = [];
  combinations.forEach((combination) => {
    words.words.forEach((word) => {
      if (word.includes(combination) && !findDuplicateWord(predictions, word)) {
        predictions.push(word);
      }
    });
  });

  return predictions;
};

export default getPredictions;

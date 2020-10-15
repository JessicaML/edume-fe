import getPredictions from './getPredictions';

describe('getPredictions', () => {
  const combinations = ['ap', 'pl', 'ba', 'ga'];
  const words = { words: ['apple', 'kiwi', 'banana', 'orange'] };

  describe('when an array of words and an array combinations is provided', () => {
    it('returns an array of words which include the combinations', () => {
      expect(getPredictions(combinations, words)).toEqual(['apple', 'banana']);
    });
    it('does not contain duplicates', () => {
      expect(getPredictions(combinations, words)).not.toEqual(['apple', 'apple', 'banana']);
    });
  });
});

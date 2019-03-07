const { assert } = require('chai');

const { longestConsecWorks } = require('../kata/consecutive-strings');

describe('consecutiveStrings', () => {
  it('#1 should return longest consecutive of strings', () => {
    assert.equal(longestConsecWorks(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], 2), 'abigailtheta');
  });
  it('#2 should return longest consecutive of strings', () => {
    assert.equal(longestConsecWorks(['ejjjjmmtthh', 'zxxuueeg', 'aanlljrrrxx', 'dqqqaaabbb', 'oocccffuucccjjjkkkjyyyeehh'], 1), 'oocccffuucccjjjkkkjyyyeehh');
  });
  it('#3 should return longest consecutive of strings', () => {
    assert.equal(longestConsecWorks([], 3), '');
  });
  it('#4 should return longest consecutive of strings', () => {
    assert.equal(longestConsecWorks(['itvayloxrp', 'wkppqsztdkmvcuwvereiupccauycnjutlv', 'vweqilsfytihvrzlaodfixoyxvyuyvgpck'], 2), 'wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck');
  });
  it('#5 should return longest consecutive of strings', () => {
    assert.equal(longestConsecWorks(['wlwsasphmxx', 'owiaxujylentrklctozmymu', 'wpgozvxxiu'], 2), 'wlwsasphmxxowiaxujylentrklctozmymu');
  });
  it('#6 should return longest consecutive of strings', () => {
    assert.equal(longestConsecWorks(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], -2), '');
  });
  it('#7 should return longest consecutive of strings', () => {
    assert.equal(longestConsecWorks(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 3), 'ixoyx3452zzzzzzzzzzzz');
  });
  it('#8 should return longest consecutive of strings', () => {
    assert.equal(longestConsecWorks(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 15), '');
  });
  it('#9 should return longest consecutive of strings', () => {
    assert.equal(longestConsecWorks(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 0), '');
  });
});

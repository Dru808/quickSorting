/*jshint esversion: 6*/

const chai = require('chai');
const expect = chai.expect;

const quickSort = require('../quickSort.js');

describe('quickSort', () => {
  it('should be a function', () => {
    expect(quickSort).to.be.a('function');
  });

  it('should sort the array from smallest to biggest', () => {
    expect(quickSort([5, 2, 3, 6, 9, 1, 7, 4])).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 9]);
  });
});

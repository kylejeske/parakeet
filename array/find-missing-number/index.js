/**
 You are given an array of positive numbers from 1 to n,
 such that all numbers from 1 to n are present except one number x.

 You have to find x.
 The input array is not sorted.
 */
export const result = (arr1=[3,7,1,2,8,4,5]) => {
  // Arithmetic Series Sum Formula
  const getsum = (n) => Math.floor((n * ( n + 1 ) ) / 2);
  // get sum + 1, O(1)
  // get actual sum O(n)
  let sumOfN = getsum(1 + arr1.length)
  let sumOfA = arr1.reduce((p, c) => p + c, 0);
  // return sumOfN (expected) subtracts sumOfA (actual)
  return Math.abs(sumOfN - sumOfA);
};

export default result;

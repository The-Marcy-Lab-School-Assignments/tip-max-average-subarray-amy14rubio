/**
 * Find the maximum average value of a contiguous subarray of length k
 *
 * Time Complexity:
 * Space Complexity:
 *
 * @param {number[]} nums - An integer array consisting of n elements
 * @param {number} k - The length of the contiguous subarray
 * @return {number} - The maximum average value
 */

function findMaxAverage(nums, k) {
  let sum = nums.slice(0, k).reduce((acc, curr) => acc + curr); // O (k)
  let maxAverage = sum / k;

  // O (n) <-- this is the longer array so this is O(n)
  for (let i = 0; i < nums.length - k; i++) {
    sum = sum - nums[i] + nums[i + k];
    maxAverage = Math.max(maxAverage, sum / k);
  }

  return maxAverage;
}

let nums = [1, 2, 3, 4, 1];

console.log(findMaxAverage(nums, 3));

module.exports = findMaxAverage;

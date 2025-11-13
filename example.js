/**
 * Brute Force Solution
 *
 * Time Complexity:
 * Space Complexity:
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findMaxAverage(nums, k) {
  // variable to store max
  let maxAverage = -Infinity;

  // sets the start of the subarray according to the amount that it permits
  for (let i = 0; i <= nums.length - k; i++) {
    let sum = 0; // variable to store the sum of the nums
    // iterates through each subarray only up to the end of the subarray
    for (let j = i; j < i + k; j++) {
      sum += nums[j]; // adds the nums to current subarray sum
    }

    const average = sum / k; // stores what the average is of the nums
    if (average > maxAverage) {
      // only if the average is greater than maxAverage
      maxAverage = average; // current subarray average is stored to the maxAverage
    }
  }

  return maxAverage;
}

module.exports = findMaxAverage;

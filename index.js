function largestSubarraySum(arr) {
    let max = nums[0]
    let currSum = nums[0] 

    for (let i = 1; i < nums.length; i++) {
        let num = nums[i]

        if (num + currSum > num) {
            currSum += num
            if (max < currSum) {
                max = currSum
            }
        } else {
            currSum = num
            if (max < num) {
                max = num
            }
        }
    }
    return max
}

// Original Code That Does Work For these Test
 /*   let max = 0
    let currSum = 0

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i]

        if (num + currSum > 0) {
            currSum += num
        } else {
            currSum = 0
        }

        if (currSum > max) {
            max = currSum
        }
    }

    return max
*/

// let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]
// console.log(largestSubarraySum(array)) // 16
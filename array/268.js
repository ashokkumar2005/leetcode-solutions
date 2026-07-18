// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
// Example 1:
// Input: nums = [3,0,1]
// Output: 2
// Explanation:
// n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
const missingnum=(nums)=>{
   let r= nums.length;
   let sum = r*(r+1)/2;

   for( const num of nums){
    sum = sum - num;
   }
   return sum;
}

let  nums = [3,0,1];

console.log(missingnum(nums))
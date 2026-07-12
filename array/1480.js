
//Running Sum of 1d Array
var runningSum = function(nums) {
  
    for(let i = 1; i <nums.length ; i++){

        nums[i] = nums[i]+ nums[i-1];
    }

    return nums;
};

var res = runningSum([1,2,3,4])

console.log(res);
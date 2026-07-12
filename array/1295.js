//Find the even number of digits of arr

var findNumbers = function(nums) {
    count = 0;
    for( let i = 0; i<nums.length ; i++){
        let digit = nums[i].toString().length;
        if(digit % 2 == 0){
            count++
        }
    }
    return count;
};

let nums = [12,345,2,6,7896,22];

const res = findNumbers(nums);

console.log(res);
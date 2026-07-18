var findDisappearedNumbers = function(nums) {
    let res = [];
    nums.sort((a, b) => a - b);
    let j= 0

    for (let i = 1; i <= nums.length; i++) {
        if( nums[j] === i){
            while( nums[j] === i){
                j++
            }
        }else{
             res.push(i);
        }
    }

    return res;
};

nums = [1,2,4,5];

let res = findDisappearedNumbers(nums);

console.log(res);
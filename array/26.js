//Remove Duplicates from Sorted Array




var removeDuplicates = function(nums) {

   let left =0 ;
    for(let right = 1 ; right<nums.length; right++ ){

        if( nums[left] != nums[right] ){
           nums[left +1] = nums[right];
           left++ 
        }
    }
    console.log(left+1);
    
};

let nums = [0,0,1,1,1,2,2,3,3,4,5];

removeDuplicates(nums)
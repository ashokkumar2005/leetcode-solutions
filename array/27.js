//Remove Element
const removeelement =(nums,val)=>{
    let left = 0;

    for( let i=0; i<nums.length; i++){
        if(nums[i] != val){
            nums[left] = nums[i];
            left++
        }

    }
    console.log(left)
}
let nums = [3,2,2,3,7]; let val = 3;
removeelement(nums,val);
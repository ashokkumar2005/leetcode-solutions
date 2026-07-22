var sortedSquares = function(nums) {
    let right =nums.length-1 ;
    let res =[]
    for(i = 0;i<nums.length;i++ ){
       res[i] = nums[i]*nums[i];
       
    }
    res = res.sort((a,b)=> a-b);
    return(res);
};

 nums = [-4,-1,0,3,10]
 const e = sortedSquares(nums);
 console.log(e)
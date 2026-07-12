


var getConcatenation = function(nums) {

    let arr = [];
//method--1
   return [...nums,...nums];
    
//method--2
   for( let i = 0 ; i <nums.length ; i++){
       arr[i] = nums[i];
       arr[i + nums.length] = nums[i];
   }
   return arr;
};

 const sum = getConcatenation([1,2,3]);

 console.log(sum)
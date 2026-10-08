var productExceptSelf = function(nums) {
  let n = nums.length;

  let prefix = new Array(n);
  let suffix =new Array(n);
  let ans = new Array(n);
  
  prefix[0] =1;
 

  for( let i = 1; i<n; i++){
    prefix[i] = prefix[i-1] * nums[i-1];  
  }
   
   suffix[nums.length-1]=1;

  for(let i=n-2; i >=0 ; i--){
    suffix[i] = suffix[i+1] * nums[i+1];
  }

  for( let i = 0; i<n ; i++){
    ans[i] = prefix[i] * suffix[i];
  }

 console.log( ans);
};

 let nums = [-1,1,0,-3,3];

  productExceptSelf(nums)

  // method 2
 const milti = (arr)=>{
    let res =[];
    for(let i = 0; i<arr.length; i++){
        let product=1;
        for( let j=0 ;j<arr.length ; j++ ){
            if(i !== j){
            product *= arr[j] ;
            }
        }
        res.push(product);
    }
    return res;
 }
 
 let arr = [1,2,3,4];
 let res = milti(arr);

 console.log(res)
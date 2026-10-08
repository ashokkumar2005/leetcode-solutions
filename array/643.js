var findMaxAverage = function(nums, k) {
    let sum = 0;
    let maxAverage = 0;
    let l =0 ; 
    let r =k-1;
   while(l<r) {
        let avg =0 ;
        sum += nums[k] ;

        avg = sum /k;

        if(avg>maxAverage){
            maxAverage = avg;
        }
        l++;
        r++;
        
    }

    return maxAverage;
};

let nums = [1, 12, -5, -6, 50, 3], k = 4;
let res = findMaxAverage(nums, k);
console.log(res);
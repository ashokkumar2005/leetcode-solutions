const TwoSum = (nums,target)=>{

    let i=0; 
    let j=nums.length-1;

    while(j>i){

        let temp = nums[i] + nums[j];
        if(temp === target){
            return [i+1,j+1];
        }else if(temp<target){
            i++;
        }else{
            j--;
        }
    }


}

numbers = [2,11,7,15], target = 9;

const res = TwoSum(numbers,target);

console.log(res);

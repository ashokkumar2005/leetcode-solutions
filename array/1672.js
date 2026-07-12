
// Richest Customer Wealth
var maximumWealth = function(arr) {
 let maxwealth = 0;
    for(let i = 0 ; i<arr.length ; i++){
        let sum = 0;
        for(let j =0 ; j<arr[i].length; j++){// j< arr[0] .length 1,3,1 
            sum += arr[i][j];// sum = sum+ arr[0][0]
                            //      sum = 0  + 1 => sum = 1;
        }

        if(sum>maxwealth){
            maximumWealth=sum;
        }
    }
    return maximumWealth;
    
};

let arr = [[1,3,1],[2,1],[1,5,2]];

let res = maximumWealth(arr);
console.log(res);
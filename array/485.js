//Max Consecutive Ones

const consecutive = (n)=>{
    let count = 0 ;
    let max = 0 ;

    for( let i=0 ;i<n.length ; i++){
        if( n[i] == 1 ){
            count++;
            max = Math.max(max,count);
        }else{
            count = 0 ;
        }
    }
    return max;
}

let arr =[1,1,0,0,1,1,1,0]
const res = consecutive(arr);
console.log(res);

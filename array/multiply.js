
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
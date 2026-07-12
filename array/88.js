 //Merge Sorted Array

 let arr1 =[1,2,3,0,0,0];
 let arr2 = [2,5,6];
 let m=3;
 let n = 3;

 const mergesort =(arr1,m,arr2,n)=>{

    let res =[];

    for(let i = 0 ; i<m;i++){
        res.push(arr1[i])
    }

    for(let j=0; j<n; j++){
        res.push(arr2[j])
    }

    res.sort((a,b)=> a-b);
   
    for(let i =0 ; i<res.length; i++){
       arr1[i] =res[i]
    }
    console.log(arr1)

 }
 
 mergesort(arr1,m,arr2,n)



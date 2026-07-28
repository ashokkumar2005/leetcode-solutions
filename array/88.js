 //Merge Sorted Array

 let arr1 =[1,2,3,0,0,0];
 let arr2 = [2,5,6];
 let m=3;
 let n = 3;

  const MergesortWhile = (arr1,arr2,m,n)=>{

    let i = m-1;
    let j = n-1;
    let k = m+n-1;

    while(j>=0){
        if(i>=0 && arr1[i]>arr2[j] ){
            arr1[k] = arr1[i];
            k--;
            i--;
        }else{
            arr1[k] = arr2[j];
            k--;
            j--;
        }
    }
    return arr1;
  }

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

  let res = MergesortWhile(arr1,arr2,m,n);
  console.log(res);



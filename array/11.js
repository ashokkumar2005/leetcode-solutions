
 const Maxarea = (H)=>{
    let l =0 ;
    let r= H.length-1;
    let max = 0 ;

    while(l<r){
        let width = r-l;
        let currentarea = Math.min(H[r],H[l])*width;

        max = Math.max(max,currentarea);
        if(H[r]>H[l]){
            l++
        }else{
            r--
        }
    }

    return max;
 }
  m = [1,8,6,2,5,4,8,3,7]
 const res = Maxarea(m);
 console.log(res);
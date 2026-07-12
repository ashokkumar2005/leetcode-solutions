
let stack = [];
let temp =-1;

// Operation push

 const push =(data)=>{
    temp=temp+1;

    stack[temp] = data;

 }
 
 // POP Operation in stack
 const pop =()=>{
    remove = stack[temp];
    temp = temp-1;
    return remove;
}
 
 const orginalstack = ()=>{
 result=""
    for( let i =0 ; i <= temp ; i=i+1){
        result = result+ stack[i] + ",";
        return result;
    }
 }

 push(10);
 console.log(stack);
  push(20);
 console.log(stack);
 let rem = pop();
 console.log(rem);
 
 os = orginalstack();
 console.log(os)



var isPalindrome = function(s) {
     let res1 = s.toLowerCase().replace(/[^a-zA-Z0-9]/g,'')
     
      left = 0;
      right = res1.length-1;

     while(left<right){
        if( res1[left] !== res1[right]){
            return false;
        }
        left++;
        right--;
     }

    return true;
    
    
};

let s = "A man, a plan, a canal: Panama";

const res = isPalindrome(s);
console.log(res);
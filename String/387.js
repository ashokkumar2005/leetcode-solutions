 const firstUniqChar = (s)=>{

        let map ={};

        for(let t of s){
            map[t] = (map[t]||0) + 1;
        }

        for(let i =0 ; i<s.length ; i++){
            if( map[s[i]] === 1){
                return i;
            }
        }
        return -1;
 }

//  let s = "loveleetcode";
s = "leetcode"
 const res = firstUniqChar(s);

 console.log(res);

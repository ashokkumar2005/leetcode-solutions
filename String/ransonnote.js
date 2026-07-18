var canConstruct = function(ransomNote, magazine) {

    let res = magazine.includes(ransomNote);

    return res;

     
        
};

// let ransomNote = "aa", magazine = "ab";
// ransomNote = "a", magazine = "b"
ransomNote = "aa", magazine = "aab"
let res =canConstruct(ransomNote,magazine);
console.log(res)
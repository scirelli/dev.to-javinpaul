//How do you check if two strings are anagrams of each other? 
(function(){
    function isAnagram(str1, str2) {
        let dict = {};
        
        for(let c in str1){
            dict[c] = true;
        }

        for(let c in str2) {
            if(!dict[c]) return false;
        }
        return true;
    }

    console.log(isAnagram('cinema', 'iceman'));
})();

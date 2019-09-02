//How do you print duplicate characters from a string?
(function(){
    function printDuplicates(s) {
        let freq = [];
        
        for(let i=0; i<s.length; i++)
            freq[s.charCodeAt(i)] = (freq[s.charCodeAt(i)]||0) + 1;
        
        for(let i=0; i<freq.length; i++){
            if(freq[i] > 1)
                console.log(String.fromCharCode(i));
        }
    }

    printDuplicates('ababtryfgha89ajkhaskj332');
})();

#!/usr/bin/env node
/*
 * How to find the maximum occurring character in given String?
 */

function maxOccuringCharacter(str) {
    let freq = {}, max = 0, maxChar = [];

    for(let i=0, c; i<str.length; i++) {
        c = str.charAt(i);
        if(freq[c]) {
            freq[c]++;
        }else {
            freq[c] = 1;
        }
    }

    for(let k in freq) {
        if(freq[k] > max) {
            max = freq[k];
            maxChar = [k];
        } else if(freq[k] === max) {
            maxChar.push(k);
        }
    }

    return maxChar;
}

['abcd', 'abcdabcde', 'abcdefgabcdefgh', 'awekljafksdljhioueas', 'awweklija', 'a', 'aaaaa'].forEach((test)=> {
    console.log(maxOccuringCharacter(test));
});

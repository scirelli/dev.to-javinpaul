#!/usr/bin/env node
/*
 * How to remove the duplicate character from String?
 */

function dedup(str) {
    let freq = {}, result = '';

    for(let i=0, c; i<str.length; i++) {
        c = str.charAt(i);
        if(!freq[c]) {
            result += c;
            freq[c] = true;
        }
    }

    return result;
}

['abcd', 'abcdabcde', 'abcdefgabcdefgh', 'awekljafksdljhioueas', 'awweklija', 'a', 'aaaaa'].forEach((test)=> {
    console.log(dedup(test));
});

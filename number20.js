#!/usr/bin/env node
/*
 * How do you remove a given character from String?
 */

function removeChar(str, chr) {
    let result = '';

    for(let i=0; i<str.length; i++) {
        if(str.charAt(i) !== chr) {
            result += str.charAt(i);
        }
    }

    return result;
}

['abcd', 'abcdabcde', 'abcdefgabcdefgh', 'awekljafksdljhioueas', 'awweklija', 'a', 'aaaaa'].forEach((test)=> {
    console.log(removeChar(test, 'a'));
});

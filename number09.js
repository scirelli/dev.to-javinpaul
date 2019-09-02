#!/usr/bin/env node
/*
 * How do you count the occurrence of a given character in a string?
 */

function countChar(str, ch) {
    let count = 0;
    for(let i=0; i<str.length; i++) {
        if(str.charAt(i) === ch) {
            count++;
        }
    }
    return count;
}


['abc', 'no dupes here', 'aaaaaaaaa'].forEach((str)=> {
    console.log('\'' + str + '\' ' + countChar(str, 'a'));
});

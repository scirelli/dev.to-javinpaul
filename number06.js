#!/usr/bin/env node
/*
 * How do you check if a string contains only digits?
 */

const ZERO_CODE = '0'.charCodeAt(0),
    NINE_CODE = '9'.charCodeAt(0);

function containsDigits(str) {
    for(let i=0, c; i<str.length; i++) {
        c = str.charCodeAt(i);
        if(c >= ZERO_CODE && c <= NINE_CODE) return true;
    }

    return false;
}

['abc', 'ab1c'].forEach((value)=> {
    console.log(value + ' ' + containsDigits(value));
});



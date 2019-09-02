#!/usr/bin/env node
/*
 * How do you convert a given String into int like the atoi()?
 */

const ZERO_CODE = '0'.charCodeAt(0),
    NINE_CODE = '9'.charCodeAt(0),
    NUMBERS = {0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9};


function atoi(str) {
    let result = 0;

    for(let i=0, c; i<str.length; i++) {
        c = str.charAt(i);
        if(c.charCodeAt(0) < ZERO_CODE || c.charCodeAt(0) > NINE_CODE) return result;
        result = result*10 + NUMBERS[c];

    }

    return result;
}

['0', '1', '10', '100', '1001', '1a'].forEach((str)=> {
    console.log(atoi(str));
});

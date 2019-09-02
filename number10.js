#!/usr/bin/env node
/*
 * How do you print the first non-repeated character from a string?
 */

function findFirstNonRepeatingCharacter(str) {
    let freq = new Array(255).fill(0);

    for(let i=0; i<str.length; i++) {
        freq[str.charCodeAt(i)]++;
    }

    for(let i=0; i<str.length; i++) {
        if(freq[str.charCodeAt(i)] === 1) {
            return str.charAt(i);
        }
    }

    return '';
}

['abc', 'no dupes here', 'aaaaaaaaa'].forEach((str)=> {
    console.log('\'' + str + '\' ' + findFirstNonRepeatingCharacter(str));
});

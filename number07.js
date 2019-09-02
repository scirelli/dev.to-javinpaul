#!/usr/bin/env node
/*
 * How do you find duplicate characters in a given string?
 */
function findDups(str) {
    let dups = new Array(255).fill(0);

    for(let i=0; i<str.length; i++) {
        dups[str.charCodeAt(i)]++;
    }

    return dups.reduce((accum, count, index)=> {
        if(count > 1) {
            accum.push(String.fromCharCode(index));
        }
        return accum;
    }, []);
}

['abc', 'no dupes here', 'aaaaaaaaa'].forEach((str)=> {
    console.log('\'' + findDups(str).join('\', \'') + '\'\n');
});

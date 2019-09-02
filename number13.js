#!/usr/bin/env node
/*
 * How do you check if two strings are a rotation of each other?
 */

function isRotation(str1, str2) {
    if(str1.length !== str2.length) return false;
    if(str1 === str2) return true;

    str1 = str1.split('');
    str2 = str2.split('');
    for(let i=0; i<str1.length; i++) {
        rotate(str2);
        if(str1.join('') === str2.join('')) return true;
    }
    return false;
    function rotate(array) {
        array.push(array.shift());
        return array;
    }
}

[['abc', 'bca'], ['cba', 'abc']].forEach((test)=> {
    console.log(isRotation(test[0], test[1]));
});


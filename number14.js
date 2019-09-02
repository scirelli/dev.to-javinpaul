#!/usr/bin/env node
/*
 * How do you check if a given string is a palindrome?
 */

function isPalindrome(str1, str2) {
    return str1 === str2.split('').reverse().join('');
}

[['abc', 'cba'], ['bca', 'abc']].forEach((test)=> {
    console.log(isPalindrome(test[0], test[1]));
});

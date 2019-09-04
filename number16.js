#!/usr/bin/env node
/*
 * Given string str, How do you find the longest palindromic substring in str?
 */

function longestPalindromicSubstring(str) {
    let longestPalindrom = '', allPalindroms = [];

    for(let i=0; i<str.length; i++) {
        for(let j=str.length, ss; j>i; j--) {
            ss = str.substring(i, j);
            if(isPalindrom(ss)) {
                allPalindroms.push(ss);
            }
        }
    }

    allPalindroms.forEach((str)=> {
        if(str.length > longestPalindrom.length) {
            longestPalindrom = str;
        }
    });

    return longestPalindrom;
    function isPalindrom(str) {
        str = str.toLowerCase();
        return str === str.split('').reverse().join('');
    }
}

['aaa', 'aaabaaaa', 'ababab', 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz', 'abcdefghijklaaaamnopqrstuvwxyzabcdefghpalindromsmordnilapijklmnopqrstuvwxyz'].forEach((str)=> {
    console.log(longestPalindromicSubstring(str));
});

#!/usr/bin/env node
/*
 * How do you reverse words in a given sentence without using any library method?
 */

function reverseWords(str) {
    return str.split(/[ .,,!?]+/).map(word=>word.split('').reverse().join('')).join(' ');
}


function reverseWords2(str) {
    let result = [];

    str = str.split(' ');
    for(let i=0, word, punc; i<str.length; i++) {
        punc = '';
        word = str[i];
        switch(word.charAt(word.length-1)) {
            case '.':
                word = word.substring(0, word.length-1);
                punc = '.';
                break;
            case ',':
                word = word.substring(0, word.length-1);
                punc = ',';
                break;
            case '!':
                word = word.substring(0, word.length-1);
                punc = '!';
                break;
            case '?':
                word = word.substring(0, word.length-1);
                punc = '?';
                break;
        }
        result.push(word.split('').reverse().join('') + punc);
    }
    return result.join(' ');
}

['This is a sentence.', 'Hi, I\'m a sentence with some extra punctuation!'].forEach((str)=> {
    console.log(reverseWords(str));
    console.log(reverseWords2(str));
});

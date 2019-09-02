#!/usr/bin/env node
/*
 * How do you find the length of the longest substring without repeating characters?
 */
//abcdefgabcdefgh
//awekljafksdljhioueas
//awweklija

const a_CODE = 'a'.charCodeAt(0);

//n^2
function longestSubStringNoRepeats(str) {
    let subStrings = [], result = [];

    for(let i=0, freq, ss; i<str.length; i++) {
        freq = Array(26).fill(0);
        ss = '';

        for(let j=i, c, pos; j<str.length; j++) {
            c = str.charAt(j).toLowerCase();
            pos = c.charCodeAt(0) - a_CODE;
            freq[pos]++;
            if(freq[pos] > 1) {
                subStrings.push(ss);
                ss = '';
                break;
            }else {
                ss += c;
            }
        }
        if(ss) subStrings.push(ss);
    }

    for(let i=0, curMax = 0; i<subStrings.length; i++) {
        if(subStrings[i].length > curMax) {
            curMax = subStrings[i].length;
            result = [subStrings[i]];
        }else if(subStrings[i].length === curMax) {
            result.push(subStrings[i]);
        }
    }
    return result[0].length;
}

/*
 * n^2
 */
function longestSubStringNoRepeatsQuick(str) {
    let max = 0;

    for(let i=0, freq, ss; i<str.length; i++) {
        freq = Array(26).fill(0);
        ss = '';

        for(let j=i, c, pos; j<str.length; j++) {
            c = str.charAt(j).toLowerCase();
            pos = c.charCodeAt(0) - a_CODE;
            freq[pos]++;
            if(freq[pos] > 1) {
                max = Math.max(max, ss.length);
                ss = '';
                break;
            }else {
                ss += c;
            }
        }

        if(ss) max = Math.max(max, ss.length);

        if(max > str.length - i) {
            break;
        }
    }

    return max;
}
//  4        5                8                    12                 7
['abcd', 'abcdabcde', 'abcdefgabcdefgh', 'awekljafksdljhioueas', 'awweklija', 'a', 'aaaaa'].forEach((test)=> {
    console.log(longestSubStringNoRepeats(test), '', longestSubStringNoRepeatsQuick(test));
});

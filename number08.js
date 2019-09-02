#!/usr/bin/env node
/*
 * How do you count a number of vowels and consonants in a given string?
 */
const a_CODE = 'a'.charCodeAt(0),
    A_CODE = 'A'.charCodeAt(0),
    z_CODE = 'z'.charCodeAt(0),
    Z_CODE = 'Z'.charCodeAt(0),
    VOWELS = {'a': true, 'e': true, 'i': true, 'o': true, 'u': true, 'y': true, 'A': true, 'E': true, 'I': true, 'O': true, 'U': true, 'Y': true};

function countVowelsAndConsonants(str) {
    let counts = {
        vowels:     0,
        consonants: 0,
        toString:   function() {
            return 'Vowels: ' + this.vowels + ' Consonants: ' + this.consonants;
        }
    };

    for(let i=0, c; i<str.length; i++) {
        c = str.charCodeAt(i);
        if(c >= a_CODE && c <= z_CODE || c >= A_CODE && c <= Z_CODE) {
            if(VOWELS[str.charAt(i)]) {
                counts.vowels++;
            }else {
                counts.consonants++;
            }
        }
    }

    return counts;
}

['abc', 'no dupes here', 'aaaaaaaaa'].forEach((str)=> {
    console.log('\'' + str + '\' ' + countVowelsAndConsonants(str));
});

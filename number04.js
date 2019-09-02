#!/usr/bin/env node
//How do you find all the permutations of a string?
//
// n! / (n - r)!
// 6 / (3-3)!
// str = abc
//
// perms [
//     'abc',
//     'bac',
//     'bca',
//     'cba',
//     'cab',
//     'acb'
// ]
//
//
//str = abc
//             [a]bc
//                 |
//                  [b]c
//                     |
//                    [c]
//
//                  b[c]
//                  |
//                 [b]
//
//
//              a[b]c
//               |
//                [a]c
//                   |
//                  [c]
//
//                a[c]
//                |
//               [a]
//
//
//              ab[c]
//               |
//               [a]b
//                  |
//                  [b]
//
//               a[b]
//               |
//              [a]

const obj = (()=>{
    function permutate(str) {
        if(str.length <= 1) return [str];

        let perms = [];
        rc(str, '');

        return perms;
        function rc(str, ans) {
            if(str.length <= 0) {
                perms.push(ans);
                return ans;
            }

            for(let i=0, skipped, restOfString; i < str.length; i++) {
                skipped = str.charAt(i);
                restOfString = str.substring(0, i) + str.substring(i + 1);
                rc(restOfString, ans + skipped);
            }
        }
    }

    function test(strs) {
        strs.forEach((str)=>{
            assertEqual(permutate(str).length, countPermutations(str));
        });
    }

    var factorial = memoize(function fact(n) {
        if(n <= 1) return 1;
        return n * fact(n-1);
    });

    function countPermutations(str) {
        str = str.split('');
        let n =  Object.keys(str.reduce((accum, c)=> {
                accum[c] = 1;
                return accum;
            }, {})).length,
            r = str.length;
        return factorial(n)/factorial(n - r);
    }

    function memoize(fnc) {
        let mem = {};
        return function() {
            let key = Array.prototype.join.apply(arguments);

            if(mem[key]) return mem[key];

            return mem[key] = fnc.apply(this, arguments);
        };
    }

    function assert(value, msg) {
        if(!value) throw new Error(msg || 'Assertion failed.');
    }

    function assertEqual(value1, value2) {
        try {
            assert(value1 === value2);
        } catch(e) {
            throw new Error(`'${value1}' not equal '${value2}'.`);
        }
    }

    return {
        permutate: permutate,
        test:      test
    };
})();

obj.test(['abc', 'abcd', 'abcde']);

#!/usr/bin/env node
//How can a given string be reversed using recursion?

//abc
//0 -> '' + 'c' + 'a'
//1 -> '' + 'c' + 'b'
//2 -> '' + 'c'
//3 -> ''
String.prototype.reverse = function reverseWithRecurs(index) {
    if(index >= this.length) return '';
    index = index || 0;
    return this.reverse(index+1) + this.charAt(index);
};

tests();

function tests() {
    assertEqual('cba', 'abc'.reverse());
}

function assert(bool) {
    if(!bool) throw new Error('');
}

function assertEqual(val1, val2) {
    try {
        assert(val1 === val2);
    } catch(e) {
        throw new Error(`'${val1}' not equal to '${val2}'`);
    }
}

#!/usr/bin/env python3
"""
How can a given string be reversed using recursion?
"""


def reverse(string, index=0):
    if index >= len(string):
        return ''
    return reverse(string, index + 1) + string[index]


def reverse2(string):
    if string is None or string == '':
        return ''

    return reverse2(string[1:]) + string[0]


value = 'abc'
assert reverse(value) == reverse2(value)

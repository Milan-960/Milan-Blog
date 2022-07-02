---
title: 'Integer to Roman challenge'
subtitle: 'Integer to Roman (Leet Code challenge)'
date: 2022-06-25 13:10:00
category: 'JavaScript'
---

## [1. Integer to Roman](https://leetcode.com/problems/integer-to-roman) **_| Difficulty | Easy |_**

## Problem:

Problem:
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

```
Symbol       Value    
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```

For example, two is written as `II` in Roman numeral, just two one's added together. Twelve is written as, `XII`, which is simply `X` + `II`. The number twenty seven is written as `XXVII`, which is `XX` + `V` + `II`.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not `IIII`. Instead, the number four is written as `IV`. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as `IX`. There are six instances where subtraction is used:

- `I` can be placed before `V` (5) and `X` (10) to make 4 and 9.
- `X` can be placed before `L` (50) and `C` (100) to make 40 and 90.
- `C` can be placed before `D` (500) and `M` (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

## Examples

**Example 1:**

```
Input: "III"
Output: 3
```

**Example 2:**

```
Input: "IV"
Output: 4
```

**Example 3:**

```
Input: "IX"
Output: 9
```

**Example 4:**

```
Input: "LVIII"
Output: 58
Explanation: C = 100, L = 50, XXX = 30 and III = 3.
```

**Example 5:**

```
Input: "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
```

## Solution:

Normally we just add up the digits, except when the digit is greater than its left (e.g. IV). In that case we need to fallback and remove the last digit then combine the two as new digit. That is why we subtract the last digit twice.

```javascript
/**
 * @param {string} s
 * @return {number}
 */

const roman = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}

var romanToInt = function(S) {
    let ans = 0
    for (let i = S.length-1; ~i; i--) {
        let num = roman[S.charAt(i)]
        if (4 * num < ans) ans -= num
        else ans += num
    }
    return ans
};

// Ans:

// Your input
// [3,2,2,3]
// 3

// | Your answer | Expected answer |
// | [2,2]       | [2,2]           |
```

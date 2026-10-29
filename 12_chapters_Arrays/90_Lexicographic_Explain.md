# What Is Lexicographic Sorting?

Lexicographic order compares values as strings, one character at a time, from
left to right. At the first position where two strings differ, the character
with the lower value comes first. If one string is a prefix of another, the
shorter string comes first.

JavaScript's default `Array.prototype.sort()` uses lexicographic order. It
converts array elements to strings before comparing them, so numbers may not
sort in numeric order:

```js
const numbers = [10, 1, 21, 2];
numbers.sort();
console.log(numbers); // [1, 10, 2, 21]
```

For example, `"10"` comes before `"2"` because the first character, `"1"`, is
less than `"2"`.

For strings, default sorting compares character values, not dictionary rules
for a particular language. Capitalization and accented characters can affect
the order.

--------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------

Why numbers sort "wrong": without a compare function, sort() turns numbers into strings first and then compares them as text:

[10, 1, 2].sort();   // [ 1, 10, 2 ]
"10" vs "2": the first characters are "1" and "2", and "1" is smaller, so "10" comes first. The 0 is never looked at.
"1" vs "10": they match on "1", then "1" runs out of characters. The shorter one comes first, the same way "car" comes before "cart" in a dictionary.
Characters are compared by their character codes, not the alphabet you learned:

Character	Code
"0" to "9"	48 to 57
"A" to "Z"	65 to 90
"a" to "z"	97 to 122
So digits come before uppercase letters, and uppercase letters come before lowercase ones:

["banana", "Apple", "cherry"].sort();   // [ 'Apple', 'banana', 'cherry' ]
["b", "B", "a", "A"].sort();            // [ 'A', 'B', 'a', 'b' ]
The fixes:

Numbers: .sort((a, b) => a - b)
Text, ignoring case the way people expect: .sort((a, b) => a.localeCompare(b))
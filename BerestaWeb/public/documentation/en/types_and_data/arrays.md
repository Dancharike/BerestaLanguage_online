# Arrays

Arrays in BerestaLanguage are **dynamic**, **heterogeneous** (can hold mixed types), and **deeply nested** structures.  
They are one of the core data types of the language, allowing both flexible storage and expressive iteration.

---

## Basic Declaration

Arrays are written using square brackets `[]`.  
You can initialize them with values or leave them empty:

```beresta
let a = [1, 2, 3];
let b = ["apple", "banana", "cherry"];
let c = []; // empty array
```

Arrays can store any combination of types, including numbers, strings, booleans, or even other arrays:
```beresta
let mixed = [1, "hi", true, [10, 20]];
```

---

## Indexing

Arrays are zero-indexed, meaning the first element is at index 0. You can access elements with the [] operator:
```beresta
let a = [10, 20, 30];
console_print(a[0]); // 10
console_print(a[2]); // 30
```

If the index is not an integer, it is automatically converted to one using floor semantics:
```beresta
console_print(a[1.9]); // treated as a[1]
```

Accessing an out-of-range index returns an empty value `(none)`.

---

## Nested Arrays

Arrays can contain other arrays, and you can chain indexing operations:
```beresta
let a = [1, [2, 3], 4];
console_print(a[1][0]); // 2
```

When assigning to a nested index, missing intermediate arrays are automatically created:
```beresta
let b = [];
b[2][1][0] = "x";
console_print(b); // [none, none, [none, ["x"]]]
```

---

## Assignment and Expansion

Arrays are automatically resized when assigning beyond their current size:
```beresta
let a = [1, 2];
a[5] = 99;
console_print(a); // [1, 2, none, none, none, 99]
```

---

## Modification Examples

You can reassign array elements directly:
```beresta
let a = [1, "hi", true];
a[1] = "hello";
a[2] = false;
console_print(a); // [1, "hello", false]
```

Even nested values can be replaced:
```beresta
a[3][0] = 42;
```

---

## Working with Loops

Arrays are tightly integrated with the `foreach` loop:
```beresta
let arr = [10, 20, 30];
foreach(x in arr)
{
    console_print(x);
}
```

`foreach` automatically handles nested arrays, making it ideal for 2D structures:
```beresta
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

foreach(row in matrix)
{
    foreach(val in row)
    {
        console_print(val);
    }
}
```

---

## Arrays as Function Results

Functions can return arrays, allowing modular data creation:
```beresta
public function make_arr()
{
    return [5, 6, 7];
}

console_print(make_arr()[1]); // 6
```

---

## Dynamic Growth and Computation

You can grow arrays dynamically inside loops:
```beresta
let c = [];
for(let k = 0; k < 3; k = k + 1)
{
    c[k] = k * 10;
}
console_print(c); // [0, 10, 20]
```

Arrays are automatically extended when assigning a higher index:
```beresta
c[5] = 50;
console_print(c); // [0, 10, 20, none, none, 50]
```

---

## Using Arrays with Conditions

Arrays can be processed in loops for accumulation or filtering:
```beresta
let sum = 0;
let j = 0;
while(j < 3)
{
    sum = sum + c[j];
    j = j + 1;
}
console_print(sum);
```

---

## Notes

- Arrays in BerestaLanguage are flexible containers, behaving similarly to GameMaker arrays but with extended auto-expansion, nested creation, and type-mixed flexibility.
# Console Output

The `console_print()` function outputs text or values to the runtime console.  
It is primarily used for debugging, displaying results, or tracking program flow.

---

## Syntax
```beresta
console_print(value);
```

You can also concatenate multiple values or strings:
```beresta
console_print("x = " + x + ", y = " + y);
```

---

## Description

`console_print()` converts the given value into a string and displays it in the program’s console output.
It supports all primitive data types, arrays, and complex structures.

Each call prints a new line automatically after the output.

---

## Examples

Basic output:
```beresta
console_print("Hello from BerestaLanguage!");
```

Printing numbers and expressions:
```beresta
let a = 5;
let b = 3;

console_print(a + b);                // 8
console_print("Result: " + (a * b)); // Result: 15
```

Outputting arrays:
```beresta
let arr = [10, "hi", true, [1, 2, 3]];
console_print(arr);
```

Outputting matrices:
```beresta
matrix_identity();
console_print(matrix_get());
```

Outputting strings with variables:
```beresta
let name = "Denis";
let score = 95;

console_print("Player " + name + " scored " + score + " points!");
```

---

## Notes

- Automatically adds a newline at the end of the output.
- Multiple arguments must be concatenated manually using +.
- Arrays and matrices are printed recursively with all nested elements.
- Can output results of functions directly:
```beresta
console_print(sqrt(25));
```

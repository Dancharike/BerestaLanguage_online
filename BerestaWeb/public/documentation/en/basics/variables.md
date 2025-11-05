# Variables

Variables in Beresta Language are dynamically typed. They can store numbers, strings, booleans, arrays, or other values. The keyword `let` is optional when declaring variables.

---

## Syntax
```beresta
let name = value;
```
or simply:
```beresta
name = value;
```

---

## Description

Variables can be declared with or without the `let` keyword. If a variable is assigned a value without `let`, it is automatically created in the current scope.

All variables are dynamic and do not require explicit type definitions.

---

## Examples

## Basis Assignment
```beresta
let a = 10;
let b = 5;
let c = a + b;
console_print(c); // 15
```
## Without using `let`
```beresta
x = 100;
y = 25;
console_print(x - y); // 75
```
## Strings and Concations
```beresta
name = "User";
console_print("Hello, " + name);
```
## Boolean flags
```beresta
is_ready = true;
if(!is_ready)
{
    console_print("Not ready yet!");
}
else
{
    console_print("Ready to go!");
}
```

---

## Notes

- All variables are mutable.
- Redeclaring a variable overwrites its previous value.
- Booleans support the operators `!`, `&&`, `||`, `and`, `or`.
# Built-in Constants

BerestaLanguage provides several predefined **macros (constants)** that are globally accessible from any file in your project.  
They do not require declaration or import and can be used directly in expressions, functions, or printed to the console.

---

## Overview

Macros are constant values that represent useful global data — such as engine version, mathematical constants, or predefined identifiers.  
They are evaluated at runtime but stored as immutable values.

---

## Declaration

You can declare a macros by simply entering:
```beresta
#macros VERSION   = "1.0.0";
#macros PI        = 3.14159;
```
It is recommended to have a single `.beresta` file where you will store all your macros.

---

## Example

```beresta
console_print("Running version: " + VERSION);

function area_of_circle(r)
{
    return PI * r * r;
}

console_print("Circle area: " + area_of_circle(5));
```

Result will be:
```beresta
Running version: 1.0.0
Circle area: 78.5398
```

---

## Notes

- Macros are ideal for versioning, math utilities, and project-wide configuration flags.
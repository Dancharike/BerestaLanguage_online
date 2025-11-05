# Core Math Functions

The **core math library** in BerestaLanguage provides fundamental numeric operations such as rounding, logarithms, clamping, interpolation, and statistical utilities.  
All these functions operate on numbers (`double` and `int`) and automatically perform argument validation at runtime.

If an invalid argument is passed, the interpreter produces a diagnostic error message with file and line reference.

---

## Function List

| Function | Description |
|-----------|--------------|
| `sqr(x)` | Returns `x` squared. |
| `sqrt(x)` | Returns the square root of `x`. The argument must be non-negative. |
| `abs(x)` | Returns the absolute (non-negative) value of `x`. |
| `round(x)` | Rounds `x` to the nearest integer. |
| `floor(x)` | Rounds `x` down (toward negative infinity). |
| `ceil(x)` | Rounds `x` up (toward positive infinity). |
| `frac(x)` | Returns the fractional part of `x` (i.e. `x - floor(x)`). |
| `power(x, y)` | Returns `x` raised to the power `y`. |
| `clamp(value, min, max)` | Restricts a value between two limits. |
| `lerp(a, b, t)` | Performs a linear interpolation between `a` and `b` by ratio `t` (0.0 → a, 1.0 → b). |
| `min(a, b)` | Returns the smaller of two numbers. |
| `max(a, b)` | Returns the larger of two numbers. |
| `mean(a, b, c, …)` | Returns the average (arithmetic mean) of all arguments. Requires at least one argument. |
| `median(a, b, c, …)` | Returns the median value among all arguments. Requires at least one argument. |
| `ln(x)` | Returns the natural logarithm of `x` (base *e*). Only valid for `x > 0`. |
| `log2(x)` | Returns the logarithm of `x` base 2. Only valid for `x > 0`. |
| `log10(x)` | Returns the logarithm of `x` base 10. Only valid for `x > 0`. |
| `logn(base, value)` | Returns the logarithm of `value` with the given `base`. Both must be positive, and `base ≠ 1`. |

---

## Descriptions

`sqr(x)` Squares a number:
```beresta
console_print(sqr(5)); // 25
```

`sqrt(x)` Returns the square root of a number:
```beresta
console_print(sqrt(9)); // 3
```

`abs(x)` Returns the absolute value (distance from zero):
```beresta
console_print(abs(-4.5)); // 4.5
```

`round(x)`, `floor(x)`, `ceil(x)` Rounding functions similar to most languages:
```beresta
console_print(round(3.6)); // 4
console_print(floor(3.6)); // 3
console_print(ceil(3.1));  // 4
```

`frac(x)` Returns the fractional part of a number, removing the integer portion:
```beresta
console_print(frac(3.14)); // 0.14
```

`power(x, y)` Raises `x` to the power `y`:
```beresta
console_print(power(2, 10)); // 1024
```

`clamp(value, min, max)` Constrains a number to stay within a given range:
```beresta
console_print(clamp(17, 0, 10)); // 10
console_print(clamp(-5, 0, 10)); // 0
```

`lerp(a, b, t)` Performs a linear interpolation between `a` and `b` by amount `t`:
```beresta
console_print(lerp(0, 100, 0.3)); // 30
```

`min(a, b)` and `max(a, b)` Return the smaller or larger of two numbers respectively:
```beresta
console_print(min(10, 3)); // 3
console_print(max(10, 3)); // 10
```

`mean(a, b, c, …)` Calculates the average value of all arguments:
```beresta
console_print(mean(1, 2, 3, 4)); // 2.5
```

`median(a, b, c, …)` Sorts all arguments and returns the middle one. If there is an even count, the lower middle value is used:
```beresta
console_print(median(1, 9, 3, 7)); // 5
```

`ln(x)`, `log2(x)`, `log10(x)` All logarithmic functions require positive input:
```beresta
console_print(ln(25));       // 3.218
console_print(log2(1024));   // 10
console_print(log10(10000)); // 4
```

`logn(base, value)` Computes the logarithm of value with custom `base`:
```beresta
console_print(logn(5, 25)); // 2
```

---

## Notes

- All arguments are automatically converted to numeric values (`double` and `int`).
- Type mismatches or domain violations generate descriptive runtime diagnostics.
- None of these functions modify variables; all return new computed values.
- Arithmetic can be nested freely, e.g. `sqrt(power(a, 2) + power(b, 2))`.
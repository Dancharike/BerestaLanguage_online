# Random Functions

BerestaLanguage provides a lightweight pseudo-random number generator system used across multiple built-in functions.

All random-related functions belong to this family:

| Function | Description |
|-----------|--------------|
| `choose_from(a, b, c, …)` | Returns one random element from all given arguments. |
| `random(max)` | Returns a random real number from `0.0` (inclusive) up to `max` (exclusive). |
| `random_range(min, max)` | Returns a random real number between `min` and `max` (inclusive). |
| `int_random(max)` | Returns a random integer between `0` and `max` (inclusive). |
| `int_random_range(min, max)` | Returns a random integer between `min` and `max` (inclusive). |

---

## Descriptions

`choose_from(a, b, c, …)` Selects one random element from the provided list of arguments. All argument types are accepted (numbers, strings, booleans, arrays, etc.):
```beresta
console_print(choose_from(10, 20, 30, 40)); // prints 10, 20, 30, or 40
console_print(choose_from("apple", "orange", "banana"));
```

`random(max)` Generates a `floating-point number` between `0.0` and `max`:
```beresta
console_print(random(1));   // 0.0 ≤ x < 1.0
console_print(random(10));  // 0.0 ≤ x < 10.0
```

`random_range(min, max)` Generates a `floating-point number` between `min` and `max`:
```beresta
console_print(random_range(5, 15));  // 5.0 ≤ x ≤ 15.0
console_print(random_range(10, 5));  // also valid, swapped internally
```

`int_random(max)` Generates an `integer` number between `0` and `max` (inclusive):
```beresta
console_print(int_random(5)); // possible values: 0, 1, 2, 3, 4, 5
```

`int_random_range(min, max)` Generates an `integer` in the range `[min, max]`:
```beresta
console_print(int_random_range(5, 15)); // 5 ≤ x ≤ 15
console_print(int_random_range(10, 2)); // also valid, swapped internally
```

---

## Notes

- `random()` and `random_range()` use uniform real distributions (`double` values).
- `int_random()` and `int_random_range()` use uniform `integer` distributions.
- The random seed is system-generated at startup, so results differ per session.
- Functions are pure in logic terms — they don’t modify variables, only return computed values.
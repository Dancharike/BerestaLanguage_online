# Trigonometric and Geometric Functions

The **trigonometric library** in BerestaLanguage provides full support for both radian- and degree-based trigonometry, as well as geometric utilities for 2D coordinate operations.  
All functions perform strict argument validation and rounding to reduce floating-point noise.

---

## Constants

Two implicit constants are used internally:

- `DEGTORAD = π / 180`
- `RADTODEG = 180 / π`

---

## 1. Radian-based functions

| Function | Description | Restrictions |
|-----------|--------------|---------------|
| `sin(x)` | Returns the sine of `x` (radians). | Argument must be numeric. |
| `cos(x)` | Returns the cosine of `x` (radians). | Argument must be numeric. |
| `tan(x)` | Returns the tangent of `x` (radians). Reports error if result is infinite. | Finite result required. |
| `arcsin(x)` | Returns the arc sine of `x` (radians). | Input must be in range [-1, 1]. |
| `arccos(x)` | Returns the arc cosine of `x` (radians). | Input must be in range [-1, 1]. |
| `arctan(x)` | Returns the arc tangent of `x` (radians). | Numeric only. |
| `arctan2(y, x)` | Returns `atan2(y, x)` (radians). Accounts for signs of both coordinates. | Two numeric arguments required. |

Examples:
```beresta
console_print(sin(3.14159 / 2)); // 1
console_print(cos(0));           // 1
console_print(tan(3.14159 / 4)); // 1

console_print(arcsin(0));        // 0
console_print(arccos(0));        // 1.57
console_print(arctan(1));        // 0.78
console_print(arctan2(1, 1));    // 0.78
```

---

## 2. Degree-based functions

Functions starting with d work with degrees instead of radians.
They automatically convert internally and round to 2 decimal places for more predictable results.

| Function | Description | Restrictions |
|-----------|--------------|---------------|
| `dsin(x)` | Returns the sine of `x` (degrees). | Argument must be numeric. |
| `dcos(x)` | Returns the cosine of `x` (degrees). | Argument must be numeric. |
| `dtan(x)` | Returns the tangent of `x` (degrees). Reports error if result is infinite. | Finite result required. |
| `darcsin(x)` | Returns the arc sine of `x` (degrees). | Input must be in range [-180, 180]. |
| `darccos(x)` | Returns the arc cosine of `x` (degrees). | Input must be in range [-180, 180]. |
| `darctan(x)` | Returns the arc tangent of `x` (degrees). | Numeric only. |
| `darctan2(y, x)` | Returns `atan2(y, x)` (degrees). Accounts for signs of both coordinates. | Two numeric arguments required. |

Examples:
```beresta
console_print(dsin(90));      // 1
console_print(dcos(45));      // 0.71
console_print(dtan(45));      // 1
console_print(darcsin(-1));   // -90
console_print(darccos(-1));   // 180
console_print(darctan(1));    // 45
console_print(darctan2(1,1)); // 45
```

---

## 3. Geometric functions

These functions are built for 2D geometry operations, commonly used in game and simulation logic.

| Function                   | Description                              | Restrictions |
|----------------------------|------------------------------------------|--------------|
| `point_direction(x1, y1, x2, y2)` | Returns the direction (in degrees) from `(x1, y1)` to `(x2, y2)`. | 4 numeric arguments required. |
| `point_distance(x1, y1, x2, y2)` | Returns the distance between two points. | 4 numeric arguments required. |
| `lengthdir_x(length, dir)` | Returns the X component of a vector with given length and direction (in degrees). | 2 numeric arguments required. |
| `lengthdir_y(length, dir)` | Returns the Y component (negative Y direction) of a vector with given length and direction. | 2 numeric arguments required. |

Examples:
```beresta
console_print(point_direction(0, 0, 1, 0)); // 0
console_print(point_distance(0, 0, 3, 4));  // 5

console_print(lengthdir_x(64, 90)); // 0
console_print(lengthdir_y(64, 90)); // -64
```

---

## 4. Precision and rounding

All degree-based functions round their results to two decimal places to stabilize output and reduce floating-point artifacts.
Tiny results under 0.00001 are normalized to zero.

Example:
```beresta
console_print(dcos(90)); // 0
```

---

## Notes

- Both radian and degree functions coexist and can be mixed as needed.
- Prefer degree functions for game coordinate systems and rotations.
- Radian functions are more precise for mathematical computation and scripting logic.
- These functions return numeric values and never modify state.
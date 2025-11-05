# Matrix Transformation Functions

BerestaLanguage provides a minimal **2D matrix transformation system**, similar to what GameMaker or low-level graphics APIs use internally.  
These functions let you build, modify, and apply affine transformation matrices to 2D points.

Internally, each matrix is represented as a 2×3 structure (`Matrix2D`) stored as:
```beresta
[a, b, c,
d, e, f]
```
which corresponds to a transformation matrix:
```beresta
| a b c |
| d e f |
| 0 0 1 |
```

All matrix functions operate on a single **global active matrix**. This matrix is modified and reused across function calls until changed or reset.

Example:
```beresta
matrix_identity();
matrix_build(1, 1, 45, 0, 0); // overwrites current matrix
matrix_inverse();             // modifies same current matrix
```

---

## Function List

| Function | Description |
| --- | --- |
| `matrix_get()` | Returns the current transformation matrix as an array of 6 numbers. |
| `matrix_set(a, b, c, d, e, f)` | Replaces the current matrix values. |
| `matrix_build(scale_x, scale_y, rotation, translate_x, translate_y)` | Builds a new transformation matrix and sets it active. |
| `matrix_identity()` | Resets the current matrix to the identity matrix. |
| `matrix_multiply(a, b, c, d, e, f)` | Multiplies the current matrix by another matrix and updates it. |
| `matrix_inverse()` | Inverts the current matrix (if possible). |
| `matrix_transform_vertex(x, y)` | Transforms a 2D vertex (x, y) by the current matrix and returns the result. |

---

## Descriptions

`matrix_get()` Returns the current matrix as an array of six floating-point values:
```beresta
let m = matrix_get();
console_print(m); // [1, 0, 0, 0, 1, 0] by default
```

`matrix_set(a, b, c, d, e, f)` Replaces the contents of the current matrix manually:
```beresta
matrix_set(1, 0, 32, 0, 1, 16);
console_print(matrix_get()); // [1, 0, 32, 0, 1, 16]
```

`matrix_build(scale_x, scale_y, rotation, translate_x, translate_y)` Builds and sets a new matrix based on scale, rotation, and translation. This replaces the current matrix entirely:
```beresta
matrix_build(2, 2, 45, 100, 50);
console_print(matrix_get()); // returns [a, b, c, d, e, f] of built matrix
```

`matrix_identity()` Resets the matrix to the identity state:
```beresta
matrix_identity();
```

`matrix_multiply(a, b, c, d, e, f)` Multiplies the current matrix by another one defined by the six provided numeric values:
```beresta
// Compose transformations
matrix_identity();
matrix_multiply(1, 0, 10, 0, 1, 20);
```

`matrix_inverse()` Computes and replaces the current matrix with its inverse. If the matrix is not invertible (determinant = 0), the function reports an error:
```beresta
matrix_inverse();
```

`matrix_transform_vertex(x, y)` Applies the current transformation matrix to a 2D point `(x, y)` and returns a 2-element array `[tx, ty]` of transformed coordinates:
```beresta
matrix_build(1, 1, 45, 10, 5);
let p = matrix_transform_vertex(10, 0);
console_print(p); // [transformed_x, transformed_y]
```

---

## Example
```beresta
matrix_identity();                         // reset
matrix_build(2, 2, 30, 10, 15);            // scale ×2, rotate 30°, move (10,15)

let pos = matrix_transform_vertex(1, 0);   // apply transformation
console_print(pos);

matrix_inverse();                          // invert
console_print(matrix_get());               // print inverse

matrix_set(1, 0, 0, 0, 1, 0);              // manually reset
```

---

## Notes

- The transformation order is scale → rotate → translate.
- The system works entirely in 2D.
- All transformations modify the current matrix in global state.
- Matrices are always 2×3 (affine); there is no perspective or 3D component.
- All results are returned as numeric arrays `([a, b, c, d, e, f])` or transformed vectors `[x, y]`.
- The matrix system is suitable for game logic, camera transformations, or 2D entity positioning.
# Operators and Expressions

Operators in Beresta Language define how values are combined, compared, or transformed.  
The language supports arithmetic, comparison, logical, and assignment operators, similar to those found in C-style languages.

---

## Arithmetic Operators

| Operator | Description | Example | Result |
|-----------|--------------|----------|---------|
| `+` | Addition | `2 + 3` | 5 |
| `-` | Subtraction | `10 - 4` | 6 |
| `*` | Multiplication | `3 * 4` | 12 |
| `/` | Division | `10 / 2` | 5 |
| `%` | Modulo (remainder) | `10 % 3` | 1 |
| `-x` | Unary minus | `-5` | -5 |

Example:
```beresta
let a = 5;
let b = 2;
console_print(a * b + 10); // 20
```

---

## Comparison Operators

| Operator | Description | Example | Result |
|-----------|--------------|----------|---------|
| `==` | Equal | `1 == 1` | true |
| `!=` | Not equal | `1 != 2` | true |
| `>` | Greater than | `1 > 2` | false |
| `<` | Less than | `1 < 2` | true |
| `>=` | Greater than or equal to | `1 >= 1` | true |
| `<=` | Less than or equal to | `1 <= 1` | true |

Example:
```beresta
let x = 10;
let y = 20;

if(x < y)
{
    console_print("x is smaller");
}
```

---

## Logical Operators

Beresta supports both symbolic (`&&`, `||`) and word-based (`and`, `or`) logical operators.
They can be used interchangeably for readability.

Example:
```beresta
let a = 5;
let b = 10;

if(a < b and b < 20)
{
    console_print("Both conditions true");
}

if(!(a > b))
{
    console_print("Negation works");
}
```

---

## Assignment Operators

| Operator | Description | Example | Result |
|-----------|--------------|----------|---------|
| `=` | Assignment | `a = 5` | 5 |
| `+=` | Addition assignment | `a += 5` | 10 |
| `-=` | Subtraction assignment | `a -= 5` | 5 |
| `*=` | Multiplication assignment | `a *= 5` | 25 |
| `/=` | Division assignment | `a /= 5` | 5 |
| `%=` | Modulo assignment | `a %= 5` | 0 |

Example:
```beresta
let a = 10;
a += 5;
a *= 2;
console_print(a); // 30
```

---

## Operator Precedence

Beresta evaluates expressions in the following order (from highest to lowest):

- Parentheses ()
- Unary operators: !, -
- Multiplication, Division, Modulo
- Addition, Subtraction
- Comparison operators
- Logical operators
- Assignment =, +=, -=, etc.

Example:
```beresta
let x = 2 + 3 * 4;            // 14
let y = (2 + 3) * 4;          // 20
if(!(x > y or y > 0)) {}      // false
```

---

## Notes

- Division between two integers returns a floating-point result.
- Logical operators always return a boolean (`true` or `false`).
- You can mix `and`/`or` with symbolic operators, but using one style consistently is recommended for clarity.
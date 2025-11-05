# If / Else

The `if` statement allows conditional execution of code depending on whether a condition is true or false.  
It can be combined with `else` or `else if` to create complex branching logic.

---

## Syntax
```beresta
if(condition)
{
    // code when condition is true
}
else if(other_condition)
{
    // code when the first condition is false, but this one is true
}
else
{
    // code when all conditions are false
}
```

---

## Description

The `if` statement evaluates a logical expression. 
If the result is true, the code block following the `if` is executed.
If not, control passes to the next `else if` or `else` block (if present).

Conditions can use logical (`and`, `or`, `!`) and comparison operators.

---

## Examples

Basic condition check:
```beresta
let a = 10;
let b = 20;

if(a < b)
{
    console_print("a is smaller than b");
}
else
{
    console_print("a is greater or equal to b");
}
```

Nested if statements:
```beresta
x = 5;
y = 10;

if(x > y)
{
    console_print("x is greater");
}
else if(x < y)
{
    z = x + y;
    console_print("sum: " + z);
}
else
{
    console_print("x equals y");
}
```

Using logical operators:
```beresta
a = 5;
b = 10;

if(a < b and b < 20)
{
    console_print("Both conditions true");
}

if(!(a > b))
{
    console_print("Negation example");
}
```

---

## Notes

- Curly braces `{}` are required for code blocks.
- `else if` must follow directly after an `if` or another `else if`.
- Conditions are dynamically evaluated; both numeric and boolean expressions are valid.
- Logical operators can be written as either symbols (`&&`, `||`, `!`) or words (`and`, `or`).
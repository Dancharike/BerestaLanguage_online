# Recursion

Recursion allows a function to call itself to solve a problem in smaller steps.  
This technique is useful for mathematical computations, data traversal, and repeated logic that naturally divides into subproblems.

---

## Syntax
```beresta
function name(parameter)
{
    if (base_condition)
    {
        return base_result;
    }

    return name(modified_parameter);
}
```

---

## Description

In BerestaLanguage, recursive calls work like in most procedural languages.
Each function call creates a new scope and stores local variables separately from the parent call.

When a `return` statement is reached, execution continues from the point where the function was originally called.

To prevent infinite recursion, ensure that every recursive call approaches a base case that terminates the process.

---

## Examples

Factorial:
```beresta
public function fact(n)
{
    if(n <= 1)
    {
        return 1;
    }

    return n * fact(n - 1);
}

let result = fact(5);
console_print(result); // 120
```

Summation:
```beresta
function sum_to(n)
{
    if(n <= 0)
    {
        return 0;
    }

    return n + sum_to(n - 1);
}

console_print(sum_to(10)); // 55
```

Nested recursion example:
```beresta
function countdown(n)
{
    if(n <= 0)
    {
        console_print("Done!");
        return;
    }

    console_print(n);
    countdown(n - 1);
}

countdown(5);
```

---

## Notes

- Each recursive call creates a new stack frame.
- Local variables do not interfere between recursive layers.
- Use base conditions to prevent infinite recursion.
- Deep recursion may lead to stack overflow if not limited by the interpreter.
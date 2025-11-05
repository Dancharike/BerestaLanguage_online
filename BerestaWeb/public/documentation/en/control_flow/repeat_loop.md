# Repeat Loop

The `repeat` loop executes a block of code a fixed number of times.  
It is useful when you know exactly how many iterations should occur.

---

## Syntax
```beresta
repeat(count)
{
    // code to execute repeatedly
}
```

---

## Description

The `repeat` statement runs the enclosed block exactly `count` times.
The value of `count` is evaluated before the loop begins.
If `count` is zero or negative, the loop body will not execute.

Unlike `while`, the loop does not check a condition each time—it simply runs the specified number of times.

---

## Examples

Basic repetition:
```beresta
repeat(5)
{
    console_print("Iteration");
}
```

Random numbers:
```beresta
repeat(5)
{
    console_print(int_random_range(1, 10));
}
```

Using `break` inside `repeat`:
```beresta
let random_check = 0;

repeat(10)
{
    let n = int_random_range(1, 10);
    console_print("num: " + n);

    if(n == 7)
    {
        console_print("found 7, stopping early");
        break;
    }

    random_check = random_check + 1;
}

console_print("repeat done, total iterations: " + random_check);
```

---

## Notes

- `repeat` loops always start from zero and iterate the specified number of times.
- The counter variable is implicit (not accessible directly).
- You can still use `break` and `continue` inside the loop.
- If the repeat count is fractional, it will be rounded down to the nearest integer.
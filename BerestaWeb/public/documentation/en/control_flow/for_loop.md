# For Loop

The `for` loop repeats a block of code a specific number of times, using a counter variable that changes on each iteration.  
It is ideal when the start, end, and step values are known in advance.

---

## Syntax
```beresta
for(initialization; condition; increment)
{
    // code to execute each iteration
}
```

---

## Description

A for loop has three main parts:

- Initialization – executed once at the start (e.g. `let i = 0`).
- Condition – checked before each iteration. If it is `false`, the loop ends.
- Increment – executed after each iteration (e.g. `i = i + 1`).

The loop continues as long as the condition remains true.

---

## Examples

Basic counter:
```beresta
for(let i = 0; i < 3; i = i + 1)
{
    console_print("Loop iteration: " + i);
}
```

Using `continue` and `break`:
```beresta
for(let j = 0; j < 10; j = j + 1)
{
    if(j % 2 == 0) {continue;}  // skip even numbers
    if(j == 7)     {break;}     // stop when j reaches 7

    console_print("Odd number: " + j);
}

console_print("for loop finished");
```

Loop without `let`:
```beresta
for(i = 0; i < 5; i = i + 1)
{
    console_print(i);
}
```

---

## Notes

- All expressions in the for header are evaluated in order.
- You can declare variables inside the loop using `let`.
- `break` exits the loop immediately.
- `continue` skips the current iteration and proceeds with the next.
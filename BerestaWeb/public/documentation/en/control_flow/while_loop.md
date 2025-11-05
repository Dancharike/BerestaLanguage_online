# While Loop

The `while` loop repeats a block of code as long as the given condition remains true.  
It is useful for performing operations when the number of iterations is not known in advance.

---

## Syntax
```beresta
while(condition)
{
    // code that runs while the condition is true
}
```

---

## Description

Before each iteration, the condition inside parentheses is evaluated.
If it returns `true`, the loop body executes.
When the condition becomes `false`, the loop stops.

The condition must eventually change during the loop, or it will continue indefinitely.

---

## Examples

Simple counter:
```beresta
i = 0;

while(i < 5)
{
    console_print(i);
    i = i + 1;
}

console_print("Loop done!");
```

Using `break` and `contunue`:
```beresta
let counter = 0;

while(counter < 10)
{
    counter = counter + 1;

    if(counter == 3)
    {
        console_print("skip 3");
        continue;
    }

    if(counter == 8)
    {
        console_print("stop at 8");
        break;
    }

    console_print("counter: " + counter);
}

console_print("while done");
```

---

## Infinite Loop

A loop with a condition that never becomes false will run forever.
Make sure that your loop logic modifies the variables used in the condition.

Example of an infinite loop (should be avoided):
```beresta
while(true)
{
    console_print("This never ends");
}
```

---

## Notes

- The `while` condition is checked before every iteration.
- Use `break` to exit a loop immediately.
- Use `continue` to skip to the next iteration.
- The loop body can contain any valid statements, including nested loops or conditional checks.
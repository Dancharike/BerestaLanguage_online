# Foreach Loop

The `foreach` loop iterates over all elements of an array or a nested collection.  
It simplifies reading and processing data without manually managing an index.

---

## Syntax
```beresta
foreach(element in array)
{
    // code that uses 'element'
}
```

---

## Description

The `foreach` statement extracts each element from an array or nested array, assigning it to a temporary variable for each iteration.

It automatically handles array length, making iteration cleaner and less error-prone compared to a manual `for` loop.

Nested `foreach` loops can be used to traverse multi-dimensional arrays.

---

## Examples

Basic iterations:
```beresta
let arr = [10, 20, 30, "text", [5, 15, 25], false];

foreach(x in arr)
{
    console_print(x);
}
```

Nested arrays:
```beresta
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

foreach(row in matrix)
{
    foreach(val in row)
    {
        console_print(val);
    }
}
```

Using conditions and control flow:
```beresta
foreach(n in [5, 10, 15, 20])
{
    if(n > 10)
    {
        console_print("Above 10: " + n);
    }
}
```

Breaking and skipping inside nested loops:
```beresta
let nested_matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

foreach(row in nested_matrix)
{
    foreach(val in row)
    {
        if(val == 5)
        {
            console_print("skip 5");
            continue;
        }

        if(val == 8)
        {
            console_print("stop inner at 8");
            break;
        }

        console_print(val);
    }

    if(row[0] == 7)
    {
        console_print("stop outer loop");
        break;
    }
}

console_print("foreach loop done");
```

---

## Notes

- The loop variable is a temporary copy of each element.
- `break` exits the current `foreach` loop.
- `continue` skips the current element and proceeds to the next.
- Works recursively with nested arrays.
- Modifying the original array inside the loop is supported but may affect iteration results.
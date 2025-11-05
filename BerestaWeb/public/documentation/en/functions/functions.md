# Function Syntax

Functions in Beresta Language allow you to group reusable pieces of logic.  
They can take parameters, return values, and be declared as `public` or `private`.

---

## Syntax
```beresta
function name(parameters)
{
    // code
    return value;
}
```
You can also declare visibility explicitly:
```beresta
public function name(parameters) {}
private function name(parameters) {}
```

---

## Description

- Public functions can be called from any file or module.
- Private functions are only available inside the file where they were declared.
- The `return` statement sends a value back to the caller. If no value is returned, the function call still executes and returns undefined.

Functions are first-class citizens and can be assigned, returned, or called within expressions.

---

## Examples

Basic `function`:
```beresta
public function add(a, b)
{
    return a + b;
}

let answer = add(2, 3);
console_print(answer); // 5
```
`Function` without return value:
```beresta
private function greet(name)
{
    console_print("Hello " + name);
}

let x = greet("Denis");
// prints: Hello Denis
// variable x contains undefined
```
Using functions inside expressions:
```beresta
function double(x)
{
    return x * 2;
}

console_print(double(10) + 5); // 25
```

---

## Visibility modifiers

| Modifier | Description |
| --- | --- |
| `public` | The function can be called from any file or module. |
| `private` | The function is only available inside the file where it was declared. |

If no modifier is provided, the `function` defaults to `public`.

---

## Calling External Functions

Public functions from other files can be invoked directly by name.
Example:
```beresta
let result = calculate(5, 10, 2); // it should be in another file
console_print(result);
```

---

## Notes

- Parameters are dynamically typed.
- The number of arguments passed can differ from the number of parameters.
- If too few arguments are passed, missing parameters become `undefined`.
- Functions can be nested or recursive (see the next section for recursion).
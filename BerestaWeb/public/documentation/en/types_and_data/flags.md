# Flags and Booleans

Flags (boolean values) in BerestaLanguage represent logical truth and are used for conditional flow control.  
They can be **true** or **false**, and support all standard logical operations.

---

## Basic Usage

Flags are assigned directly using the keywords `true` and `false`:

```beresta
let is_alive = true;
let has_key = false;
```

They can be printed, combined, and compared like any other value:
```beresta
console_print(is_alive); // true
console_print(has_key);  // false
```

---

## Logical Operators

BerestaLanguage supports both symbolic (&&, ||) and word-based (and, or) forms. They are fully equivalent and interchangeable.

Example:
```beresta
let a = true;
let b = false;

console_print(a and b); // false
console_print(a or b);  // true
console_print(!a);      // false
```

---

## Using Flags in Conditions

Booleans are most often used in `if`, `while`, and `foreach` conditions.

Example with if:
```beresta
is_flag = true;

if(is_flag)
{
    console_print("Flag is active!");
}
else
{
    console_print("Flag is off!");
}
```

---

## Negation

You can invert a flag using the exclamation mark:
```beresta
let is_flag = true;

if(!is_flag)
{
    console_print("Flag is false!");
}
else
{
    console_print("Flag is true!");
}
```

---

## Dynamic Reassignment

Flags can be changed or toggled at runtime:
```beresta
is_flag = true;

if(int_random(1) == 0)
{
    is_flag = !is_flag;
}
else
{
    is_flag = is_flag;
}

if(!is_flag)
{
    console_print("Flag turned off!");
}
else
{
    console_print("Flag remains on!");
}
```

---

## Combining Flags

Multiple flags can be combined in expressions using `and` / `or`:
```beresta
let has_sword = true;
let has_shield = false;
let has_potion = true;

if(has_sword and has_potion)
{
    console_print("Ready for battle!");
}

if(has_shield or has_potion)
{
    console_print("Has at least one defensive item.");
}
```

---

## Flags in Loops

Flags can be used as loop conditions:
```beresta
let running = true;
let counter = 0;

while(running)
{
    counter = counter + 1;
    console_print("Loop tick: " + counter);

    if(counter >= 3)
    {
        running = false;
    }
}
```

---

## Comparison and Type Coercion

Boolean values can be compared using standard operators:
```beresta
let a = true;
let b = false;

console_print(a == b); // false
console_print(a != b); // true
```

Non-boolean values in a condition are coerced into booleans:
- `0`, `""`, `[]`, or `none` → false
- Any non-zero number, non-empty string, or array with elements → `true`

```beresta
if(0)         {console_print("false branch");} // skipped
if(123)       {console_print("true branch");}  // executed
if("")        {console_print("false branch");} // skipped
if("text")    {console_print("true branch");}  // executed
if([])        {console_print("false branch");} // skipped
if([1])       {console_print("true branch");}  // executed
```

---

## Notes

- Flags are simple but powerful — they control game logic, handle branching, and combine with numerical or string checks for flexible condition evaluation.
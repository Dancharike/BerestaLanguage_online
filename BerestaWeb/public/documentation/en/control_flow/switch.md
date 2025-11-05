# Switch Statement

The `switch` statement allows selecting one of several code branches based on the value of an expression.  
It is useful when checking the same variable against multiple possible values.

---

## Syntax
```beresta
switch(expression)
{
    case value_1:
        // code for case 1
        break;

    case value_2:
        // code for case 2
        break;

    default:
        // code if no cases match
}
```

---

## Description

The `switch` statement compares the value of the provided expression against each case in order.
If a match is found, the corresponding block is executed.
The optional default block runs if no other cases match.

Each `case` should usually end with a `break` to prevent execution from continuing into the next case.

---

## Examples

Basic `switch` example:
```beresta
let action = "attack";

switch(action)
{
    case "attack":
        console_print("Hero attacks!");
        break;

    case "heal":
        console_print("Hero restores health.");
        break;

    case "sleep":
        console_print("Hero takes a rest.");
        break;

    default:
        console_print("Unknown action!");
}
```
Using variables and constants:
```beresta
enum PlayerAction
{
    Idle,
    Attack,
    Jump
}

let action = PlayerAction.Attack;

switch(action)
{
    case PlayerAction.Idle:
        console_print("Player is idle.");
        break;

    case PlayerAction.Attack:
        console_print("Player attacks!");
        break;

    case PlayerAction.Jump:
        console_print("Player jumps!");
        break;

    default:
        console_print("Undefined action.");
}
```
Without a matching `case`:
```beresta
let command = "dance";

switch(command)
{
    case "run":
        console_print("Running!");
        break;

    case "jump":
        console_print("Jumping!");
        break;

    default:
        console_print("Command not recognized.");
}
```

---

## Notes

- `switch` expressions are compared by value (not by reference).
- Use `break` to stop execution after a matching `case`.
- The `default` block is optional but recommended for completeness.
- Nested `switch` statements are supported but should be used carefully for readability.
# Enums

Enums in BerestaLanguage define a fixed set of **named constant values**.  
They are used to make code more readable and expressive, replacing raw numbers or strings with semantic names.

---

## Syntax

Enums are defined using the `enum` keyword followed by a name and a block of members:

```beresta
enum PlayerState
{
    Idle,
    Attack,
    Jump
}
```

Each member of the enum automatically receives a numeric value, starting from 0 and incrementing by one for each entry:
```beresta
PlayerState.Idle   = 0
PlayerState.Attack = 1
PlayerState.Jump   = 2
```

---

## Accessing Enum Values

You access an enum’s members using dot notation:
```beresta
console_print(PlayerState.Idle);   // 0
console_print(PlayerState.Attack); // 1
console_print(PlayerState.Jump);   // 2
```

---

## Explicit Values

You can explicitly assign a numeric value to any member. Subsequent members will continue counting from that value:
```beresta
enum PlayerState
{
    Idle,
    Attack = 5,
    Jump
}
```

This results in:
```beresta
PlayerState.Idle   = 0
PlayerState.Attack = 5
PlayerState.Jump   = 6
```

---

## Usage in Code

Enums can be stored in variables, compared, and printed just like numbers:
```beresta
let state = PlayerState.Attack;

if(state == PlayerState.Attack)
{
    console_print("Player is attacking!");
}
```

---

## Example

```beresta
enum EnemyType
{
    Slime,
    Goblin,
    Orc,
    Dragon = 10,
    Demon
}

console_print(EnemyType.Slime);   // 0
console_print(EnemyType.Dragon);  // 10
console_print(EnemyType.Demon);   // 11
```

Enums integrate seamlessly with `switch` statements:
```beresta
enum Weather
{
    Sunny,
    Rainy,
    Storm
}

function react_to_weather(w)
{
    switch(w)
    {
        case Weather.Sunny:
            console_print("Enjoy the sun!");
            break;

        case Weather.Rainy:
            console_print("Grab an umbrella!");
            break;

        case Weather.Storm:
            console_print("Stay inside!");
            break;
    }
}
```

---

## Notes

- Enum values are numeric only — no string or boolean members.
- Enums cannot currently contain methods or nested declarations.
- Re-declaring an enum with the same name in one file will overwrite the previous one.
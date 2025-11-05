# Structs (Basic)

Structs in BerestaLanguage are **lightweight data containers** used to store related fields together under one object.  
They are similar to records or objects in other languages but are currently **data-only** (no methods or inheritance).

---

## Basic Syntax

A struct is declared using assignment syntax with curly braces `{}`.  
Each field is listed inside the braces, separated by commas.

```beresta
obj_player = {
    name,
    hp,
    gold,
    x,
    y
};
```

This defines a structure template named obj_player that can be used to create instances.

---

## Creating an Instance

To create an instance of a struct, simply call it as a function with arguments in order of declaration:
```beresta
player_01 = obj_player("Denis", 100, 250, 32, 64);
```
This creates a new object with those field values.

---

## Accessing Fields

Struct fields are accessed using dot notation:
```beresta
console_print(player_01.name); // "Denis"
console_print(player_01.hp);   // 100
console_print(player_01.gold); // 250
```

You can also modify field values directly:
```beresta
player_01.gold = player_01.gold + 100;
console_print(player_01.gold); // 350
```

## Passing Structs to Functions

Structs can be passed to functions like any other value:
```beresta
function print_player_info(p)
{
    console_print("Name: " + p.name);
    console_print("HP: " + p.hp);
    console_print("Gold: " + p.gold);
}

print_player_info(player_01);
```

---

## Nested Structs

Structs can contain other structs as fields:
```beresta
obj_position = {x, y};
obj_player = {name, hp, gold, position};

player_01 = obj_player("Denis", 100, 250, obj_position(64, 128));

console_print(player_01.position.x); // 64
console_print(player_01.position.y); // 128
```

## Structs Across Files

Structs are global symbols once defined, meaning they can be used in other project files within the same compilation scope.
This allows you to define shared data types in one file and use them elsewhere.

Example:

File `objects.beresta`:
```beresta
obj_player = {name, hp, gold};
```

File `main.beresta`:
```beresta
player = obj_player("Alex", 120, 50);
console_print(player.name);
```

## Future Plans

In later versions, struct definitions may support:

- Methods (functions bound to instances)
- Inheritance between structs
- Default field values

These are currently planned but not implemented in the base interpreter.

## Notes

- Structs make it easy to define and manage entities like players, enemies, or items, keeping data organized and accessible without complex object systems.
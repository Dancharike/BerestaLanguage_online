# Перечисления

Перечисления в BerestaLanguage определяют фиксированный набор **именованных константных значений**.  
Они используются для повышения читаемости и выразительности кода, заменяя «сырые» числа или строки на осмысленные имена.

---

## Синтаксис

Перечисления объявляются с помощью ключевого слова `enum`, за которым следует имя и блок членов:

```beresta
enum PlayerState
{
    Idle,
    Attack,
    Jump
}
```

Каждый элемент перечисления автоматически получает числовое значение, начиная с `0` и увеличиваясь на единицу для каждой следующей записи:
```beresta
PlayerState.Idle   = 0
PlayerState.Attack = 1
PlayerState.Jump   = 2
```

---

## Доступ к значениям перечисления

Доступ к членам перечисления осуществляется через точечную нотацию:
```beresta
console_print(PlayerState.Idle);   // 0
console_print(PlayerState.Attack); // 1
console_print(PlayerState.Jump);   // 2
```

---

## Явные значения

Можно явно задать числовое значение любому элементу. Последующие элементы будут продолжать счёт с этого значения:
```beresta
enum PlayerState
{
    Idle,
    Attack = 5,
    Jump
}
```

Результат будет таким:
```beresta
PlayerState.Idle   = 0
PlayerState.Attack = 5
PlayerState.Jump   = 6
```

---

## Использование в коде

Перечисления можно хранить в переменных, сравнивать и выводить в консоль так же, как и числа:
```beresta
let state = PlayerState.Attack;

if(state == PlayerState.Attack)
{
    console_print("Player is attacking!"); // Игрок атакует!
}
```

---

## Пример

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

Перечисления прекрасно работают с оператором `switch`:
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
            console_print("Enjoy the sun!"); // Наслаждайся солнцем!
            break;

        case Weather.Rainy:
            console_print("Grab an umbrella!"); // Возьми зонт!
            break;

        case Weather.Storm:
            console_print("Stay inside!"); // Останься дома!
            break;
    }
}
```

---

## Примечания

- Значения перечислений всегда числовые — строки или логические типы не допускаются.  
- Перечисления не могут содержать методы или вложенные объявления.  
- Повторное объявление перечисления с тем же именем в одном файле перезапишет предыдущее.

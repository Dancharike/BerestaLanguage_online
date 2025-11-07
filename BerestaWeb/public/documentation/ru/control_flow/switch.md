# Switch

Оператор `switch` позволяет выбрать одну из нескольких ветвей кода на основе значения выражения.  
Он полезен, когда нужно проверить одну и ту же переменную на соответствие нескольким возможным значениям.

---

## Синтаксис
```beresta
switch(expression)
{
    case value_1:
        // код для первого случая
        break;

    case value_2:
        // код для второго случая
        break;

    default:
        // код, если ни одно условие не совпало
}
```

---

## Описание

Оператор `switch` последовательно сравнивает значение выражения с каждым из указанных `case`.  
Если найдено совпадение — выполняется соответствующий блок кода.  
Необязательный блок `default` выполняется, если ни один `case` не совпал.

Каждый `case` обычно должен завершаться оператором `break`, чтобы предотвратить переход выполнения к следующему случаю.

---

## Примеры

Базовый пример `switch`:
```beresta
let action = "attack";

switch(action)
{
    case "attack":
        console_print("Hero attacks!"); // Герой атакует!
        break;

    case "heal":
        console_print("Hero restores health."); // Герой восстанавливает здоровье.
        break;

    case "sleep":
        console_print("Hero takes a rest."); // Герой отдыхает.
        break;

    default:
        console_print("Unknown action!"); // Неизвестное действие!
}
```

Использование переменных и констант:
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
        console_print("Player is idle."); // Игрок бездействует.
        break;

    case PlayerAction.Attack:
        console_print("Player attacks!"); // Игрок атакует!
        break;

    case PlayerAction.Jump:
        console_print("Player jumps!"); // Игрок прыгает!
        break;

    default:
        console_print("Undefined action."); // Неопределённое действие.
}
```

Без совпадающего `case`:
```beresta
let command = "dance";

switch(command)
{
    case "run":
        console_print("Running!"); // Бежим!
        break;

    case "jump":
        console_print("Jumping!"); // Прыжок!
        break;

    default:
        console_print("Command not recognized."); // Команда не распознана.
}
```

---

## Примечания

- Выражения `switch` сравниваются по значению, а не по ссылке.  
- Используй `break`, чтобы завершить выполнение после совпадающего `case`.  
- Блок `default` необязателен, но рекомендуется для полноты.  
- Вложенные `switch` поддерживаются, но должны использоваться осторожно ради читаемости.

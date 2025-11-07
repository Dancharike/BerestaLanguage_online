# Булевые флаги

Флаги (логические значения) в BerestaLanguage представляют логическую истину и используются для управления потоком выполнения.  
Они могут принимать значения **true** или **false** и поддерживают все стандартные логические операции.

---

## Базовое использование

Флаги задаются напрямую с помощью ключевых слов `true` и `false`:

```beresta
let is_alive = true;
let has_key = false;
```

Их можно выводить, комбинировать и сравнивать, как и любые другие значения:
```beresta
console_print(is_alive); // true
console_print(has_key);  // false
```

---

## Логические операторы

BerestaLanguage поддерживает как символические (`&&`, `||`), так и словесные (`and`, `or`) формы операторов. Они полностью эквивалентны и взаимозаменяемы.

Пример:
```beresta
let a = true;
let b = false;

console_print(a and b); // false
console_print(a or b);  // true
console_print(!a);      // false
```

---

## Использование флагов в условиях

Булевы значения чаще всего применяются в конструкциях `if`, `while` и `foreach`.

Пример с `if`:
```beresta
is_flag = true;

if(is_flag)
{
    console_print("Flag is active!"); // Флаг активен!
}
else
{
    console_print("Flag is off!"); // Флаг выключен!
}
```

---

## Отрицание

Флаг можно инвертировать с помощью восклицательного знака:
```beresta
let is_flag = true;

if(!is_flag)
{
    console_print("Flag is false!"); // Флаг ложный!
}
else
{
    console_print("Flag is true!"); // Флаг истинный!
}
```

---

## Динамическое изменение

Флаги можно изменять или переключать во время выполнения программы:
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
    console_print("Flag turned off!"); // Флаг выключен!
}
else
{
    console_print("Flag remains on!"); // Флаг остался включён!
}
```

---

## Комбинирование флагов

Несколько флагов можно комбинировать в одном выражении с помощью `and` / `or`:
```beresta
let has_sword = true;
let has_shield = false;
let has_potion = true;

if(has_sword and has_potion)
{
    console_print("Ready for battle!"); // Готов к битве!
}

if(has_shield or has_potion)
{
    console_print("Has at least one defensive item."); // Есть хотя бы один защитный предмет.
}
```

---

## Флаги в циклах

Флаги можно использовать в качестве условий цикла:
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

## Сравнение и приведение типов

Булевы значения можно сравнивать с помощью стандартных операторов:
```beresta
let a = true;
let b = false;

console_print(a == b); // false
console_print(a != b); // true
```

Небулевы значения в условиях автоматически приводятся к логическим:
- `0`, `""`, `[]` или `none` → `false`
- Любое ненулевое число, непустая строка или массив с элементами → `true`

```beresta
if(0)         {console_print("false branch");} // пропущено
if(123)       {console_print("true branch");}  // выполнено
if("")        {console_print("false branch");} // пропущено
if("text")    {console_print("true branch");}  // выполнено
if([])        {console_print("false branch");} // пропущено
if([1])       {console_print("true branch");}  // выполнено
```

---

## Примечания

- Флаги — это простая, но мощная часть языка: они управляют логикой игры, ветвлениями и могут сочетаться с числовыми или строковыми проверками для гибких условий.

# Работа с массивами

BerestaLanguage включает полный набор функций для работы с массивами.  
Массивы динамические — они могут расширяться, сокращаться и содержать смешанные типы значений (числа, строки, массивы и т. д.).  
Все функции создают новые массивы, не изменяя оригинальные, если не указано иное.

---

## Описание

`array_is_array(value)` Возвращает `true`, если переданное значение является массивом, иначе `false`:
```beresta
console_print(array_is_array([1, 2, 3])); // true
console_print(array_is_array(42));        // false
```

`array_length(array)` Возвращает количество элементов в массиве:
```beresta
console_print(array_length([1, 2, 3])); // 3
```

`array_get(array, index)` Возвращает элемент по указанному индексу (`0` — первый элемент):
```beresta
let arr = [10, 20, 30];
console_print(array_get(arr, 1)); // 20
```

`array_set(array, index, value)` Устанавливает `array[index]` равным `value`.  
Если индекс выходит за пределы текущего размера массива, массив автоматически расширяется и заполняется пустыми значениями до указанного индекса:
```beresta
let arr = [1, 2];
arr = array_set(arr, 4, 99);
console_print(arr); // [1, 2, null, null, 99]
```

`array_push(array, value)` Добавляет значение `value` в конец массива:
```beresta
let arr = [1, 2];
arr = array_push(arr, 3);
console_print(arr); // [1, 2, 3]
```

`array_last(array)` Возвращает последний элемент массива:
```beresta
console_print(array_last([5, 10, 15])); // 15
```

`array_pop(array)` Удаляет последний элемент и возвращает укороченный массив:
```beresta
let arr = [1, 2, 3];
arr = array_pop(arr); // [1, 2]
```

`array_insert(array, index, value)` Вставляет значение `value` в позицию `index`:
```beresta
let arr = [1, 2, 3];
arr = array_insert(arr, 1, 99);
console_print(arr); // [1, 99, 2, 3]
```

`array_delete(array, index)` Удаляет элемент по указанному индексу:
```beresta
let arr = [10, 20, 30];
arr = array_delete(arr, 1);
console_print(arr); // [10, 30]
```

`array_slice(array, start, count?)` Возвращает часть массива, начиная с индекса `start`:
```beresta
let arr = [1, 2, 3, 4, 5];
console_print(array_slice(arr, 2));    // [3, 4, 5]
console_print(array_slice(arr, 1, 2)); // [2, 3]
```

`array_concat(a, b)` Объединяет два массива в новый:
```beresta
let a = [1, 2];
let b = [3, 4];
console_print(array_concat(a, b)); // [1, 2, 3, 4]
```

`array_reverse(array)` Переворачивает порядок элементов:
```beresta
console_print(array_reverse([1, 2, 3])); // [3, 2, 1]
```

`array_index_of(array, value)` Возвращает первый индекс, где встречается `value`, или `-1`, если элемент не найден:
```beresta
let arr = [10, 20, 30];
console_print(array_index_of(arr, 20)); // 1
console_print(array_index_of(arr, 99)); // -1
```

`array_contains(array, value)` Возвращает `true`, если значение присутствует в массиве, иначе `false`:
```beresta
console_print(array_contains([1, 2, 3], 2)); // true
```

`array_join(array, separator?)` Объединяет все элементы массива в строку, разделяя их указанным `separator` (по умолчанию `","`):
```beresta
console_print(array_join(["a", "b", "c"], "-")); // "a-b-c"
```

`array_resize(array, new_size, fill_value?)` Изменяет размер массива.  
Если `new_size` больше текущего, новые элементы заполняются `fill_value` или `null`:
```beresta
let arr = [1, 2];
arr = array_resize(arr, 5, 0);
console_print(arr); // [1, 2, 0, 0, 0]
```

`array_fill(length, value)` Создаёт новый массив, заполненный значением `value`, повторённым `length` раз:
```beresta
let arr = array_fill(4, "x");
console_print(arr); // ["x", "x", "x", "x"]
```

`array_sort(array, ascending?)` Сортирует массив. Если `ascending` равно `false`, сортировка выполняется по убыванию.  
Поддерживаются числовые и строковые типы, при этом порядок сортировки стабильный. Смешанные типы сортируются по их тип-коду (`числа < строки < массивы`):
```beresta
let arr = [5, 2, 9];
console_print(array_sort(arr));        // [2, 5, 9]
console_print(array_sort(arr, false)); // [9, 5, 2]
```

`array_shuffle(array)` Перемешивает элементы массива в случайном порядке, используя равномерное распределение:
```beresta
let arr = [1, 2, 3, 4];
console_print(array_shuffle(arr)); // например, [3, 1, 4, 2]
```

---

## Примечания

- Массивы индексируются с нуля.  
- Элементы могут содержать любые допустимые типы, включая вложенные массивы.  
- Пустые массивы являются допустимыми значениями.  
- Сортировка и сравнение выполняются детерминированно и стабильно.  
- Сравнение массивов производится рекурсивно и по значению.

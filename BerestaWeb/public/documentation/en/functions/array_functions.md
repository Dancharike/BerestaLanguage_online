# Array Functions

BerestaLanguage includes a complete set of array manipulation functions.  
Arrays are dynamic — they can grow, shrink, and contain mixed value types (numbers, strings, arrays, etc.).  
All functions create new arrays rather than mutating the original unless otherwise noted.

---

## Descriptions

`array_is_array(value)` Returns `true` if the given value is an array, otherwise `false`:
```beresta
console_print(array_is_array([1, 2, 3])); // true
console_print(array_is_array(42));        // false
```

`array_length(array)` Returns the number of elements in the array:
```beresta
console_print(array_length([1, 2, 3])); // 3
```

`array_get(array, index)` Returns the element at the specified `index` (0-based):
```beresta
let arr = [10, 20, 30];
console_print(array_get(arr, 1)); // 20
```

`array_set(array, index, value)` Sets `array[index]` to value. If the index is beyond the array’s current size, the array is resized and filled with empty values up to that index:
```beresta
let arr = [1, 2];
arr = array_set(arr, 4, 99);
console_print(arr); // [1, 2, null, null, 99]
```

`array_push(array, value)` Appends `value` to the end of the array:
```beresta
let arr = [1, 2];
arr = array_push(arr, 3);
console_print(arr); // [1, 2, 3]
```

`array_last(array)` Returns the last element of the array:
```beresta
console_print(array_last([5, 10, 15])); // 15
```

`array_pop(array)` Removes the last element and returns the shortened array:
```beresta
let arr = [1, 2, 3];
arr = array_pop(arr); // [1, 2]
```

`array_insert(array, index, value)` Inserts `value` at position `index`:
```beresta
let arr = [1, 2, 3];
arr = array_insert(arr, 1, 99);
console_print(arr); // [1, 99, 2, 3]
```

`array_delete(array, index)` Removes the element at position `index`:
```beresta
let arr = [10, 20, 30];
arr = array_delete(arr, 1);
console_print(arr); // [10, 30]
```

`array_slice(array, start, count?)` Returns a portion of the array starting at `start`:
```beresta
let arr = [1, 2, 3, 4, 5];
console_print(array_slice(arr, 2));    // [3, 4, 5]
console_print(array_slice(arr, 1, 2)); // [2, 3]
```

`array_concat(a, b)` Combines two arrays into a new one:
```beresta
let a = [1, 2];
let b = [3, 4];
console_print(array_concat(a, b)); // [1, 2, 3, 4]
```

`array_reverse(array)` Reverses the order of elements:
```beresta
console_print(array_reverse([1, 2, 3])); // [3, 2, 1]
```

`array_index_of(array, value)` Returns the first index where `value` occurs, or `-1` if not found:
```beresta
let arr = [10, 20, 30];
console_print(array_index_of(arr, 20)); // 1
console_print(array_index_of(arr, 99)); // -1
```

`array_contains(array, value)` Returns true if `value` is present, otherwise `false`:
```beresta
console_print(array_contains([1, 2, 3], 2)); // true
```

`array_join(array, separator?)` Concatenates all elements into a string, separated by `separator` (default: `","`):
```beresta
console_print(array_join(["a", "b", "c"], "-")); // "a-b-c"
```

`array_resize(array, new_size, fill_value?)` Changes the array’s size. If `new_size` is larger, fills new elements with `fill_value` or null:
```beresta
let arr = [1, 2];
arr = array_resize(arr, 5, 0);
console_print(arr); // [1, 2, 0, 0, 0]
```

`array_fill(length, value)` Creates a new array filled with `value`, repeated `length` times:
```beresta
let arr = array_fill(4, "x");
console_print(arr); // ["x", "x", "x", "x"]
```

`array_sort(array, ascending?)` Sorts the array. If `ascending` is `false`, sorts in descending order. Sorting works for numeric and string types, using stable order. Mixed types are sorted by their type code (numbers < strings < arrays):
```beresta
let arr = [5, 2, 9];
console_print(array_sort(arr));        // [2, 5, 9]
console_print(array_sort(arr, false)); // [9, 5, 2]
```

`array_shuffle(array)` Randomly reorders elements of the `array` using a uniform distribution:
```beresta
let arr = [1, 2, 3, 4];
console_print(array_shuffle(arr)); // e.g. [3, 1, 4, 2]
```

---

## Notes

- Arrays are 0-indexed.
- Elements can contain any valid type, including nested arrays.
- Empty arrays are valid values.
- Sorting and comparison are deterministic and stable.
- Array equality is deep and recursive.
---
tags:
  - DataStructure
  - Arrays
Date: 2024-08-09
Topics:
  - Array Basics
Category: array
---

# Array
An array is a data structure that *stores a collection of elements, typically of the same data type, in a contiguous block of memory*. 
Each element in an array can be accessed using an index, which is usually an integer representing the element's position in the array. 
Arrays are commonly used in programming for tasks that involve storing and manipulating a fixed-size sequential collection of elements.

### Key Characteristics of Arrays:
1. **Fixed Size**: The size of an array is defined when it is created and cannot be changed.
2. **Same Data Type**: All elements in an array must be of the same data type (e.g., all integers, all floats, all strings).
3. **Indexed Access**: Elements are accessed using an index, with the first element typically having an index of 0.
4. **Contiguous Memory Allocation**: Elements are stored in contiguous memory locations, which allows for efficient access and manipulation.

### Example in Different Programming Languages:

- **Java**:
  ```java
  int[] myArray = {1, 2, 3, 4, 5};
  System.out.println(myArray[0]);  // Output: 1
  ```

- **C**:
  ```c
  int myArray[] = {1, 2, 3, 4, 5};
  printf("%d", myArray[0]);  // Output: 1
  ```

### Operations on Arrays:
1. **Accessing Elements**: Using the index to retrieve or modify an element.
2. **Iterating Over Elements**: Using loops to traverse the array.
3. **Searching**: Finding an element based on its value.
4. **Sorting**: Arranging elements in a specific order (e.g., ascending or descending).

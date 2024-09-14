---
Category: SpaceAndTime
---
# Time Complexity Questions
1. What is the time complexity and space complexity of following code ?
```cpp
int a = 0, b = 0; 
for (i = 0; i < N; i++) { 
    for (j = 0; j < N; j++) { 
        a = a + j; 
    } 
} 
for (k = 0; k < N; k++) { 
    b = b + k; 
}
```

#### Answer
Time: `O(N*N)`
Space: `O(1)`

---
2. Let's analyze the time and space complexity of the given code:
### Code Analysis

```cpp
int a = 0;
for (i = 0; i < N; i++) {
    for (j = N; j > i; j--) {
        a = a + i + j;
    }
}
```

### Time Complexity

1. **Outer Loop**: The outer loop runs from `i = 0` to `i < N`. This means it iterates `N` times.

2. **Inner Loop**: The inner loop runs from `j = N` to `j > i`. On each iteration of the outer loop, the inner loop runs `N - i` times.

   - When `i = 0`, the inner loop runs `N` times.
   - When `i = 1`, the inner loop runs `N - 1` times.
   - ...
   - When `i = N-1`, the inner loop runs `1` time.

   So the total number of iterations for the inner loop across all iterations of `i` can be calculated as:

   $$
   \text{Total Iterations} = N + (N-1) + (N-2) + \dots + 1 = \frac{N \times (N + 1)}{2} = \frac{N^2 + N}{2}
   $$

   Therefore, the time complexity is $O(N^2)$.

### Space Complexity
- **Variable Storage**: The only variable used in the code is `a`, which is a simple integer. The space required to store `a` is constant.
- **Loop Variables**: The loop variables `i` and `j` are also simple integers and take constant space.
Since the space required does not depend on the input size `N`, the space complexity is $O(1)$ .

### Summary

- **Time Complexity**: $O(N^2)$
- **Space Complexity**: $O(1)$
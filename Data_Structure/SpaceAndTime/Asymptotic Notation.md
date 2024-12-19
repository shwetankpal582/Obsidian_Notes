---
tags:
  - DataStructure
  - TimeComplexity
Date: 2024-09-01
Topics:
  - Big O
  - Omega
  - Big Theta notation
Category: SpaceAndTime
---

# What is asymptotic Notation?
- $ Asymptotic Notation is used to describe the running time of an algorithm - how much time an algorithm takes with a given input, n.
- $ Asymptotic notations are mathematical notations which are used to describe the running time of an algorithm when input tends towards infinity.
### Types of Notation:

**1. Big-O notation**: The Big-O notation describes the worst-case running time of an algorithm. It is computed by counting the number of operations it will take in the worst-case scenario with the input ‘n’.

```plaintext
O(g(n)) = { f(n): there exist positive constants c and n0
           such that 0 ≤ f(n) ≤ cg(n) for all n ≥ n0 }
```
![[Pasted image 20241215202935.png]]
**2. Big Omega() notation**: The notation describes the best running time of an algorithm. It is computed by counting the number of operations it will take in the best-case scenario with the input ‘n’.

```plaintext
Ω(g(n)) = { f(n): there exist positive constants c and n0 
           such that 0 ≤ cg(n) ≤ f(n) for all n ≥ n0 }
```

**3. Big Theta() Notation**: The theta notation encloses the function from above and below, therefore it defines the exact asymptotic behaviour. The notation is used for analyzing the average runtime of an algorithm.

```plaintext
Θ(g(n)) = { f(n): there exist positive constants c1, c2 and n0
           such that 0 ≤ c1g(n) ≤ f(n) ≤ c2g(n) for all n ≥ n0 }
```

It’s important to note here that O, and are not functions. For example, O(n) represents the class of all functions that grow at most as quickly as the linear function f(n)=n.

*Big-O notations give us a convenient way to talk about upper bounds.* For example, we can say the time complexity of the algorithm is $O(n^3)$ ( i.e. T(n)  $O(n^3)$ ), which means that the running time of the algorithm is at most cubic.

Another point to note here is that running time and time complexity are two different things, for example, if the running time of an algorithm is the following $T(n)= 3*n^2 + 4*n + 2$, the time complexity would be $O(n^2)$. 

#### Types of Time Complexity

**Some Common Algorithmic Runtimes. (from fastest to slowest)**
![[Pasted image 20241215203655.png]]

|             |                             |                                                                       |
| ----------- | --------------------------- | --------------------------------------------------------------------- |
| $O(1)$      | Constant Time Complexity    | Example: Sum of two numbers.                                          |
| $O(logn)$   | Logarithmic Time Complexity | Example: Finding an element in a sorted array by using binary search. |
| $O(n)$      | Linear Time Complexity      | Example: Finding the sum of an array of size n.                       |
| $O(n logn)$ | Log-Linear Time Complexity  | Example: Sorting the array using merge sort.                          |
| $O(n2)$     | Quadratic Time Complexity   | Example: Finding the sum of every pair of elements in an array.       |
| $O(2n)$     | Exponential Time Complexity | Example: Finding all the subsets.                                     |
| $O(n!)$<br> | Factorial Time Complexity   | Example: Finding all the permutations of a given array.               |


![[Pasted image 20241215202729.png]]




## Common data Structure Operations
|Data Structure|Time Complexity|   |   |   |   |   |   |   |Space Complexity|
|---|---|---|---|---|---|---|---|---|---|
||Average|   |   |   |Worst|   |   |   |Worst|
||Access|Search|Insertion|Deletion|Access|Search|Insertion|Deletion||
|[Array](http://en.wikipedia.org/wiki/Array_data_structure)|`Θ(1)`|`Θ(n)`|`Θ(n)`|`Θ(n)`|`O(1)`|`O(n)`|`O(n)`|`O(n)`|`O(n)`|
|[Stack](http://en.wikipedia.org/wiki/Stack_(abstract_data_type))|`Θ(n)`|`Θ(n)`|`Θ(1)`|`Θ(1)`|`O(n)`|`O(n)`|`O(1)`|`O(1)`|`O(n)`|
|[Queue](http://en.wikipedia.org/wiki/Queue_(abstract_data_type))|`Θ(n)`|`Θ(n)`|`Θ(1)`|`Θ(1)`|`O(n)`|`O(n)`|`O(1)`|`O(1)`|`O(n)`|
|[Singly-Linked List](http://en.wikipedia.org/wiki/Singly_linked_list#Singly_linked_lists)|`Θ(n)`|`Θ(n)`|`Θ(1)`|`Θ(1)`|`O(n)`|`O(n)`|`O(1)`|`O(1)`|`O(n)`|
|[Doubly-Linked List](http://en.wikipedia.org/wiki/Doubly_linked_list)|`Θ(n)`|`Θ(n)`|`Θ(1)`|`Θ(1)`|`O(n)`|`O(n)`|`O(1)`|`O(1)`|`O(n)`|
|[Skip List](http://en.wikipedia.org/wiki/Skip_list)|`Θ(log(n))`|`Θ(log(n))`|`Θ(log(n))`|`Θ(log(n))`|`O(n)`|`O(n)`|`O(n)`|`O(n)`|`O(n log(n))`|
|[Hash Table](http://en.wikipedia.org/wiki/Hash_table)|`N/A`|`Θ(1)`|`Θ(1)`|`Θ(1)`|`N/A`|`O(n)`|`O(n)`|`O(n)`|`O(n)`|
|[Binary Search Tree](http://en.wikipedia.org/wiki/Binary_search_tree)|`Θ(log(n))`|`Θ(log(n))`|`Θ(log(n))`|`Θ(log(n))`|`O(n)`|`O(n)`|`O(n)`|`O(n)`|`O(n)`|
|[Cartesian Tree](https://en.wikipedia.org/wiki/Cartesian_tree)|`N/A`|`Θ(log(n))`|`Θ(log(n))`|`Θ(log(n))`|`N/A`|`O(n)`|`O(n)`|`O(n)`|`O(n)`|
|[B-Tree](http://en.wikipedia.org/wiki/B_tree)|`Θ(log(n))`|`Θ(log(n))`|`Θ(log(n))`|`Θ(log(n))`|`O(log(n))`|`O(log(n))`|`O(log(n))`|`O(log(n))`|`O(n)`|
|[Red-Black Tree](http://en.wikipedia.org/wiki/Red-black_tree)|`Θ(log(n))`|`Θ(log(n))`|`Θ(log(n))`|`Θ(log(n))`|`O(log(n))`|`O(log(n))`|`O(log(n))`|`O(log(n))`|`O(n)`|
|[Splay Tree](https://en.wikipedia.org/wiki/Splay_tree)|`N/A`|`Θ(log(n))`|`Θ(log(n))`|`Θ(log(n))`|`N/A`|`O(log(n))`|`O(log(n))`|`O(log(n))`|`O(n)`|
|[AVL Tree](http://en.wikipedia.org/wiki/AVL_tree)|`Θ(log(n))`|`Θ(log(n))`|`Θ(log(n))`|`Θ(log(n))`|`O(log(n))`|`O(log(n))`|`O(log(n))`|`O(log(n))`|`O(n)`|
|[KD Tree](http://en.wikipedia.org/wiki/K-d_tree)|`Θ(log(n))`|`Θ(log(n))`|`Θ(log(n))`|`Θ(log(n))`|`O(n)`|`O(n)`|`O(n)`|`O(n)`|`O(n)`|
## Array Sorting Algorithms

| Algorithm                                                                                                        | Time Complexity |                  |                  | Space Complexity |
| ---------------------------------------------------------------------------------------------------------------- | --------------- | ---------------- | ---------------- | ---------------- |
|                                                                                                                  | Best            | Average          | Worst            | Worst            |
| [Quicksort](http://en.wikipedia.org/wiki/Quicksort)                                                              | `Ω(n log(n))`   | `Θ(n log(n))`    | `O(n^2)`         | `O(log(n))`      |
| [Mergesort](http://en.wikipedia.org/wiki/Merge_sort)                                                             | `Ω(n log(n))`   | `Θ(n log(n))`    | `O(n log(n))`    | `O(n)`           |
| [Timsort](http://en.wikipedia.org/wiki/Timsort)                                                                  | `Ω(n)`          | `Θ(n log(n))`    | `O(n log(n))`    | `O(n)`           |
| [Heapsort](http://en.wikipedia.org/wiki/Heapsort)                                                                | `Ω(n log(n))`   | `Θ(n log(n))`    | `O(n log(n))`    | `O(1)`           |
| [Bubble Sort](http://en.wikipedia.org/wiki/Bubble_sort)                                                          | `Ω(n)`          | `Θ(n^2)`         | `O(n^2)`         | `O(1)`           |
| [Insertion Sort](http://en.wikipedia.org/wiki/Insertion_sort)                                                    | `Ω(n)`          | `Θ(n^2)`         | `O(n^2)`         | `O(1)`           |
| [Selection Sort](http://en.wikipedia.org/wiki/Selection_sort)                                                    | `Ω(n^2)`        | `Θ(n^2)`         | `O(n^2)`         | `O(1)`           |
| [Tree Sort](https://en.wikipedia.org/wiki/Tree_sort)                                                             | `Ω(n log(n))`   | `Θ(n log(n))`    | `O(n^2)`         | `O(n)`           |
| [Shell Sort](http://en.wikipedia.org/wiki/Shellsort)                                                             | `Ω(n log(n))`   | `Θ(n(log(n))^2)` | `O(n(log(n))^2)` | `O(1)`           |
| [Bucket Sort](http://en.wikipedia.org/wiki/Bucket_sort "Only for integers. k is a number of buckets")            | `Ω(n+k)`        | `Θ(n+k)`         | `O(n^2)`         | `O(n)`           |
| [Radix Sort](http://en.wikipedia.org/wiki/Radix_sort "Constant number of digits 'k'")                            | `Ω(nk)`         | `Θ(nk)`          | `O(nk)`          | `O(n+k)`         |
| [Counting Sort](https://en.wikipedia.org/wiki/Counting_sort "Difference between maximum and minimum number 'k'") | `Ω(n+k)`        | `Θ(n+k)`         | `O(n+k)`         | `O(k)`           |
| [Cubesort](https://en.wikipedia.org/wiki/Cubesort)                                                               | `Ω(n)`          | `Θ(n log(n))`    | `O(n log(n))`    | `O(n)`           |
## BigO complexity Chart
![bigO comlexity chart](https://paper-attachments.dropbox.com/s_2D428973624E7FC84C7D69D11421DE762BEA6B6F3361231FCDCAE0425D14526F_1664885448372_Untitled.drawio+17.png)


#### Example
![[Pasted image 20241219105141.png|700]]

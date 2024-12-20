---
tags:
  - DataStructure
  - Recursion
Date: 2024 - 12 - 20
Topics:
  - Recursion Visualization
Subject: Data Structure
---
# Visualize Recursion 
To visualize recursion tree, we can do two things
1. **Recursion Tree:**
	- Recursion is a fundamental concept in computer science and mathematics that allows functions to call themselves, enabling the solution of complex problems through iterative steps. One visual representation commonly used to understand and analyze the execution of recursive functions is a recursion tree.
	- A recursion tree is a graphical representation that illustrates the execution flow of a recursive function. It provides a visual breakdown of recursive calls, showcasing the progression of the algorithm as it branches out and eventually reaches a base case. The tree structure helps in analyzing the time complexity and understanding the recursive process involved.

## Solve Questions on Recursion tree method:
### Problem - 1
Consider the recurrence relation: $T(n) = 2T(n/2) + n$ 
We have to first understand what does the given relation implies. 

So, from the above relation, you can deduce that -
- A size n is divided into two subproblems, each of size $n/2$.
- It takes $O(n)$ time extra to compute $T(n)$ finally.
We can draw the recursion tree as -
![recrusion-tree-method|500](https://files.codingninjas.in/article_images/recursion-tree-method-0-1644059773.webp)
**The total number of levels in the tree is:**
- Base case occurs when the problem size reaches 1.
So, let's see at which level the size of the subproblem becomes 1

**The size of the subproblems at different levels are:**
- Level 0 - $n = n/2^0$
- Level 1 - $n/2 = n/2^1$
- Level 2 - $n/4 = n/2^2$
- Level i - $n/2^i$

Let the level at which the size of the subproblem becomes 1 is y. 

Then, 

```plaintext
n/2y = 1 
n = 2y
Taking log base 2 both sides
log2(n) = y
```

So, total number of levels is $y+1 = log2(n) + 1$.

**Number of nodes in each level are:**

- Level 0 - 1 = 20
- Level 1 - 2 = 21
- Level 2 - 4 = 22
- Level i - 2i 

So, number of nodes at the last level is $2^{(levelnumber)} = 2^{(log2(n))} = n$

Hence the cost of the last level is = Number of nodes x Cost of each node, which is $n \times{T(n)} = O(n)$.

The cost of all the levels are - 

- Level 0 - n
- Level 1 - $n/2 + n/2 = n$ (As there are two subproblems each of size n/2)
- Level 2 - $n/4 + n/4 + n/4 + n/4 = n$
- and so on…

Summing up we get the total cost as - 

```plaintext
=> (n+ n+ n+...n) + Cost of the last level
=> nxlog2(n) + O(n)
=> O(nlog2(n))
```

### Recursion Stack call
![[Pasted image 20241220111303.png|700]]
Recursion call stack works on the principle of **Last in first Out**. 
**Example:**
Let’s consider the above example and understand the memory management of `nSum(5)` function.

**Step 1:** When `nSum()` is called from the `main()` function with 5 as an argument, **a stack frame for `nSum(5)`** is created.

![call stack at step 1](https://media.geeksforgeeks.org/wp-content/uploads/20230626150724/recursion-step-1.png)


**Step 2:** While executing `nSum(5)`, a **recursive call** is encountered as **`nSum(4)`**. The compiler will now create a new stack frame on top of the **nSum(5)**’s stack frame and maintain an instruction pointer at the statement where `nSum(4)` was encountered.

![call stack at step 2](https://media.geeksforgeeks.org/wp-content/uploads/20230626150946/call-stack-recursion-step-2.png)



**Step 3:** The execution of `nSum(4)` will start, but just like the previous function, we encounter another recursive call as `nSum(3)`. The compiler will again follow the same steps and maintain another instruction pointer and stack frame for `nSum(3)`.

![call stack at step 3](https://media.geeksforgeeks.org/wp-content/uploads/20230626151054/call-stack-recursion-step-3.png)



**Step 4:** The same thing will happen with `nSum(3)`, `nSum(2)`, and `nSum(1)`’s execution.

**Step 5:** But when the control comes to `nSum(0)`, the condition `(n == 0)` becomes true and the statement **return 0** is executed.

![call stack at step 5](https://media.geeksforgeeks.org/wp-content/uploads/20230626151215/call-stack-recursion-step-5.png)



**Step 6:** As the value is returned by the `nSum(0)`, the stack frame for the `nSum(0)` will be destroyed, and using the instruction pointer, the program control will return to the `nSum(1)` function and the `nSum(0)` call will be replaced by value 0.

![call stack at step 6](https://media.geeksforgeeks.org/wp-content/uploads/20230626154457/call-stack-recursion-step-6.png)



**Step 7:** Now, in `nSum(1)`, the expression **`int res = 1 + 0`** will be evaluated and the statement **`return res`** will be executed. The program control will move to the `nSum(2)` using its instruction pointer.

![call stack at step 7](https://media.geeksforgeeks.org/wp-content/uploads/20230626154544/call-stack-recursion-step-7.png)



**Step 8:** In `nSum(2)`, `nSum(1)` call will be replaced by the value it returned, which is 1. So, after evaluating **`int res = 2 + 1, 3`** will be returned to `nSum(3)`. Same thing will keep happening till the control comes to the `nSum(5)` again.

![call stack at step 8](https://media.geeksforgeeks.org/wp-content/uploads/20230626154621/call-stack-recursion-step-8.png)



**Step 9:** When the control reaches the `nSum(5)`, the expression **`int res = 5 + nSum(4)`** will look like `int res = 5 + 10`. Finally, this value will be returned to the `main()` function and the execution of `nSum()` function will stop.

![call stack at step 9](https://media.geeksforgeeks.org/wp-content/uploads/20230626152408/call-stack-recursion-step-9.png)


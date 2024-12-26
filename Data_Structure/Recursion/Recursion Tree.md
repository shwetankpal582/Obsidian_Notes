---
tags:
  - DataStructure
  - Recursion
Date: 2024 - 12 - 26
Topics:
  - recursion tree
  - Solve Recursion Question with tree
Subject: Data Structure
Code:
---
# What is recursion tree ?
A recursion tree is a graphical representation that illustrates the execution flow of a recursive function.
It provides a visual breakdown of recursive calls, showcasing the progression of the algorithm as it branches out and eventually reaches a base case. 
The tree structure helps in analyzing the time complexity and understanding the recursive process involved.

### Tree structure
Each node in a recursion tree represents a particular recursive call. 
The initial call is depicted at the top, with subsequent calls branching out beneath it.
*The tree grows downward, forming a hierarchical structure.* The branching *factor of each node depends on the number of recursive calls made* within the function. Additionally, *the depth of the tree corresponds to the number of recursive calls* before reaching the base case.
### Some important terminology:
- **Base case** : The base serves as the termination condition for recursive function. It defines the point at which the recursion stops and the functions starts returning values.
- **Recursive Call:** The child nodes in a recursion tree represent the recursive calls made within the function. Each child node corresponds to a separate recursive call, resulting in the creation of new sub problems.
- **Execution Flow:** Traversing a recursion tree provides insights into the execution flow of a recursive function. Starting from initial call at the root node, we follow the branches to reach subsequent calls until we encounter the base case.
---

# Solving Question
**Problem :** Solve the following recurrence relation using recursion tree method: -
$$T(n) = 2T(n/2) + n$$
**Solution**
The given recurrence relation shows-

- A problem of size n will get divided into 2 sub-problems of size $n/2$.
- Then, each sub-problem of size $n/2$ will get divided into 2 sub-problems of size n/4 and so on.
- At the bottom most layer, the size of sub-problems will reduce to 1.
This is illustrated through following recursion tree : -
![recursion_tree|500](https://www.gatevidyalay.com/wp-content/uploads/2018/06/Recursion-Tree-Method-for-solving-recurrences.png?ezimgfmt=ng:webp/ngcb1)

The given recurrence relation shows-
- The cost of dividing a problem of size n into its 2 sub-problems and then combining its solution is n.
- The cost of dividing a problem of size n/2 into its 2 sub-problems and then combining its solution is n/2 and so on.
This is illustrated through following recursion tree where each node represents the cost of the corresponding sub-problem
![recursion_cost_node|500](https://www.gatevidyalay.com/wp-content/uploads/2018/06/Recursion-Tree-Step-01.png?ezimgfmt=ng:webp/ngcb1)

---
tags:
  - DP
  - DataStructure
Date: 2025 - 01 - 15
Topics:
  - Dynamic Programming intro
  - Approach of DP
  - Types of Approach
Subject: Data Structure
Code:
---
# What is Dynamic Programming?
Dynamic programming is a technique that breaks the problems into sub-problems, and saves the result for future purposes so that we do not need to compute the result again.
The subproblems are optimized to optimize the overall solution is known as optimal substructure property.
*The main use of dynamic programming is to solve optimization problems.* Here, optimization problems mean that when we are trying *to find out the minimum or the maximum solution of a problem.* The dynamic programming guarantees to find the optimal solution of a problem if the solution exists.
<iframe width="560" height="315" src="https://www.youtube.com/embed/oNoILrFOx2k?si=H_tCvTzR7TJlqpAO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
#### Example to understand:
The following series is the Fibonacci series:
$0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ,…$
The numbers in the above series are not randomly calculated. Mathematically, we could write each of the terms using the below formula:
$$F(n) = F(n-1) + F(n-2)$$
With the base values $F(0) = 0$, and $F(1) = 1$. To calculate the other numbers, we follow the above relationship. For example, F(2) is the sum **f(0)** and **f(1),** which is equal to 1.

### Then how do we calculate f(20)
![fibonaci_series|500](https://images.javatpoint.com/tutorial/daa/images/dynamic-programming.png)

> [!url] Understand from here
> <iframe width="560" height="315" src="https://www.youtube.com/embed/YkBch12jNE0?si=1-A3mPHVXT8KyLlL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Approach of Dynamic Programming:-
The following are the steps that the dynamic programming follows:
- It breaks down the complex problem into simpler subproblems.
- It finds the optimal solution to these sub-problems.
- It stores the results of subproblems (memoization). The process of storing the results of subproblems is known as memorization.
- It reuses them so that same sub-problem is calculated more than once.
- Finally, calculate the result of the complex problem.


## Types of Approach of DP:-
1. **Top-down Approach(memoization)**
2. **Bottom-up Approach(Tabulation)**

### Small difference between Memoization and Tabulation:-

|                        | Tabulation                                                                                                                                                           | Memoization                                                                                                                                                                   |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **State**              | State transition relation is difficult to think                                                                                                                      | State Transition relation is easy to think                                                                                                                                    |
| **Code**               | Code gets complicated when a lot of   <br>conditions are required                                                                                                    | Code is easy to write by modifying the underlying recursive solution.                                                                                                         |
| **Speed**              | Fast, as we do not have recursion call overhead.                                                                                                                     | Slow due to a lot of recursive calls.                                                                                                                                         |
| **Subproblem solving** | If all subproblems must be solved at least once, a bottom-up dynamic programming algorithm definitely outperforms a top-down memoized algorithm by a constant factor | If some subproblems in the subproblem space need not be solved at all, the memoized solution has the advantage of solving only those subproblems that are definitely required |
| **Table entries**      | In the Tabulated version, starting from the first entry, all entries are filled one by one                                                                           | Unlike the Tabulated version, all entries of the lookup table are not necessarily filled in Memoized version. The table is filled on demand.                                  |


#### Why writing the recursive solution helps in coming up with bottom-up solution?
**Understanding the subproblem:** 
- Recursive solution inherently break down problem into smaller subproblem. By writing a recursive solution, you gain a clear understanding of what these subproblems are, which is essential for any dynamic programming approach.
**Transition formula**
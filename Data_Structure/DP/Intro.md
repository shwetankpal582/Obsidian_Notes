---
tags:
  - DP
  - DataStructure
Date: 2025 - 01 - 15
Topics:
  - Dynamic Programming intro
Subject: Data Structure
Code:
---
# What is Dynamic Programming?
Dynamic programming is a technique that breaks the problems into sub-problems, and saves the result for future purposes so that we do not need to compute the result again.
The subproblems are optimized to optimize the overall solution is known as optimal substructure property.
*The main use of dynamic programming is to solve optimization problems.* Here, optimization problems mean that when we are trying *to find out the minimum or the maximum solution of a problem.* The dynamic programming guarantees to find the optimal solution of a problem if the solution exists.

#### Example to understand:
The following series is the Fibonacci series:
$0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ,…$
The numbers in the above series are not randomly calculated. Mathematically, we could write each of the terms using the below formula:
$F(n) = F(n-1) + F(n-2)$
With the base values $F(0) = 0$, and $F(1) = 1$. To calculate the other numbers, we follow the above relationship. For example, F(2) is the sum **f(0)** and **f(1),** which is equal to 1.
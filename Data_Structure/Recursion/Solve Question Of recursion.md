---
tags:
  - Recursion
  - DataStructure
Date: 2024 - 12 - 26
Topic:
  - solve question of recursions
Subject: Data Structure
Code:
---
![[Recursion Tree#Solving Question]]

### Determine Total number of Levels in the recursion tree
- Size of sub-problem at level-0 = $n/2^0$
- Size of sub-problem at level-1 = $n/2^1$
- Size of sub-problem at level-2 = $n/2^2$

Continuing in similar manner, we have-
$$SizeOfSub-problem At Level-i = n/2^i$$

Suppose at level-x (last level), size of sub-problem becomes 1. Then-
$$n/2^x=1$$
$$2^x=n$$

Taking log on both sides, we get-

$$xlog2 = logn$$

$$x = log_2n$$

∴ Total number of levels in the recursion tree = $log_2n + 1$


> [!url] More content from here ....
> https://www.gatevidyalay.com/recursion-tree-solving-recurrence-relations/

---
tags:
  - DataStructure
  - spaceComplexity
Date: 2024 - 12 - 18
Topics:
  - space complexity definitation
Subject: Data Structure
---
# What is Space complexity?
- Problem-solving using computer requires memory to hold temporary data or final result while the program is in execution. 
- The amount of memory required by the algorithm to solve given problem is called **space complexity** of the algorithm.
- The space complexity of an algorithm quantifies the amount of space taken by an algorithm to run as a function of the length of the input.

**To know about memory requirement, focus on two parts:-**
1. **A fixed Part**: It is the independent of the input size. It includes memory of instructions, constants, variables, etc.
2. **A variable part:** it is the dependent of the input size. It includes memory for recursion stack, reference variable,etc.

**Example : Addition of two scalar variables**
```plaintext
Algorithm ADD SCALAR(A, B)  
//Description: Perform arithmetic addition of two numbers  
//Input: Two scalar variables A and B  
//Output: variable C, which holds the addition of A and B  
C <— A+B  
return C
```

The addition of two scalar numbers requires one extra memory location to hold the result. Thus the space complexity of this algorithm is constant, hence S(n) = O(1).

#### It also uses Big(O) notation:

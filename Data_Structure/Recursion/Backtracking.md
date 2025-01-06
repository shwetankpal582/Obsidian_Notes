---
tags:
  - backtracking
  - DataStructure
Date: 2025 - 01 - 05
Topic:
  - backtracking
  - Backtracking Vs Recursion
Subject: Data Structure
Code:
---
# What is Backtracking?
Backtracking is a problem-solving algorithmic technique that involves finding a solution incrementally by trying **different options** and **unbdoing** them if they lead to a **dead end**. It is commonly used in situations where you need to explore multiple possibilities to solve a problem, like searching for a path in a maze or solving puzzles like Sudoku.
Backtracking can be defined as a general algorithmic technique that considers searching every possible combination in order to solve a computational problem.
### Basic Terminologies

- **Candidate:** A candidate is a potential choice or element that can be added to the current solution.
- **Solution:** The solution is a valid and complete configuration that satisfies all problem constraints.
- **Partial Solution:** A partial solution is an intermediate or incomplete configuration being constructed during the backtracking process.
- **Decision Space:** The decision space is the set of all possible candidates or choices at each decision point.
- **Decision Point:** A decision point is a specific step in the algorithm where a candidate is chosen and added to the partial solution.
- **Feasible Solution:** A feasible solution is a partial or complete solution that adheres to all constraints.
- **Dead End:** A dead end occurs when a partial solution cannot be extended without violating constraints.
- **Backtrack:** Backtracking involves undoing previous decisions and returning to a prior decision point.
- **Search Space:** The search space includes all possible combinations of candidates and choices.
- **Optimal Solution:** In optimization problems, the optimal solution is the best possible solution.

#### Example :

> [!example] How it works?
> As we know *backtracking algorithm explores each and every possible path in order to find a valid solution*, this exploration of path can be easily understood via given images:
> ![backtracking_example|600](https://media.geeksforgeeks.org/wp-content/uploads/20231010124142/backtracking.png)
> As shown in the image, “**IS** represents the **Initial State** where the recursion call starts to find a valid solution.  
> **C :** it represents different **Checkpoints** for recursive calls
> 
> **TN**: it represents the **Terminal Nodes** where no further recursive calls can be made, these nodes act as base case of recursion and we determine whether the current solution is valid or not at this state.
> 
> At each Checkpoint, our program makes some decisions and move to other checkpoints until it reaches a terminal Node, after determining whether a solution is valid or not, the program starts to revert back to the checkpoints and try to explore other paths. For example in the above image **TN1…TN5** are the terminal node where the solution is not acceptable, while **TN6** is the state where we found a valid solution.
> 
> The back arrows in the images shows backtracking in actions, where we revert the changes made by some checkpoint.

## How Backtracking is different from Recursion?

| Recursion                                                                                                                                           | Backtracking                                                                                                                                |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Recursion does not always need backtracking                                                                                                         | Backtracking always uses recursion to solve problems                                                                                        |
| Solving problems by breaking them into smaller, similar subproblems and solving them recursively.                                                   | Solving problems with multiple choices and exploring options systematically, backtracking when needed.                                      |
| Controlled by function calls and call stack.                                                                                                        | Managed explicitly with loops and state.                                                                                                    |
| **Applications of Recursion:** Tree and Graph Traversal, Towers of Hanoi, Divide and Conquer Algorithms, Merge Sort, Quick Sort, and Binary Search. | **Application of Backtracking:** N Queen problem, Rat in a Maze problem, Knight’s Tour Problem, Sudoku solver, and Graph coloring problems. |

---
tags:
  - DataStructure
  - Recursion
Date: 2024 - 12 - 19
Topics:
  - How to use Recursion
Subject: Data Structure
---
## How to use Recursion really?
### Internet version
1. Define the base case(s)
   - Identify the simplest scenario that can be solved directly
   - This is where the recursion stops
   - Without this, you'll have infinite recursion

2. Define the recursive case
   - Break down the problem into a smaller subproblem
   - Ensure each recursive call moves towards the base case
   - Make the recursive function call with modified parameters

Let me demonstrate with a simple example - calculating a factorial:

```python
def factorial(n):
    # Step 1: Base case
    if n <= 1:
        return 1
    
    # Step 2: Recursive case
    # - Break down: n! = n * (n-1)!
    # - Moving towards base case by reducing n
    return n * factorial(n - 1)
```

For a more complex example, let's solve binary tree traversal:

```python
class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

def inorder_traversal(node):
    # Step 1: Base case
    if node is None:
        return []
    
    # Step 2: Recursive case
    # Break down: left subtree + current node + right subtree
    return (inorder_traversal(node.left) + 
            [node.value] + 
            inorder_traversal(node.right))
```

Common pitfalls to avoid:
- Missing base case
- Base case not stopping all recursive paths
- Recursive case not moving towards base case
- Too many recursive calls causing stack overflow

### Some random internet dude's version
![[Pasted image 20241219112054.png|700]]
In this version of "how to use recursion" we should follow the above steps:
1. **Understand the problem:**
	- If we have a question which says print `[3,2,1,1,2,3]` then understand statement of it.
	- Understand what pattern and constants its following
2. **Identify sub-problems:**
	- So from the above problem we can see the subproblems are `[2,1,1,2]` and then `[1,1]`. 
	- And after it reaches `[1,1]` the recall
3. **Trust/faith:**
	- You have to trust that this recursive call will correctly solve a smaller version of your problem.
	- You don't try to mentally simulate or "unroll" the recursion.
	- Instead, you assume that if your function works for simpler cases it will work for more complex ones.
4. **Link 1 and 2**(optional);
	- Check if the first part of the problem is give `[3,2,1]` then it should also give `[1,2,3]`.
5. **Base condition:**
	- To stop this recursion we need to set base condition where the recursion stops.
	- From the above example if we encounter 0 so just return because after we reach `[3,2,1]` we would reach 0 so instead of blocking it here, just return and move to next condition for `[1,2,3]` so that it forms `[3,2,1,1,2,3]` in the end.
	
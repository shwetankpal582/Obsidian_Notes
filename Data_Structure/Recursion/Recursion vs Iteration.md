---
tags:
  - Recursion
  - DataStructure
Date: 2024 - 12 - 20
Topics:
  - Recursion vs Iterations
Subject: Data Structure
---
# Recursion Vs Iteration
Any program that is done in recursion can also be done by iterations.
Lets see the difference between the recursion and iteration
```cpp
// C++ program to find factorial of given number
#include<bits/stdc++.h>
using namespace std;

// ----- Recursion -----
// method to find factorial of given number
int factorialUsingRecursion(int n)
{
	if (n == 0)
		return 1;

	// recursion call
	return n * factorialUsingRecursion(n - 1);
}

// ----- Iteration -----
// Method to find the factorial of a given number
int factorialUsingIteration(int n)
{
	int res = 1, i;

	// using iteration
	for (i = 2; i <= n; i++)
		res *= i;

	return res;
}

// Driver method
int main()
{
	int num = 5;
	cout << "Factorial of " << num << 
			" using Recursion is: " <<
			factorialUsingRecursion(5) << endl;

	cout << "Factorial of " << num <<
			" using Iteration is: " << 
			factorialUsingIteration(5);

	return 0;
}

// This code is contributed by mits
```
## Difference between Iteration and Recursion

**The following table lists the major differences between iteration and recursion:**

| Property                | Recursion                                                                                                                                                                                                                                | Iteration                                                                                                                                                                                                                             |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Definition**          | Function calls itself.                                                                                                                                                                                                                   | A set of instructions repeatedly executed.                                                                                                                                                                                            |
| **Application**         | For functions.                                                                                                                                                                                                                           | For loops.                                                                                                                                                                                                                            |
| **Termination**         | Through base case, where there will be no function call.                                                                                                                                                                                 | When the termination condition for the iterator ceases to be satisfied.                                                                                                                                                               |
| **Usage**               | Used when code size needs to be small, and time complexity is not an issue.                                                                                                                                                              | Used when time complexity needs to be balanced against an expanded code size.                                                                                                                                                         |
| **Code Size**           | Smaller code size                                                                                                                                                                                                                        | Larger Code Size.                                                                                                                                                                                                                     |
| **Time Complexity**     | Very high(generally exponential) time complexity.                                                                                                                                                                                        | Relatively lower time complexity(generally polynomial-logarithmic).                                                                                                                                                                   |
| **Space Complexity**    | The space complexity is higher than iterations.                                                                                                                                                                                          | Space complexity is lower.                                                                                                                                                                                                            |
| **Stack**               | Here the stack is used to store local variables when the function is called.                                                                                                                                                             | Stack is not used.                                                                                                                                                                                                                    |
| **Speed**               | Execution is slow since it has the overhead of maintaining and updating the stack.                                                                                                                                                       | Normally, it is faster than recursion as it doesn’t utilize the stack.                                                                                                                                                                |
| **Memory**              | Recursion uses more memory as compared to iteration.                                                                                                                                                                                     | Iteration uses less memory as compared to recursion.                                                                                                                                                                                  |
| **Overhead**            | Possesses overhead of repeated function calls.                                                                                                                                                                                           | No overhead as there are no function calls in iteration.                                                                                                                                                                              |
| **Infinite Repetition** | If the recursive function does not meet to a termination condition or the base case is not defined or is never reached then it leads to a stack overflow error and there is a chance that the an system may crash in infinite recursion. | If the control condition of the iteration statement never becomes false or the control variable does not reach the termination value, then it will cause infinite loop. On the infinite loop, it uses the CPU cycles again and again. |

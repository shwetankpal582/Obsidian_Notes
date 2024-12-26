---
tags:
  - DataStructure
  - Recursion
Date: 2024 - 12 - 26
Topics:
  - Steps to write base conditions in recursion
Subject: Data Structure
Code:
---
# Base conditions
### What is base condition in recursion ?
Base Case is defined as the condition in Recursive Function, which tells the function when to stop. It is the most important part of every Recursion, because if we fail to include this condition it will result in INFINITE RECURSIONS.

### Ways to write base condition in Recursion
1. **Last Valid Input**: 
- Let's understand with example: -
```cpp
// C++ code for the above approach:
#include <iostream>
using namespace std;
int fact(int n)
{
	// Recursive Call (will get
	// called infintely)
	return n * fact(n - 1);
	// base case (this wont get executed ever)
	if (n = 1)
		return 1;
}

// Drivers code
int main()
{
	int n = 5;
	// Function Call
	cout << fact(n) << endl;
	return 0;
}

```

In this example above of factorial we see condition `if (n = 1)` this is last valid input because it is the last reach of $5 \times 4 \times 3 \times 2 \times 1$ where *1 is last valid input to return the solution*

2. **First invalid Input**
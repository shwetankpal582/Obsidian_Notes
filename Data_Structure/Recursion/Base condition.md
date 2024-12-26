---
tags:
  - DataStructure
  - Recursion
Date: 2024 - 12 - 26
Topics:
  - Steps to write base conditions in recursion
  - recurrence relation
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

2. **First invalid Input** : It is unlike the last valid input, here we take a invalid input or breaking input in the begining, so if the condition satisfy's at the starting then return other wise go for it.

# Recurrence Relations
A **recurrence relation** is a mathematical expression that defines a sequence in terms of its previous terms. In the context of algorithmic analysis, it is often used to model the time complexity of recursive algorithms.
Express the solution of a problem as a function of solution to smaller instances of the same problem.

<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 469.6398468017578 126.19998168945312" width="469.6398468017578" height="126.19998168945312">
  <!-- svg-source:excalidraw -->
  
  <defs>
    <style class="style-fonts">
      @font-face { font-family: Excalifont; src: url(data:font/woff2;base64,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); }
    </style>
    
  </defs>
  <rect x="0" y="0" width="469.6398468017578" height="126.19998168945312" fill="#ffffff"></rect><g transform="translate(10 10) rotate(0 86.72993469238281 12.5)"><text x="0" y="17.619999999999997" font-family="Excalifont, Xiaolai, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">For factorial of n</text></g><g transform="translate(68 53.5999755859375) rotate(0 78.54994201660156 12.5)"><text x="0" y="17.619999999999997" font-family="Excalifont, Xiaolai, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">f(n) = n x f(n-1)</text></g><g stroke-linecap="round"><g transform="translate(274.2000732421875 108.4000244140625) rotate(0 -29.20001220703125 -15.600006103515625)"><path d="M0.22 0.95 C-7.02 0.27, -34 0.66, -43.65 -4.71 C-53.3 -10.09, -55.15 -26.83, -57.67 -31.32 M-1.13 0.41 C-8.48 -0.07, -34.92 1.53, -44.41 -3.55 C-53.9 -8.63, -55.67 -25.52, -58.06 -30.07" stroke="#1e1e1e" stroke-width="2" fill="none"></path></g><g transform="translate(274.2000732421875 108.4000244140625) rotate(0 -29.20001220703125 -15.600006103515625)"><path d="M-48.57 -17.95 C-49.98 -20.92, -54.81 -23.89, -58.06 -30.07 M-48.57 -17.95 C-51.27 -21.72, -54.12 -24.58, -58.06 -30.07" stroke="#1e1e1e" stroke-width="2" fill="none"></path></g><g transform="translate(274.2000732421875 108.4000244140625) rotate(0 -29.20001220703125 -15.600006103515625)"><path d="M-58.58 -14.69 C-57.13 -18.61, -59.12 -22.5, -58.06 -30.07 M-58.58 -14.69 C-58.37 -19.36, -58.32 -23.17, -58.06 -30.07" stroke="#1e1e1e" stroke-width="2" fill="none"></path></g></g><mask></mask><g transform="translate(280.79998779296875 91.19998168945312) rotate(0 89.41992950439453 12.5)"><text x="0" y="17.619999999999997" font-family="Excalifont, Xiaolai, Segoe UI Emoji" font-size="20px" fill="#1e1e1e" text-anchor="start" style="white-space: pre;" direction="ltr" dominant-baseline="alphabetic">recurrence relation</text></g></svg>
  
General form of recurrence relation is : 
$$a_{n}=f(a_{n-1}, a_{n-2},...,a_{n-k})$$
where f is a function that defines the relationship between the current term and the previous terms.
**Recurrence Relations** play a significant role in analyzing and optimizing the complexity of algorithms. Having a strong understanding of **Recurrence Relations** play a great role in developing the problem-solving skills of an individual. Some of the common uses of **Recurrence Relations** are:

- Time Complexity Analysis
- Generalizing Divide and Conquer Algorithms
- Analyzing Recursive Algorithms
- Defining State and Transitions for Dynamic Programming.

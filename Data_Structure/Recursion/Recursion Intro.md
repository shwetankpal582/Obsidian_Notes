---
tags:
  - Recursion
Date: 2024 - 09 - 14
Topic: Introduction to Recursion
Subject: 
Category: Recursion
---

# What is recursion?
**Recursion** is defined as a process which calls itself directly or indirectly and the corresponding function is called a recursive function.

**Example**: A simple example of recursion of *factorial of a number function*.
![Recursion|600](https://cdn-images-1.medium.com/max/1080/1*zhWjVsmIRrBoGClOINSIPQ.jpeg)


### Types of Recursion:

1. **Direct recursion:** When a function is called within itself directly it is called direct recursion. This can be further categorised into four types: 
    - Tail recursion,  
    - Head recursion,  
    - Tree recursion and 
    - Nested recursion.
2. **Indirect recursion:** Indirect recursion occurs when a function calls another function that eventually calls the original function and it forms a cycle.


---
## Code and Practical
**Problem: Print your Name N times using recursion**
```cpp
#include<bits/stdc++.h>
using namespace std;

void func(int i, int n){
   
   // Base Condition.
   if(i>n) return;
   cout<<"Raj"<<endl;

   // Function call to print till i increments.
   func(i+1,n);

}

int main(){
  // Here, let’s take the value of n to be 4.
  int n = 4;
  func(1,n);
  return 0;
}
```

**OUTPUT**
```text
Raj  
Raj  
Raj  
Raj
```

**Time Complexity:** $O(N)$
- Since the *function is being called n times*, and for each function, we have only one printable line that takes $O(1)$ time, so the cumulative time complexity would be $O(N)$ 
**Space Complexity:** $O(N)$
- In the worst case, *the recursion stack space would be full with all the function calls waiting to get completed* and that would make it an $O(N)$ recursion stack space
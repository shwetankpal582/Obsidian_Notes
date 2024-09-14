---
tags:
  - DataStructure
  - TimeComplexity
Date: 2024-09-01
Topics:
  - Introduction
  - Examples
Category: SpaceAndTime
---
## What is Time Complexity?
- @ The valid algorithm takes a finite amount of time for execution.
[[Asymptotic Notation]]
[[Calculating Time Complexity]]

### Example: 

#### Example 1: The following is the program for finding the highest power less than 2. Find its Time complexity.
```cpp
void f( int n )
{
    while( n != 0 )
    {
        n/=2;
    }
    
}
```
- $ _**Time Complexity:**_ The time complexity of the above program is O(log2n) . This is because at every step we divide n by 2 .


#### Example 2: The following is the program for finding all the subsets of a given set. Find its Time complexity.




#### Example: what is the time complexity of following code?

```cpp
        int a = 0, b = 0;    
        for (i = 0; i < N; i++) {
            a = a + rand();  
        }
        for (j = 0; j < M; j++) {
            b = b + rand();
        }
```

#### Answer :
Time: `O(N+M)`
Space: `O(1)`


> [!infromation] Check these too:-
[[TC Questions#Time Complexity Questions| Other Questions of Time Complexity...]]


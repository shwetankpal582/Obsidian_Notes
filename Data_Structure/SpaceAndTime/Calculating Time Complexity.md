---
tags:
  - DataStructure
Date: 2024-09-02
Topics:
  - Time Complexity calculatin
  - Rules of Calculation
Category: SpaceAndTime
---

## Some of the general rules for calculating time complexity

### 1. Rule
- **Drop constant multipliers**
	- Eg:
		Given $T(n) = 3n^3$ , find worst case running time Using the above rule, we can drop the constant term. 
		*Worst case running time* = $O(n^3)$
### 2. Rule
- **Drop lower order terms**
	- Eg:
		Given $T(n) = 3n^2 + 2nlogn + 5n+4$ , find worst case running time.
		We know that $3n^2$ is the highest order term. Therefore we can drop the rest of the terms .
		*Worst case running time* = $O(3n^2)$
		We can further reduce this using rule 1.
		∴ Worst case running time = $O(n2 )$
### 3. Running time of a program = Running time of all fragments
Eg : Calculate the running time of the following program:
```cpp
for (int i=0;i<n;i++)
{
    int a=5;
    a++;
}


for (int i=0;i<n;i++)
{
   for(int j=0;j<n;j++)
   {
   int b=5;
   b++;
   }
}
```
- $ **count number of simple operations**
First of all we can break the program into 2 fragments. *The first fragment is the first loop and the second fragment is the second loop (nested loop). Our final answer would be the sum of both fragments.*
As we know running time for simple statements like *declaration, assignment, arithmetic/logical operations is O(1).*
Therefore the time complexity of the first fragment would be $O(n)$, as the loop would run n times, the time complexity of the statements inside the loop is O(1).
Whereas the time complexity of the second fragment would be $O(n^2)$.

*Time complexity of the program*= $O(n) + O(n^2) = O(n^2)$
![[Pasted image 20241215201542.png]]
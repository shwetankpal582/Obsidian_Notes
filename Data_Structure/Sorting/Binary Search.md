---
tags:
  - Sorting
  - binarySerach
Date: 2025 - 03 - 06
Topic:
  - Binary Search
Subject: Data Structure
unit: 0
---
# Binary Search
![BinarySearch|500](https://media.geeksforgeeks.org/wp-content/uploads/20240506155201/binnary-search-.webp)

### Condition to apply binary search
- The data structure must be sorted
- Access to any element of the data structure take constant time.

### Binary Search Algorithm
- Divide the search space into two halves by finding the middle index "mid".
- Compare the middle element of the search space with the key.
- If the key is found at middle element, the process is terminated.
- If the key is not found at middle element, choose which half will be used as the next search space.
	- If the key is smaller than the middle element, then go for left search space.
	- If the key is bigger than the middle element, then go for right search space.
- This process is continued until key is found or the total search space is exhausted.

**Simple code for it :**
```cpp
 int search(vector<int> &nums, int target)
    {
        int lowerBound = 0;
        int upperBound = nums.size() - 1;
        // int mid = (upperBound+lowerBound)/2; // unoptimzed way to find .

        if(lowerBound == upperBound) return 0;
        else if (nums.size()==0) return -1;

        while (lowerBound < upperBound)
        {
            int mid = lowerBound + (upperBound - lowerBound) / 2;
            if (nums[mid] == target)
            {
                return mid;
            }
            else if (nums[mid] > target)
            {
                upperBound = upperBound - 1;
            }
            else
            {
                lowerBound = lowerBound + 1;
            }
        }

        return -1;
    }
```


> [!NOTE] Find Optimized mid
> In binary search, both lines aim to calculate the middle index between `lowerBound` and `upperBound`, but they differ in how they handle potential integer overflow:
>
>1. **Unoptimized: `int mid = (upperBound + lowerBound) / 2;`**
  > - This adds `upperBound` and `lowerBound` first, then divides by 2.
   >- **Issue**: If `upperBound` and `lowerBound` are large integers, their sum could exceed the maximum value of an `int` (e.g., `2^31 - 1` in 32-bit systems), causing overflow. This leads to incorrect `mid` values and potential bugs.
   >- Example: If `lowerBound = 2,000,000,000` and `upperBound = 2,000,000,000`, their sum `4,000,000,000` overflows a 32-bit `int`.
>
>1. **Optimized: `int mid = lowerBound + (upperBound - lowerBound) / 2;`**
  > - This calculates the difference `upperBound - lowerBound`, divides it by 2, and then adds the result to `lowerBound`.
   >- **Advantage**: It avoids overflow because `(upperBound - lowerBound)` is typically smaller than the sum, and dividing it by 2 further reduces the value before adding to `lowerBound`.
   >- Example: Using the same values, `(upperBound - lowerBound) / 2 = (2,000,000,000 - 2,000,000,000) / 2 = 0`, so `mid = 2,000,000,000 + 0 = 2,000,000,000`, which is correct and safe.
>
**Key Difference**: The optimized version prevents integer overflow, making it more robust for large inputs, while the unoptimized version is simpler but risks overflow. Always use the optimized version in practice for reliability.

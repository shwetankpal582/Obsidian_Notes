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
	- If the space 
---
tags:
  - Sorting
  - DataStructure
Date: 2025 - 03 - 01
Topic:
  - Merge Sort
Subject: Data Structure
Code:
---
# Merge Sort

> [!url] Resource
> <iframe width="560" height="315" src="https://www.youtube.com/embed/ogjf7ORKfd8?si=HK5FA2tmqJPPIYVH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---
![](https://miro.medium.com/max/3520/1*p6pvuQ0mKCYkx3ZXv6ufgw.jpeg)

### I works in simple three steps as above image: 
1. **Divide:** Divide the list or array recursively into two halves until it can no more be divided.
2. **Conquer:** Each subarray is sorted individually using the merge sort algorithm.
3. **Merge:** The sorted subarrays are merged back together in sorted order. The process continues until all elements from both `subarrays` have been merged.

> [!example]  Let's see the example real quick (a dry run):
> **Divide:**
> - **[38, 27, 43, 10]** is divided into **[38, 27 ]** and **[43, 10]** .
> - **[38, 27]** is divided into **[38]** and **[27]** .
> - **[43, 10]** is divided into **[43]** and **[10]** .
> 
> **Conquer:**
> - **[38]** is already sorted.
> - **[27]** is already sorted.
> - **[43]** is already sorted.
> - **[10]** is already sorted.
> 
> **Merge:**
> - Merge **[38]** and **[27]** to get **[27, 38]** .
> - Merge **[43]** and **[10]** to get **[10,43]** .
> - Merge **[27, 38]** and **[10,43]** to get the final sorted list **[10, 27, 38, 43]**
> Therefore, the sorted list is **[10, 27, 38, 43]** .


---
tags:
  - LinkedLIst
  - DataStructure
  - GFG
Date: 2025 - 02 - 26
Topic:
  - Intro to linkedlist
Subject: Data Structure
Topics:
  - Singly linked list
Code:
---
## Array to Linked List
Given an array of integer **arr.** Your task is to construct the linked list from arr & return the **head** of the linked list.
**Example:**

> [!information] Example
> **INPUT**: arr = [1,2,3,4,5]
> **OUTPUT**: LinkedList: $1-> 2-> 3-> 4-> 5$
> **Explanation:** Linked list for the given array will be
> ![linkedlist](https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/712529/Web/Other/blobid1_1722579459.png)

```cpp
class Solution {
  public:
    Node* constructLL(vector<int>& arr) {
        // code here
        Node *header = new Node();
	    Node *temp = header;
	
	    if (arr.size() < 1)
	      return header;
	    for (int a : arr) {
	      Node *newNode = new Node(a);
	      temp->next = newNode;
	      temp = newNode;
	    }
	
	    return header->next;

    }
};
```
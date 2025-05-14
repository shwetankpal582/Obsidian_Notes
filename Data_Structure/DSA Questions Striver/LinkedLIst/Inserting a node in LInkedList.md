---
tags:
  - DataStructure
  - GFG
  - LinkedLIst
Date: 2025 - 02 - 26
Topic:
  - Inserting a node in linkedlist
Subject: Data Structure
Code:
---
# Linked List Inserting At End
Given the head of a Singly Linked List and a value x, insert that value x at the end of the Linked List and return the modified Linked List.[Go solve here ...](https://www.geeksforgeeks.org/problems/linked-list-insertion-1587115620/0?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=linked-list-insertion)

> [!Example] Example
> **INPUT:**  LinkedList: 1-> 2-> 3-> 4-> 5, x = 6
> **OUTPUT:** 1->2->3->4->5->6
> **Explanation:**
> ![](https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/700525/Web/Other/blobid2_1720519928.png)
> We can see that 6 is inserted at the end of the linkedlist

**Expected Time Complexity:** O(n)  
**Expected Auxiliary Space:** O(1)

**Constraints:**  
$0 <= number Of Nodes <= 105$  
1 <= node->data , x <= 103

**CODE**: 

```cpp
class Solution {
  public:
    Node *insertAtEnd(Node *head, int x) {
        // Code here
            Node *newNode = new Node(x);

    if (head == nullptr) // If list is empty, return new node as head
      return newNode;

    Node *temp = head;
    while (temp->next != nullptr) {
      temp = temp->next;
    }
    temp->next = newNode;

    return head;

    }
};
```

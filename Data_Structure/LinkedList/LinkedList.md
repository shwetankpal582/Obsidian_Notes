---
id: LinkedList
aliases: []
tags:
  - DataStructure
  - LinkedLIst
Date: 2024 - 11 - 02
Subject: Data Structure
Topic:
  - Linked list introduction
  - types of linked list
---
**Linked List** is a linear data structure, in which elements are not stored at a contiguous location, rather they are linked using pointers. Linked List forms a series of connected nodes, where each node stores the data and the address of the next node.
![linkedListImage](https://media.geeksforgeeks.org/wp-content/uploads/20220712172013/Singlelinkedlist.png)

**Node Structure:** A node in a linked list typically consists of two components:

1. **Data:** It holds the actual value or data associated with the node.
2. **Next Pointer or Reference :** It stores the memory address (reference) of the next node in the sequence.

**Head and Tail:** The linked list is accessed through the head node, which points to the first node in the list. The last node in the list points to NULL or `nullptr`, indicating the end of the list. This node is known as the tail node.


### Linked Lists ADT
1. **Main Linked lists Operations**
	- Insert: inserts an element into the list
	- Delete: removes and returns the specified position element from the list
2. **Auxiliary Linked Lists Operations**
	- Delete List: removes all elements of the list
	- Count : returns the number of elements in the list
	- Find $n^{th}$ node from the end of the list



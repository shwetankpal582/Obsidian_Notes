---
tags:
  - LinkedLIst
  - DataStructure
Date: 2024 - 11 - 03
Topics:
  - Singly linked list
Subject: Data Structure
---
# Singly Linked List
In a singly linked list, each node consists of two parts:
`data` and a `pointer` to the next node.
![singlyLinkedList](https://media.geeksforgeeks.org/wp-content/uploads/20240917161540/Singly-Linked-List.webp)

```cpp
struct Node {
  int data;
  Node *next;

> [!NOTE] Title
> Contents

  Node(int new_data) {
    this->data = new_data;
    this->next = nullptr;
  };
};
```

## Operations on Singly Linked List

### **Traversal**

```cpp
// Traversing through linked list

void printList(Node *head) {
  // creating a temporary pointer for traversing
  Node *temp = head;

  // initiation of loop for traversing 
  while (temp != nullptr) {
    cout << " " << temp->data << " ";
    temp = temp->next; // updating pointer to next 
  }
  cout << endl;
}
```
###  **Searching**
Step-by-step approach:
1. Traverse the Linked List starting from the head.
2. Check if the current node's data matches the target value.
    - If a match is found, return **true**.
3. Otherwise, Move to the next node and repeat steps 2.
4. If the end of the list is reached without finding a match, return **false**.
```cpp
// searching in linkedlist

bool searchLinkedList(Node *head, int target) {

  while (head != nullptr) {

    // check whether target is equal to current data
    if (head->data == target)
      return true;

    head = head->next;
  }
  return false;
}
```



### **Length**
- $ for finding the length of linked list or say counting number of nodes in list

Step-by-step approach:
- Initialize a counter **length** to 0.
- Start from the head of the list, assign it to current.
- Traverse the list:
    - Increment **length** for each node.
    - Move to the next node (**current = current->next**).
- Return the final value of **length**.
```cpp
// counting the number of nodes
// calculating length of linked list

int linkedListLenght(Node *head) {

  // creating a temporary pointer for traversing
  Node *temp = head;

  int count = 0; // counter 

  // initiation of loop for traversing
  while (temp != nullptr) {
    temp = temp->next; // updating pointer to next
    count++;           // increaing counter;
  }
  return count;
}
```

## **Insertion:**
1. **Insertion at the beginning of Singly Linked List**:

![500](https://media.geeksforgeeks.org/wp-content/uploads/20241022163445386036/Insertion-at-the-Beginning-of-Singly-Linked-List.webp)

Step-by-step approach:
- Create a new node with the given value.
- Set the **next** pointer of the new node to the current head.
- Move the head to point to the new node.
- Return the new head of the linked list.

```cpp
// inseration at the front
Node *insertingAtFront(Node *head, int new_data) {

 // creating new node 
  Node *new_node = new Node(new_data);

// assigning data to next to head
  new_node->next = head;

  return new_node;
}
```

2. **Insertion at the End of Singly Linked List**:

![500](https://media.geeksforgeeks.org/wp-content/uploads/20241022163601409037/Insertion-at-the-End-of-Singly-Linked-List.webp)

Step-by-step approach:
- Create a new node with the given value.
- Check if the list is empty:
    - If it is, make the new node the head and return.
- Traverse the list until the last node is reached.
- Link the new node to the current last node by setting the last node's next pointer to the new node.

```cpp
// inseration at the end
Node *insertionAtEnd(Node *head, int new_data) {
  // making newnode
  Node *newNode = new Node(new_data);

  // check whether there is any node in linked list or not
  //  if not just return newnode
  if (head == nullptr) {
    return newNode;
  }

  Node *curr = head;

  // reach to last node of linked list
  while (curr->next != nullptr) {
    curr = curr->next;
  }

  // adding the address of newNode in next of current node
  curr->next = newNode;
  return head;
}
```

3. **Insertion at specific Position of Singly linked list**:
![](https://media.geeksforgeeks.org/wp-content/uploads/20241022163649252002/Insertion-at-a-Specific-Position-of-the-Singly-Linked-List-copy.webp)

To insert a node at a specific position, traverse the list to the desired position, link the new node to the next node, and update the links accordingly.

```cpp

```

###  **Deletion:**
   - Delete from the beginning
   - Delete from the end
   - Delete a specific node

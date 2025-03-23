---
tags:
  - OperatingSystem
  - Threads
Date: 2025 - 03 - 06
Topic:
  - Threads introduction
Subject: Operating System
unit: 0
---
# Threads introduction
A thread is a single sequence stream within a process. Threads are also called **lightweight processes** as they possess some of the properties of processes. Each thread belongs to exactly one process.

- In an operating system that supports `multithreading`, the process can consist of many threads. But threads can be effective only if the CPU is more than 1 otherwise two threads have to context switch for that single CPU.

- All threads belonging to the same process share – code section, data section, and OS resources (e.g. open files and signals)

- But each thread has its own (thread control block) – thread ID, program counter, register set, and a stack

- Any operating system process can execute a thread. we can say that single process can have multiple threads.

## Components of Threads

These are the basic components of the Operating System.

- **Stack Space:** Stores local variables, function calls, and return addresses specific to the thread.

- **Register Set:** Hold temporary data and intermediate results for the thread’s execution.

- **Program Counter:** Tracks the current instruction being executed by the thread

## **Types of Thread in Operating System**

Threads are of two types. These are described below.

- User Level Thread 
- Kernel Level Thread

![threads|500](https://media.geeksforgeeks.org/wp-content/uploads/20240226115304/Threads.png)

### 1. User Level Thread

User Level Thread is a type of thread that is not created using system calls. The kernel has no work in the management of user-level threads. User-level threads can be easily implemented by the user. In case when user-level threads are single-handed processes, kernel-level thread manages them. Let’s look at the advantages and disadvantages of User-Level Thread.
### **Advantages of User-Level Threads**

- Implementation of the User-Level Thread is easier than Kernel Level Thread.
- Context Switch Time is less in User Level Thread.
- User-Level Thread is more efficient than Kernel-Level Thread.
- Because of the presence of only Program Counter, Register Set, and Stack Space, it has a simple representation.
### **Disadvantages of User-Level Threads**

- The operating system is unaware of user-level threads, so kernel-level optimizations, like load balancing across CPUs, are not utilized.
- If a user-level thread makes a blocking system call, the entire process (and all its threads) is blocked, reducing efficiency.
- User-level thread scheduling is managed by the application, which can become complex and may not be as optimized as kernel-level scheduling.

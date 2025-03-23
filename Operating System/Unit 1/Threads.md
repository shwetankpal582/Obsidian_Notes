---
tags:
  - OperatingSystem
  - Threads
Date: 2025 - 03 - 06
Topic:
  - Threads introduction
  - Types of Threads
  - Multi-thread
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
### 2. Kernel Level Threads

A kernel level thread is a type of thread that can recognize the Operating system easily. Kernel Level Threads has its own thread table where it keeps track of the system. The operating System Kernel helps in managing threads. Kernel Threads have somehow longer context switching time. Kernel helps in the management of threads.
### **Advantages of Kernel-Level Threads**

- Kernel-level threads can run on multiple processors or cores simultaneously, enabling better utilization of multicore systems.
- The kernel is aware of all threads, allowing it to manage and schedule them effectively across available resources.
- Applications that block frequency are to be handled by the Kernel-Level Threads.
- The kernel can distribute threads across CPUs, ensuring optimal load balancing and system performance.

### **Disadvantages of Kernel-Level threads**

- Context switching between kernel-level threads is slower compared to user-level threads because it requires mode switching between user and kernel space.
- Managing kernel-level threads involves frequent system calls and kernel interactions, leading to increased CPU overhead.
- A large number of threads may overload the kernel scheduler, leading to potential performance degradation in systems with many threads.
- Implementation of this type of thread is a little more complex than a user-level thread.

## **What is Multi-Threading?** 

A thread is also known as a lightweight process. The idea is to achieve parallelism by dividing a process into multiple threads. For example, in a browser, multiple tabs can be different threads. MS Word uses multiple threads: one thread to format the text, another thread to process inputs, etc.
![MultiThreading](https://media.geeksforgeeks.org/wp-content/uploads/20240226114918/Screenshot-from-2024-02-26-11-48-56-768.png)
**Multithreading can be done without OS support**, as seen in Java’s multithreading model. In Java, threads are implemented using the Java Virtual Machine (JVM), which provides its own thread management. These threads, also called user-level threads, are managed independently of the underlying operating system.

Application itself manages the creation, scheduling, and execution of threads without relying on the operating system’s kernel. The application contains a threading library that handles thread creation, scheduling, and context switching. The operating system is unaware of User-Level threads and treats the entire process as a single-threaded entity.

## Benefits of Thread in Operating System

- **Responsiveness:** If the process is divided into multiple threads, if one thread completes its execution, then its output can be immediately returned.

- **Faster context switch:** Context switch time between threads is lower compared to the process context switch. Process context switching requires more overhead from the CPU. 

- **Effective utilization of multiprocessor system:** If we have multiple threads in a single process, then we can schedule multiple threads on multiple processors. This will make process execution faster. 

- **Resource sharing**_****:****_ Resources like code, data, and files can be shared among all threads within a process. Note: Stacks and registers can’t be shared among the threads. Each thread has its own stack and registers. 

- **Communication: Communication between multiple threads is easier, as the threads share a common address space. while in the process we have to follow some specific communication techniques for communication between the two processes. 

- **Enhanced throughput of the system:** If a process is divided into multiple threads, and each thread function is considered as one job, then the number of jobs completed per unit of time is increased, thus increasing the throughput of the system.
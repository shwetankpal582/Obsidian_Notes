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
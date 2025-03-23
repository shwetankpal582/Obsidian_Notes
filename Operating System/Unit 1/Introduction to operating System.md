---
tags:
  - OperatingSystem
Date: 2024 - 12 - 08
Topic:
  - Introduction and Functions of Operating system
Subject: Operating System
---
# Main function 
### **1. Memory Management**

It is the management of the main or primary memory. Whatever program is executed, it has to be present in the main memory.  Main memory is a quick storage area that may be accessed directly by the CPU. When the program is completed, the memory region is released and can be used by other programs. Therefore, there can be more than one program present at a time. Hence, it is required to manage the memory.

The operating system:

- Allocates and deallocates the memory.
- Keeps a record of which part of primary memory is used by whom and how much.
- Distributes the memory while multiprocessing.
- In multiprogramming, the operating system selects which processes acquire memory when and how much memory they get.

### **2. Processor Management/Scheduling**

Every software that runs on a computer, whether in the background or in the frontend, is a process. Processor management is an execution unit in which a program operates. The operating system determines the status of the processor and processes, selects a job and its processor, allocates the processor to the process, and de-allocates the processor after the process is completed.

When more than one process runs on the system the OS decides how and when a process will use the CPU. Hence, the name is also **CPU Scheduling**. The OS:

- Allocates and deallocates processor to the processes.
- Keeps record of CPU status.

Certain algorithms used for CPU scheduling are as follows:

- First Come First Serve (FCFS)
- Shortest Job First (SJF)
- Round-Robin Scheduling
- Priority-based scheduling etc.

#### Purpose of CPU scheduling

The purpose of CPU scheduling is as follows:

- Proper utilization of CPU. Since the proper utilization of the CPU is necessary. Therefore, the OS makes sure that the CPU should be as busy as possible.
- Since every device should get a chance to use the processor. Hence, the OS makes sure that the devices get fair processor time.
- Increasing the efficiency of the system.

### **3. Device Management**

An operating system regulates device connection using drivers. The processes may require devices for their use. This management is done by the OS. The OS:

- Allocates and deallocates devices to different processes.
- Keeps records of the devices.
- Decides which process can use which device for how much time.

### **4. File Management**

The operating system manages resource allocation and de-allocation. It specifies which process receives the file and for how long. It also keeps track of information, location, uses, status, and so on. These groupings of resources are referred to as file systems. The files on a system are stored in different directories. The OS:

- Keeps records of the status and locations of files.
- Allocates and deallocates resources.
- Decides who gets the resources.

### **5. Storage Management**

Storage management is a procedure that allows users to maximize the utilization of storage devices while also protecting data integrity on whatever media on which it lives. Network virtualization, replication, mirroring, security, compression, deduplication, traffic analysis, process automation, storage provisioning, and memory management are some of the features that may be included. The operating system is in charge of storing and accessing files. The creation of files, the creation of directories, the reading and writing of data from files and directories, as well as the copying of the contents of files and directories from one location to another are all included in storage management.

The OS uses storage management for:

- Improving the performance of the data storage resources.
- It optimizes the use of various storage devices.
- Assists businesses in storing more data on existing hardware, speeding up the data retrieval process, preventing data loss, meeting data retention regulations, and lowering IT costs

## Processes
A process is a program in execution. For example, when we write a program in C or C++ and compile it, the compiler creates binary code.
![[Pasted image 20250323192837.png]]

## Attributes of a Process

A **process** has several important attributes that help the operating system manage and control it. These attributes are stored in a structure called the [**Process Control Block (PCB)**](https://www.geeksforgeeks.org/process-control-block-in-os/) (sometimes called a task control block). The PCB keeps all the key information about the process, including:

1. **Process ID (PID)**: A unique number assigned to each process so the operating system can identify it.
2. [****Process State****](https://www.geeksforgeeks.org/states-of-a-process-in-operating-systems/): This shows the current status of the process, like whether it is running, waiting, or ready to execute.
3. ****Priority and other CPU Scheduling Information****: Data that helps the operating system decide which process should run next, like priority levels and pointers to scheduling queues.
4. ****I/O Information****: Information about input/output devices the process is using.
5. ****File Descriptors:**** Information about open files files and network connections.
6. ****Accounting Information****: Tracks how long the process has run, the amount of CPU time used, and other resource usage data.
7. ****Memory Management Information****: Details about the memory space allocated to the process, including where it is loaded in memory and the structure of its memory layout (stack, heap, etc.).
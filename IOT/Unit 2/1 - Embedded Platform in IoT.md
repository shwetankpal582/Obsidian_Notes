---
tags:
  - InternetOfThings
Date: 2025 - 03 - 06
Topic:
  - Embedded computing basics
Subject: IOT
unit: 2
---
### Embedded System Basics

#### 1. **Definition**

An embedded system is a specialized computer system designed to perform specific tasks or functions within a larger system. Unlike general-purpose computers (e.g., PCs), embedded systems are typically resource-constrained and optimized for efficiency, reliability, and real-time performance.

#### 2. **Key Characteristics**

- **Dedicated Functionality**: Built for a specific purpose (e.g., controlling a microwave, monitoring sensors in IoT devices).
- **Resource Constraints**: Limited processing power, memory, and energy (often battery-powered).
- **Real-Time Operation**: Many embedded systems respond to inputs or events within strict time constraints (e.g., airbag deployment in cars).
- **Minimal User Interface**: Often no display or a simple interface (e.g., LEDs, buttons).
- **Integration**: Embedded into a larger hardware system.

#### 3. **Components of Embedded Systems**

- **Hardware**:
    - **Microcontroller (MCU) or Microprocessor (MPU)**: The "brain" of the system (e.g., ARM, AVR, PIC).
    - **Memory**:
        - ROM (for firmware) or Flash (program storage).
        - RAM (temporary data storage).
    - **Input/Output (I/O)**: Sensors (input) and actuators (output) to interact with the environment.
    - **Power Supply**: Often low-power or battery-operated.
    - **Peripherals**: Timers, communication interfaces (e.g., UART, SPI, I2C).
- **Software**:
    - Firmware or lightweight operating systems (e.g., FreeRTOS, bare-metal code).
    - Written in languages like C or C++ for efficiency.
- **Communication Protocols**: Enable interaction with other devices (e.g., MQTT, Zigbee, Bluetooth for IoT).

#### 4. **Types of Embedded Systems**

- **Standalone**: Operate independently (e.g., digital cameras).
- **Real-Time**: Time-critical systems (e.g., medical devices, automotive control).
- **Networked**: Connected systems, common in IoT (e.g., smart thermostats).
- **Mobile**: Portable, battery-powered (e.g., wearables).

#### 5. **Role in IoT**

- Embedded systems are the backbone of IoT devices, enabling sensing, processing, and communication.
- Example: A smart home sensor uses an embedded system to collect temperature data, process it, and send it via Wi-Fi to a cloud server.

#### 6. **Design Considerations**

- **Low Power Consumption**: Critical for IoT devices to extend battery life.
- **Size and Cost**: Must be compact and affordable for mass deployment.
- **Reliability**: Must operate without failure in harsh conditions (e.g., temperature, humidity).
- **Security**: Essential in IoT to protect against hacking or data breaches.

#### 7. **Examples**

- IoT Devices: Smart bulbs, fitness trackers, industrial sensors.
- Everyday Devices: Washing machines, car engine controllers, thermostats.

#### 8. **Advantages**

- High efficiency, small footprint, low cost, tailored functionality.

#### 9. **Challenges**

- Limited resources, debugging complexity, need for real-time performance, security vulnerabilities.

## What is a Microprocessor?

A Microprocessor is an important part of a computer architecture without which you will not be able to perform anything on your computer. It is a programmable device that takes in input performs some arithmetic and logical operations over it and produces the desired output. In simple words, a Microprocessor is a digital device on a chip that can fetch instructions from memory, decode and execute them, and give results. 

## What is Microcontroller?

A microcontroller (MCU) is a small computer on a single integrated circuit that is designed to control specific tasks within electronic systems. It combines the functions of a central processing unit (CPU), memory, and input/output interfaces, all on a single chip. Microcontroller are widely used in embedded systems, such as home appliances, automotive systems, medical devices, and industrial control systems. They are also used in consumer electronics products, such as gaming systems, digital cameras, and audio players.

## Difference between Microprocessor and Microcontroller

|                                                                                                                                       |                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| **Microcontroller**                                                                                                                   | **Microprocessor**                                                                                          |
| A microcontroller is a specialized form of a microprocessor                                                                           | The microprocessor is designed to be general-purpose.                                                       |
| It is cost-effective.                                                                                                                 | It is a silicon chip                                                                                        |
| It is self-sufficient.                                                                                                                | It is a dependent unit                                                                                      |
| The microcontroller is used to perform a particular tasks.                                                                            | The Microprocessor is  <br>used to perform a certain task.                                                  |
| Its power consumption is low.                                                                                                         | Its power consumption is high.                                                                              |
| It contains [CPU](https://www.geeksforgeeks.org/central-processing-unit-cpu), RAM, ROM,  <br>Registers, Timer and input/output ports. | It requires a combination of timers, controllers  <br>memory chips.                                         |
| Its size is smaller.                                                                                                                  | Its size is larger.                                                                                         |
| It is a chip which is called single chip computer.                                                                                    | It is a general purpose device which is called a CPU.                                                       |
| Microcontroller have no advantage of designing RAM, ROM, I/O port.                                                                    | It have advantages of versatility such that designer can decide the amount of RAM, ROM, I/O port as needed. |
| Its microprocessors processing power is lower than microprocessor.                                                                    | Its processing power is higher.                                                                             |
| It uses Harvard Architecture.                                                                                                         | It uses Von Neumann Architecture.                                                                           |
| It’s system cost is low.                                                                                                              | It’s system cost is high.                                                                                   |
| Each instruction needs an internal operation.                                                                                         | Each instruction needs an external operation.                                                               |
| For Example- Television.                                                                                                              | For Example- Personal Computers.                                                                            |

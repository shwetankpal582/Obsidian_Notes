---
tags:
  - InternetOfThings
Date: 2025 - 03 - 06
Topic:
  - Wireless medium access issues
  - MAC protocol survey
  - Survey routing protocols
Subject: IOT
unit: 3
---
## Wireless Medium access issues
The very important issues which are observed are: *Half Duplex operation, Time-varying channel, and Burst channel errors*.  
These are explained as following below.

**1. Half Duplex operation:**  
Half-duplex transmission means when the sender and receiver both are capable of sharing data but one at a time. In wireless transmission, it is difficult to receive data when the transmitter is sending the data because during transmission a large amount or a large fraction of signal energy is leaked while broadcasting. The magnitude of the transferred signal and received signal differs a lot. Due to which collision detection is even not possible by the sender as the intensity of the transferred signal is large than the received one. Hence this causes the problem of collision and the prime focus should be to minimize the collision

**2. Time-varying channel :**  
Time-varying channels include the three mechanisms for radio signal propagations they are Reflection, Diffraction, and Scattering.

- **Reflection –**  
    This occurs when a propagating wave carrying information intrudes on an object that has very large dimensions than the wavelength of the wave.
- **Diffraction –**  
    This occurs when the radio path between the transmitter and the receiver is collided by the surface with sharp edges. This is a phenomenon which causes the diffraction of the wave from the targeted position.
- **Scattering –**  
    This occurs when the medium through from the wave is traveling consists of some objects which have dimensions smaller than the wavelength of the wave.

While transmitting the signal by the node these are time shifted and this is called multi-path propagation. While when this node signals intensity is dropped below a threshold value, then this is termed as fade. As a result Handshaking strategy is widely used so as a healthy communication can be set up.

**3. Burst channel errors :**  
Burst channel errors are called as a contiguous sequence of symbols, which are received in a communication channel, in which the first and last symbols has an error and there is no evidence of contiguous sub-sequence of corrected received symbols. When time-varying channels are used then signals strengths are introduced due to which errors are observed in transmission. For these channels in wire-line networks, the Bit rate is high as 10 -3.

## MAC Protocol Survey

#### 1. **What is a MAC Protocol?**
- **Definition**: The Medium Access Control (MAC) protocol is a sublayer of the Data Link Layer (Layer 2 in the OSI model) that governs how devices share a common communication medium (e.g., wired or wireless channels) to avoid collisions and ensure efficient data transmission.
- **Role in IoT**: In IoT systems, MAC protocols manage how resource-constrained devices (e.g., sensors, actuators) access networks like Wi-Fi, Zigbee, or LoRa, optimizing energy use and bandwidth.

#### 2. **Why Survey MAC Protocols?**
- IoT devices operate in diverse environments with varying requirements (low power, real-time data, scalability). A survey of MAC protocols helps identify the best fit for specific IoT applications (e.g., smart homes, industrial monitoring).
- Key metrics: Latency, throughput, energy efficiency, scalability, and collision avoidance.

#### 3. **Types of MAC Protocols**
MAC protocols are broadly classified into contention-based, schedule-based, and hybrid approaches. Below is a survey of prominent examples relevant to IoT:

##### a. **Contention-Based Protocols**
- **CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance)**:
  - **How it Works**: Devices listen to the channel before transmitting; if busy, they wait and retry (used in Wi-Fi, IEEE 802.11).
  - **IoT Use**: Common in Raspberry Pi or NodeMCU with Wi-Fi modules.
  - **Pros**: Simple, scalable for small networks.
  - **Cons**: High energy use, collision risk in dense networks.
- **ALOHA**:
  - **How it Works**: Devices transmit whenever they have data; collisions are resolved by retransmission (Pure ALOHA) or slotted time (Slotted ALOHA).
  - **IoT Use**: Early wireless systems; less common in modern IoT.
  - **Pros**: Simple implementation.
  - **Cons**: Low throughput, inefficient for IoT scale.

##### b. **Schedule-Based Protocols**
- **TDMA (Time Division Multiple Access)**:
  - **How it Works**: Time is divided into slots; each device gets a dedicated slot to transmit (used in Zigbee, Bluetooth).
  - **IoT Use**: Energy-efficient for sensor networks (e.g., Arduino with Zigbee).
  - **Pros**: No collisions, predictable latency, low power.
  - **Cons**: Requires synchronization, less flexible for dynamic networks.
- **FDMA (Frequency Division Multiple Access)**:
  - **How it Works**: Devices use separate frequency bands (used in cellular IoT like NB-IoT).
  - **IoT Use**: Long-range IoT (e.g., smart meters).
  - **Pros**: No interference, good for continuous data.
  - **Cons**: Limited bandwidth, complex hardware.

##### c. **Hybrid Protocols**
- **Z-MAC (Zigbee MAC)**:
  - **How it Works**: Combines TDMA and CSMA; uses scheduled slots but allows contention in unused slots.
  - **IoT Use**: Zigbee-based IoT devices (e.g., smart home sensors).
  - **Pros**: Adaptive, energy-efficient.
  - **Cons**: Complexity in implementation.
- **LoRaWAN MAC**:
  - **How it Works**: Uses ALOHA-like random access with low-power, long-range communication (LoRa technology).
  - **IoT Use**: Remote IoT (e.g., agriculture, environmental monitoring).
  - **Pros**: Ultra-low power, long range (up to 15 km).
  - **Cons**: Low data rate, suitable only for small payloads.

#### 4. **MAC Protocols in IoT Hardware Platforms**
- **Arduino/NodeMCU**: Often use CSMA/CA (with Wi-Fi modules) or TDMA (with Zigbee shields).
- **Raspberry Pi**: Supports CSMA/CA via Wi-Fi or Ethernet; can implement custom protocols with Linux.
- **BeagleBone**: Flexible for TDMA or hybrid protocols in industrial IoT via Linux.
- **ARM Cortex**: Found in devices implementing any MAC protocol, depending on the radio module (e.g., Cortex-M in LoRa nodes).

#### 5. **Challenges in IoT MAC Design**
- **Energy Efficiency**: IoT devices (e.g., battery-powered sensors) need protocols that minimize idle listening and retransmissions.
- **Scalability**: Must handle thousands of devices in dense networks.
- **Heterogeneity**: IoT includes diverse devices (e.g., high-power gateways vs. low-power nodes).
- **Real-Time Needs**: Critical for applications like healthcare or automotive IoT.

#### 6. **Summary of Key Protocols**
| **Protocol**   | **Type**          | **IoT Strength**           | **Weakness**            | **Example Use**         |
|-----------------|-------------------|----------------------------|-------------------------|-------------------------|
| CSMA/CA        | Contention        | Scalable, widely supported | High power, collisions  | Smart home Wi-Fi        |
| TDMA           | Schedule          | Low power, no collisions   | Synchronization needed  | Sensor networks         |
| LoRaWAN MAC    | Hybrid            | Long range, low power      | Low data rate           | Remote monitoring       |
| Z-MAC          | Hybrid            | Adaptive, efficient        | Complex setup           | Zigbee IoT devices      |

---

### Notes Tips
- **Link to IoT**: Highlight how MAC protocols enable communication in your hardware platforms (e.g., NodeMCU’s Wi-Fi uses CSMA/CA).
- **Focus Areas**: Energy efficiency and scalability are IoT priorities—emphasize protocols like TDMA and LoRaWAN.
- **Simplify**: Use the table to memorize key points for exams or quick reference.


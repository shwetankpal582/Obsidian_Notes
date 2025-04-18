---
tags:
  - InternetOfThings
Date: 2025 - 03 - 06
Topic:
  - Sensors, Digital sensors, Actuators, Radio frequency identification (RFID) technology,
Subject: IOT
unit: 2
---
# Hardware in IoT
## Sensors
**Sensors** are used for sensing things and devices etc.
A device that provides a usable output in response to a specified measurement.  
The sensor attains a physical parameter and converts it into a signal suitable for processing (e.g. electrical, mechanical, optical) the characteristics of any device or material to detect the presence of a particular physical quantity.  
The output of the sensor is a signal which is converted to a human-readable form like changes in characteristics, changes in resistance, capacitance, impedance, etc.
![sensor](https://media.geeksforgeeks.org/wp-content/uploads/20210429114343/Sensors.png)

[[Sensors in Internet of Things(IoT) - GeeksforGeeks| More about sensor...]]

## Digital Sensors

Unlike analog sensor, **Digital Sensor** produce discrete values (0 and 1’s). Discrete values often called digital or binary signals in digital communication.

Electronic sensors or electrochemical sensors in which data conversion and data transmission take place digitally are digital sensors. These digital sensors are replacing analog sensors as they are capable of overcoming the drawbacks of analog sensors. The digital sensor consists of majorly three components such as senor, cable, and transmitter. But, In digital sensors, the signal measured directly converted into digital signal output inside the digital sensor itself. So, this digital signal transmitted through cable digitally. There are different types of digital sensors that overcome the disadvantages of analog sensors.
![digital_sensor|500](https://i0.wp.com/iot4beginners.com/wp-content/uploads/2020/05/Untitled1111.jpg?resize=640%2C374&ssl=1)

## Actuator
An IOT device is made up of a Physical object (“thing”) + Controller (“brain”) + Sensors + Actuator + Networks (Internet). An actuator is a machine component or system that moves or controls the mechanism of the system. Sensors in the device sense the environment, then control signals are generated for the actuators according to the actions needed to perform.

A servo motor is an example of an actuator. They are linear or rotatory actuators, can move to a given specified angular or linear position. We can use servo motors for IoT applications and make the motor rotate to 90 degrees, 180 degrees, etc., as per our need.

The following diagram shows what actuators do, the controller directs the actuator based on the sensor data to do the work.
![Actuator](https://media.geeksforgeeks.org/wp-content/uploads/20210218231302/actuatorPage21.png)

The control system acts upon an environment through the actuator. It requires a source of energy and a control signal. When it receives a control signal, it converts the source of energy to a mechanical operation. On this basis, on which form of energy it uses, it has different types given below.
**Types of Actuators :**
**1. Hydraulic Actuators –**
A hydraulic actuator uses hydraulic power to perform a mechanical operation. They are actuated by a cylinder or fluid motor. The mechanical motion is converted to rotary, linear, or oscillatory motion, according to the need of the IoT device. Ex- construction equipment uses hydraulic actuators because hydraulic actuators can generate a large amount of force.

**Advantages :**

- Hydraulic actuators can produce a large magnitude of force and high speed.
- Used in welding, clamping, etc.
- Used for lowering or raising the vehicles in car transport carriers.

**Disadvantages :**

- Hydraulic fluid leaks can cause efficiency loss and issues of cleaning.
- It is expensive.
- It requires noise reduction equipment, heat exchangers, and high maintenance systems.

**2. Pneumatic Actuators –**
A pneumatic actuator uses energy formed by vacuum or compressed air at high pressure to convert into either linear or rotary motion. Example- Used in robotics, use sensors that work like human fingers by using compressed air.

**Advantages :**
- They are a low-cost option and are used at extreme temperatures where using air is a safer option than chemicals.
- They need low maintenance, are durable, and have a long operational life.
- It is very quick in starting and stopping the motion.

**Disadvantages :**
- Loss of pressure can make it less efficient.
- The air compressor should be running continuously.
- Air can be polluted, and it needs maintenance.

**3. Electrical Actuators –**
An electric actuator uses electrical energy, is usually actuated by a motor that converts electrical energy into mechanical torque. An example of an electric actuator is a solenoid based electric bell. 

**Advantages :**
- It has many applications in various industries as it can automate industrial valves.
- It produces less noise and is safe to use since there are no fluid leakages.
- It can be re-programmed and it provides the highest control precision positioning.

**Disadvantages :**
- It is expensive.
- It depends a lot on environmental conditions.

Other actuators are –
- **Thermal/Magnetic Actuators –**   
    These are actuated by thermal or mechanical energy. Shape Memory Alloys (SMAs) or Magnetic Shape‐Memory Alloys (MSMAs) are used by these actuators. An example of a thermal/magnetic actuator can be a piezo motor using SMA.
- **Mechanical Actuators –**   
    A mechanical actuator executes movement by converting rotary motion into linear motion. It involves pulleys, chains, gears, rails, and other devices to operate. Example – A crankshaft.
- Soft Actuators
- Shape Memory Polymers
- Light Activated Polymers
- With the expanding world of IoT, sensors and actuators will find more usage in commercial and domestic applications along with the pre-existing use in industry.


## RFID
**Radio Frequency Identification** is a form of wireless communication that incorporates the use of electromagnetic or electrostatic coupling in the radio frequency portion of the electromagnetic spectrum to uniquely identify an object or person. It uses radio frequency to search, identify, track, and communicate with items and people.
- *RFID (Radio Frequency Identification) is a technology that uses electromagnetic fields to automatically identify and track tags attached to objects.* These tags contain electronically stored information that can be read from several meters away, without requiring direct line-of-sight. RFID is commonly used in inventory management, asset tracking, access control, and supply chain logistics due to its efficiency and accuracy in tracking and managing items.
- It is a method that is used to track or identify an object by radio transmission over the web. Data is digitally encoded in an RFID tag which might be read by the reader. This device works as a tag or label during which data is read from tags that are stored in the database through the reader as compared to traditional barcodes and QR codes. It is often read outside the road of sight either passive or active RFID.

![RFID](https://media.geeksforgeeks.org/wp-content/uploads/20240208153001/Screenshot-2024-02-08-152945.png)

## **Types of RFID**

There are many kinds of RFID, each with different properties, but perhaps the most fascinating aspect of RFID technology is that most RFID tags have neither an electric plug nor a battery. Instead, all of the energy needed to operate them is supplied in the form of radio waves by RFID readers. This technology is called passive RFID to distinguish it from the(less common) active RFID in which there is a power source on the tag.

- ****UHF RHID ( Ultra-High Frequency RFID )****. It is used on shipping pallets and some driver’s licenses. Readers send signals in the 902-928 MHz band. Tags communicate at distances of several meters by changing the way they reflect the reader signals; the reader is able to pick up these reflections. This way of operating is called backscatter.
- **HF RFID (High-Frequency RFID ).** It operates at 13.56 MHz and is likely to be in your passport, credit card, books, and noncontact payment systems. HF RFID has a short-range, typically a meter or less because the physical mechanism is based on induction rather than backscatter. 

- **Passive RFID:** Passive RFID tags does not have their own power source. It uses power from the reader. In this device, RF tags are not attached by a power supply and passive RF tag stored their power. When it is emitted from active antennas and the RF tag are used specific frequency like 125-134KHZ as low frequency, 13.56MHZ as a high frequency and 856MHZ to 960MHZ as ultra-high frequency. 
    - No need embedded power
    - Tracking inventory
    - Has unique identification number
    - Sensitive for interference
    - Semi-passive RFID  
         
- **Active RFID:** In this device, RF tags are attached by a power supply that emits a signal and there is an antenna which receives the data. means, active tag uses a power source like battery. It has it’s own power source, does not require power from source/reader. 
    - Embedded power: communication over large distance
    - Has unique identifier /identification number
    - Use other devices like sensors
    - Better than passive tags in the presence of metal

There are also other forms of RFID using other frequencies, such as LF RFID(Low-Frequency RFID), which was developed before HF RFID and used for tracking.
[[Working Principle of RFID - GFG| Working Principles of RFID and Types of Tags]]

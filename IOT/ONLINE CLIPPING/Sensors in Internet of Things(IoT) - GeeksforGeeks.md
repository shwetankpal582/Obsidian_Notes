---
title: "Sensors in Internet of Things(IoT) - GeeksforGeeks"
source: "https://www.geeksforgeeks.org/sensors-in-internet-of-thingsiot/"
author:
  - "[[GeeksforGeeks]]"
published: 2021-04-11
created: 2025-03-13
description: "A Computer Science portal for geeks. It contains well written, well thought and well explained computer science and programming articles, quizzes and practice/competitive programming/company interview Questions."
tags:
  - "clippings"
---

**Transducer :** 

- A transducer converts a signal from one physical structure to another.
- It converts one type of energy into another type.
- It might be used as actuator in various systems.

**Sensors characteristics :**

1. Static
2. Dynamic

**1\. Static characteristics :**  
It is about how the output of a sensor changes in response to an input change after steady state condition.

- **Accuracy:** Accuracy is the capability of measuring instruments to give a result close to the true value of the measured quantity. It measures errors. It is measured by absolute and relative errors. Express the correctness of the output compared to a higher prior system. Absolute error = Measured value – True value  
Relative error = Measured value/True value
- **Range:** Gives the highest and the lowest value of the physical quantity within which the sensor can actually sense. Beyond these values, there is no sense or no kind of response.  
e.g. RTD for measurement of temperature has a range of -200\`c to 800\`c.
- **Resolution:** Resolution is an important specification for selection of sensors. The higher the resolution, better the precision. When the accretion is zero to, it is called the threshold.  
Provide the smallest changes in the input that a sensor is able to sense.
- **Precision:** It is the capacity of a measuring instrument to give the same reading when repetitively measuring the same quantity under the same prescribed conditions.  
It implies agreement between successive readings, NOT closeness to the true value.  
It is related to the variance of a set of measurements.  
It is a necessary but not sufficient condition for accuracy.
- **Sensitivity:** Sensitivity indicates the ratio of incremental change in the response of the system with respect to incremental change in input parameters. It can be found from the slope of the output characteristics curve of a sensor. It is the smallest amount of difference in quantity that will change the instrument’s reading.
- **Linearity:** The deviation of the sensor value curve from a particularly straight line. Linearity is determined by the calibration curve. The static calibration curve plots the output amplitude versus the input amplitude under static conditions.   
A curve’s slope resemblance to a straight line describes linearity.
- **Drift:** The difference in the measurement of the sensor from a specific reading when kept at that value for a long period of time.
- **Repeatability:** The deviation between measurements in a sequence under the same conditions. The measurements have to be made under a short enough time duration so as not to allow significant long-term drift.

**Dynamic Characteristics :**  
Properties of the systems

- **Zero-order system:** The output shows a response to the input signal with no delay. It does not include energy-storing elements.  
Ex. potentiometer measure, linear and rotary displacements.
- **First-order system:** When the output approaches its final value gradually.  
Consists of an energy storage and dissipation element.
- **Second-order system:** Complex output response. The output response of the sensor oscillates before steady state.

**Sensor Classification :**

- Passive& Active
- Analog & digital
- Scalar & vector

1. **Passive Sensor –**  
Can not independently sense the input. Ex- Accelerometer, soil moisture, water level and temperature sensors.
2. **Active Sensor –**   
Independently sense the input. Example- Radar, sounder and laser altimeter sensors.
3. **Analog Sensor** **–**  
 The response or output of the sensor is some continuous function of its input parameter. Ex- Temperature sensor, LDR, analog pressure sensor and analog hall effect.
4. **Digital sensor –**  
Response in binary nature. Design to overcome the disadvantages of analog sensors. Along with the analog sensor, it also comprises extra electronics for bit conversion. Example – Passive infrared (PIR) sensor and digital temperature sensor(DS1620).
5. **Scalar sensor –**   
Detects the input parameter only based on its magnitude. The answer for the sensor is a function of magnitude of  some input parameter. Not affected by the direction of input parameters.  
Example – temperature, gas, strain, color and smoke sensor.
6. **Vector sensor –**  
The response of the sensor depends on the magnitude of the direction and orientation of input parameter. Example – Accelerometer, gyroscope, magnetic field and motion detector sensors.

### Types of sensors –

- **Electrical sensor :**
	- Electrical proximity sensors may be contact or non contact. 
	- Simple contact sensors operate by making the sensor and the component complete an electrical circuit. 
	- Non- contact electrical proximity sensors rely on the electrical principles of either induction for detecting metals or capacitance for detecting non metals as well.

	
- **Light sensor:**
	- Light sensor is also known as photo sensors and one of the important sensor.
	- Light dependent resistor or LDR is a simple light sensor available today.
	- The property of LDR is that its resistance is inversely proportional to the intensity of the ambient light i.e when the intensity of light increases, it’s resistance decreases and vise versa.

- **Touch sensor:**
	- Detection of something like a touch of finger or a stylus is known as touch sensor.It’s name suggests that detection of something.

They are classified into two types:
1. Resistive type
2. Capacitive type

Today almost all modern touch sensors are of capacitive types.

Because they are more accurate and have better signal to noise ratio.
- **Range sensing:**
	- Range sensing concerns detecting how near or far a component is from the sensing position, although they can also be used as proximity sensors.
	 - Distance or range sensors use non-contact analog techniques. Short range sensing, between a few millimetres and a few hundred millimetres is carried out using electrical capacitance, inductance and magnetic technique.
	 - Longer range sensing is carried out using transmitted energy waves of various types eg radio waves, sound waves and lasers.

- **Mechanical sensor:**
	- Any suitable mechanical / electrical switch may be adopted but because a certain amount of force is required to operate a mechanical switch it is common to use micro-switches.

- **Pneumatic sensor:**
	- These proximity sensors operate by breaking or disturbing an air flow.
	 - The pneumatic proximity sensor is an example of a contact type sensor. These cannot be used where light components may be blown away.

- **Optical sensor:**
	- In there simplest form, optical proximity sensors operate by breaking a light beam which falls onto a light sensitive device such as a photocell. These are examples of non contact sensors. Care must be exercised with the lighting environment of these sensors for example optical sensors can be blinded by flashes from arc welding processes, airborne dust and smoke clouds may impede light transmission etc.

- **Speed Sensor:**
	- Sensor used for detecting the speed of any object or vehicle which is in motion is known as speed sensor .For example – Wind Speed Sensors, Speedometer ,UDAR ,Ground Speed Radar .

- **Temperature Sensor:**

Devices which monitors and tracks the temperature and gives temperature’s measurement as an electrical signal are termed as temperature sensors .These electrical signals will be in the form of voltage and is directly proportional to the temperature measurement .

- **PIR Sensor:**

PIR stands for passive infrared sensor and it is an electronic sensor that is used for the tracking and measurement of infrared (IR) light radiating from objects in its field of view and is also known as Pyroelectric sensor .It is mainly used for detecting human motion and movement detection .

- **Ultrasonic Sensor:**

The principle of ultrasonic sensor is similar to the working principle of SONAR or RADAR in which the interpretation of echoes from radio or sound waves to evaluate the attributes of a target by generating the high frequency sound waves .

  

**Get 90% Course fee refund on completing 90% course in 90 days**! Take the [Three 90 Challenge today](https://www.geeksforgeeks.org/courses?utm_source=geeksforgeeks&utm_medium=bottomtextad&utm_campaign=three90).  
  
The next 90 Days of focus & determination can unlock your full potential. The Three 90 challenge has started and this is your chance to **upskill and get 90% refund.** What more motivation do you need? [Start the challenge right away!](https://www.geeksforgeeks.org/courses?utm_source=geeksforgeeks&utm_medium=bottomtextad&utm_campaign=three90)

  

[Next Article](https://www.geeksforgeeks.org/internet-things-iot/?ref=next_article)

[Internet of Things (IoT) | Set 3](https://www.geeksforgeeks.org/internet-things-iot/?ref=next_article)
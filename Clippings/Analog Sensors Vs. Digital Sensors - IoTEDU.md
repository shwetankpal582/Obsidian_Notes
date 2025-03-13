---
title: "Analog Sensors Vs. Digital Sensors - IoTEDU"
source: "https://iot4beginners.com/analog-sensors-vs-digital-sensors/"
author:
  - "[[Jayanta Chakraborty]]"
published: 2020-05-30
created: 2025-03-13
description: "There are different types of sensors that produce continuous analogue output signal and these sensors are considered as analogue sensors. Digital Sensor..."
tags:
  - "clippings"
---
![](https://i0.wp.com/iot4beginners.com/wp-content/uploads/2020/05/image-100.png?resize=224%2C165&ssl=1)

<iframe id="aswift_12" style="height: 1px !important; max-height: 1px !important; max-width: 1px !important; width: 1px !important;"><iframe id="google_ads_frame12"></iframe> 

###### Digital Accelerometers Sensors

![](https://i0.wp.com/iot4beginners.com/wp-content/uploads/2020/05/ADXL335-3-Axis-Compass-Accelerometer-Module-GY.jpg_350x350.jpg?resize=179%2C176&ssl=1)

bm-es.com

<iframe id="aswift_13" style="height: 1px !important; max-height: 1px !important; max-width: 1px !important; width: 1px !important;"><iframe id="google_ads_frame13"></iframe> 

==The method of generation of variable frequency square wave output by the digital accelerometer is pulse-width modulation. The readings taken by the pulse width modulated accelerometer at a fixed rate, generally at 1000 Hz (but this can be configured by a user based on the IC used). So, The output PWM signal, pulse width, or duty cycle is proportional to the acceleration value.==

###### Digital Temperature Sensors

==Temperature sensing is ubiquitous. Historically, temperature sensors have had well-known applications in environmental and process control as well as in test and measurement and communications. New communications applications range from base stations of all sizes to cellular handsets. Temperature sensors also found inside automotive engines and transmissions, where controllers adjust operating parameters based on temperature. But, they’re on circuit boards with big, fast processors and FPGAs. There are traditional temperature sensors and silicon-based temperature sensors. Traditional sensors comprise thermistors, resistance temperature detectors (RTDs), and thermocouples. They are analog devices, so their outputs must be digital before they can be used in a digital-control loop==

![](https://i0.wp.com/iot4beginners.com/wp-content/uploads/2020/05/DS18B20-500x500-800x800-1.jpg?resize=238%2C238&ssl=1)

www.parallax.com

<iframe id="aswift_14" style="height: 1px !important; max-height: 1px !important; max-width: 1px !important; width: 1px !important;"><iframe id="google_ads_frame14"></iframe> 

==On the other hand, Temperature sensors don’t have to be analog. Silicon-based temperature- sensing ICs that output precise digital representations of the temperatures they are measuring. This simplifies the design of the control system, compared to approaches that require external signal conditioning and an analog-to-digital converter (ADC).==

==The **DS1620** Digital Thermometer and Thermostat provides 9-bit temperature readings which indicate the temperature of the device. With three thermal alarm outputs, the DS1620 can also act as a thermostat. So, T<sub>HIGH</sub> drove high if the DS1620’s temperature is greater than or equal to a user-defined temperature TH. T<sub>LOW</sub> drove high if the DS1620’s temperature is less than or equal to a user-defined temperature TL. T<sub>COM </sub> drove high when the temperature exceeds TH and stays high until the temperature falls below that of TL.==

![](https://i0.wp.com/iot4beginners.com/wp-content/uploads/2020/05/604-00002_0.png?resize=248%2C248&ssl=1)

**DS1620**  
www.parallax.com

<iframe id="aswift_15" style="height: 1px !important; max-height: 1px !important; max-width: 1px !important; width: 1px !important;"><iframe id="google_ads_frame15"></iframe> 

![](https://i0.wp.com/iot4beginners.com/wp-content/uploads/2020/05/digital-temperature-sensor.jpg?resize=303%2C178&ssl=1)

**DS1620 Pin Diagram**  
www.parallax.com

<iframe id="aswift_16" style="height: 1px !important; max-height: 1px !important; max-width: 1px !important; width: 1px !important;"><iframe id="google_ads_frame16"></iframe> 

==User-define temperature settings store in non-volatile memory, so parts are prior to insertion in a system, as well as used in standalone applications without a CPU. Temperature settings and temperature readings are all communicated to/from the DS1620 over a simple 3-wire interface.==

###### Digital Humidity Sensors

==A humidity sensor (or hygrometer) senses, measures, and reports both moisture and air temperature. The ratio of moisture in the air to the highest amount of moisture at a particular air temperature is relative humidity. Relative humidity becomes an important factor when looking for comfort.==

![Humidity sensor](https://i0.wp.com/www.electronicsforu.com/wp-contents/uploads/2016/09/humidity-sensor.jpg?resize=212%2C159&ssl=1)

robu.in

<iframe id="aswift_17" style="height: 1px !important; max-height: 1px !important; max-width: 1px !important; width: 1px !important;"><iframe id="google_ads_frame17"></iframe> 

==Humidity sensors work by detecting changes that alter electrical currents or temperature in the air.==

==There are three basic types of humidity sensors:==

- Capacitive
- Resistive
- Thermal

###### **Problem with digital sensors:**

==Digital sensors have a low calculation range. For example, digital temperature sensors such as HYT 271 and SHT series have a lower temperature range.==

![](https://i0.wp.com/iot4beginners.com/wp-content/uploads/2020/05/s-l400.jpg?resize=216%2C209&ssl=1)

www.ebay.com

<iframe id="aswift_18" style="height: 1px !important; max-height: 1px !important; max-width: 1px !important; width: 1px !important;"><iframe id="google_ads_frame18"></iframe> 

==But analog temperature sensors (RTD) have higher resolution (positive and negative temperature). So, This feature makes analog sensors suitable for wide temperature range and stability. The analog output from the sensor is processed by the ADC (Analog to Digital Converter) of the microcontroller.==
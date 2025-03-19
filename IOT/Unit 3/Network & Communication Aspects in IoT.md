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
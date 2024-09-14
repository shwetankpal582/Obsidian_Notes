---
tags:
  - DataStructure
Date: 2024-07-08
Topics:
  - hash function
  - Types of Hash functions
Category: HashTable
---

## What is hash function?
- @ A function that translates keys to array indices is known as a hash function.
- @ A hash function is the a mathematical algorithm that maps data of arbitrary size to a fixed-size value, often called a hash code, hash value, or simply a hash. 
#### Properties of a good hash function:
1. **Deterministic:** The same input will always produce the same output.
2. **Efficient**: The function should be able to process data quickly.
3. **Uniformity** : The output values (hashes) should be uniformly distributed across the output space.
4. **Minimizes Collisions:** Different inputs should produce different outputs as much as possible.
5. **Preimage Resistance:** It should be difficult to reverse the hash function (i.e., to find the input from its hash value).
6. **Small changes in Input Produce Large Changes in Output**: A small change in the input should result in a significantly different hash values.
### Types of Hash Function

1. **Cryptographic Hash Function**:

	- **MD5 (Message Digest Algorithm 5)**: Produces a 128-bit hash value. It is considered broken and suitable for further use due to its vulnerability to hash collisions.
	- **SHA(secure hash Algorithms)** : Includes SHA-0, SHA-1, SHA-2(SHA-224, SHA-256, SHA-384, SHA-512), and SHA-3. These are widely used for security-related applications, with SHA-2 and SHA-3 being the most secure.
	- **HMAC (Hash-based Message Authentication Code)**: Uses a cryptographic hash function along with a secret key to provide data integrity and authenticity.
	
2. **Non-Cryptographic hash Function**:

	- **CRC(Cyclic Redundancy Check)**: Used for error-checking in digital networks and storage devices.
	- **Murmurhash**: known for its speed and uniform distribution, widely used in non-cryptographic application.
	- **CityHash**: Designed for fast hashing of strings, used to Google in various applications.
	- **FNV(Fowler-Noll-Vo)**: Simple and fast, suitable for hash table lookups.
	- **DJB2**: Created by Daniel J. Berstein, used in various open-source projects.

## Applications of Hash Functions
1. **Data Structures**: Hash tables, hash maps, and sets use hash functions to quickly locate a data record.
2. **Data Integrity**: Ensuring data hasn't been altered (e.g., checksums).
3. **Cryptography**: Used in digital signatures, message authentication codes, and other security protocols.
4. **Data Storage and Retrieval**: Efficient data storage and retrieval mechanisms in databases.
5. **Password Storage**: Storing passwords in a hashed form to enhance security.

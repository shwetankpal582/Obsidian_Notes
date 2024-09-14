---
tags:
  - DataStructure
  - hashtable
Date: 
Topics:
  - hash table
  - load factor
  - hash function
Category: HashTable
---

## Hash Table
**Defination** :  A hash table is defined as a data structure used to insert, look up and remove key-value pairs quickly.
- It operates on the hashing concept, where each key is translated by a hash function into a distinct index in an array. The index functions as a storage location for the matching value.
- $ In simple words, It maps the key with the value.

#### What is load factor?
A hash table's load factor is determined by how many elements are kept there in relation to how big the table is. The table may be cluttered and have longer search times and collisions if the load factor is high.
- $ A ideal load factor can be maintained with the use of a good hash function and proper table resizing.

## What is hash function?
- @ A function that translates keys to array indices is known as a hash function.
- @ A hash function is the a mathematical algorithm that maps data of arbitrary size to a fixed-size value, often called a hash code, hash value, or simply a hash. 
[[Hash Function|Learn More....]] 

## Collision Resolution Techniques:
- @ A collision in hashing occurs when two different inputs produce the same hash value.
This can happen because a hash function maps inputs of arbitrary length to a fixed output, so there are more possible inputs than outputs. Collisions are undesirable because they can lead to incorrect data retrieval or data integrity issues.
[[Collision Resolution Techniques|learn more....]]





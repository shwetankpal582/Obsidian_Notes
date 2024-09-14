---
tags:
  - DataStructure
  - CollisionResolutionTechniques
  - hashing
  - hashtable
Date: 2024-07-08
Topics:
  - Collision Resolution Techniques
Category: HashTable
---
## Collision Resolution Techniques

1. **Open Addressing:**
	- **Linear Probing:** When a collision occurs, the algorithm checks the next slot in the array, continuing to check subsequent slots until an empty one is found.
	- **Quadratic Probing:** Similar to linear probing, but instead of checking the next slot, it checks the slot at an increasing quadratic interval.(e.g.$1^2, 2^2, 3^3$, etc).
	- **Double Hashing:** Uses a secondary hash function to determine the interval between probes, reducing clustering further.
2. **Chaining:**
	- **Separate Chaining:** 
		- Each slot in the hash table points to a linked list (or another data structure, such as binary tree) of entries that hash to the same index.
		
3. **Coalesced Hashing:**
	- Combines open addressing and chaining. Colliding entries are placed in the same hash table in a linked manner. A primary area is used for initial insertions, and a secondary overflow area is used for collided entries.
4. **Robin Hood Hashing:**
	- A variant of open addressing where the algorithm attempts to minimize the variance in probe length by ensuring that elements with longer probe sequences displace elements with shorter ones if they collide.
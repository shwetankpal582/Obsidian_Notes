**Problem Statement :**

Geek is learning a new programming language. As data type forms the most fundamental part of a language, Geek is learning them with focus and needs your help.  
Given a data type, help Geek in finding the size of it in byte.

Data Type - **Character, Integer, Long, Float and Double**

**Example 1:**

**Input:** Character
**Output:** 1  
**Explaination:** For java it would be 2 bytes.

**Example 2:**

**Input:** Integer
**Output:** 4

**Your Task:**

Complete the function **dataTypeSize()** which takes a string as input and returns the size of the data type represented by the given string in byte unit.  
Return -1 if the input data type is invalid.  



**Code**


```
# cpp

class Solution {
  public:
    int dataTypeSize(string str) {
        // your code here
        if(str=="Character"){
            return sizeof(char);
        }
        else if(str=="Integer"){
            return sizeof(int);
        }
        else if(str=="Long"){
            return sizeof(long);
        }
        else if(str=="Float"){
            return sizeof(float);
        }
        else if(str=="Double"){
            return sizeof(double);
        }
        else{
            return -1;
        }
    }
};
```


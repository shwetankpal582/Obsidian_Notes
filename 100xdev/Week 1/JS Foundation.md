---
tags:
  - Language
  - JavaScript
Date: 2024 - 12 - 28
Topic:
  - Variables
  - Data Types
  - Loops
Subject: Coding Language
Code:
---
## Variables (let, var, const)
## Data Types (strings, numbers and booleans)
## Loops  (If else, For)


## Variables

### 1. Var 

 It has the [Global scoped](https://www.geeksforgeeks.org/understanding-variable-scopes-in-javascript/#:~:text=types%20of%20scopes-,Global%20Scope,-%E2%80%93%20Scope%20outside%20the) or function scoped. This means:

- If you create a variable outside of a function, you can use it anywhere in your code.
- If you create a variable inside a function, you can only use it within that function.

***Example 1 :***   The below code example explains the use of the var keyword to declare the variables in JavaScript.

```
var a = 10;
console.log(a);
```

**OUTPUT**
![[Pasted image 20241228204531.png]]

***Example 2:***  The below code example explains the use of the var keyword to declare the variables in JavaScript.

```
var a = 10
function f() {
    var b = 20
    console.log(a, b)
}
f();
console.log(a);

```

**OUTPUT**
![[Pasted image 20241228205015.png]]

***Example 3:***  The below example explains the behavior of var variables when declared inside a function and accessed outside of it.

```
function f() {

    // It can be accessible any
    // where within this function
    var a = 10;
    console.log(a)
}
f();

// A cannot be accessible
// outside of function
console.log(a);
```

**OUTPUT**
![[Pasted image 20241228205326.png]]

***Example 4:***  The below code re-declare a variable with same name in the same scope using the var keyword, which gives no error in the case of var keyword.

```
var a = 10

// User can re-declare
// variable using var
var a = 8

// User can update var variable
a = 7 
console.log(a);
```

***OUTPUT***
![[Pasted image 20241228205457.png]]

****Example 4:**** The below code explains the hoisting concept with the var keyword variables.

```
console.log(a);
var a = 10;
```

***OUTPUT***
![[Pasted image 20241228205650.png]]

## 2. Let

The [let keyword](https://www.geeksforgeeks.org/javascript-let/) is an improved version of the [var keyword](https://www.geeksforgeeks.org/javascript-var/).These variables has the [block scope](https://www.geeksforgeeks.org/what-are-block-scoped-variables-and-functions-in-es6/). It can’t be accessible outside the particular code block ({block}).
- The variable is only available inside the block {} where you define it.

****Example 1:***  The below code declares the variable using the let keyword.

```
let a = 10;
function f() {
    let b = 9
    console.log(b);
    console.log(a);
}
f();
```

***OUTPUT***
![[Pasted image 20241228210022.png]]

****Example 2:***  The below code explains the block scope of the variables declared using the let keyword.

```
let a = 10;
function f() {
    if (true) {
        let b = 9

        // It prints 9
        console.log(b);
    }

    // It gives error as it
    // defined in if block
    console.log(b);
}
f()

// It prints 10
console.log(a)
```

**OUTPUT**
![[Pasted image 20241228210521.png]]

****Example 3:*** The below code explains the behavior of let variables when they are re-declared in the same scope.

```
let a = 10

// It is not allowed
let a = 10

// It is allowed
a = 10
```

**OUTPUT**
![[Pasted image 20241228210658.png]]

****Example 4:*** The below code explains the behavior of let variables when they are re-declared in the different scopes.

```
let a = 10
if (true) {
    let a = 9
    console.log(a) // It prints 9
}
console.log(a) // It prints 10
```

**OUTPUT**
![[Pasted image 20241228210828.png]]


****Example 5:*** This code explains the hoisting concept with the let variables.

```
console.log(a);
let a = 10;
```

**OUPUT**
![[Pasted image 20241228210944.png]]

## 3. Const

The [const keyword](https://www.geeksforgeeks.org/javascript-const/) has all the properties that are the same as the [let keyword](https://www.geeksforgeeks.org/javascript-let/), except the user cannot update it and have to assign it with a value at the time of declaration. These variables also have the [block scope](https://www.geeksforgeeks.org/what-are-block-scoped-variables-and-functions-in-es6/). It is mainly used to create constant variables whose values can not be changed once they are initialized with a value.

- const is similar to let, but with one big difference: once you assign a value to a const variable, you can’t change it later. Like ****let****, ****const**** is ****block-scoped****.

***Example 1:*** This code tries to change the value of the const variable.
```
const a = 10;
function f() {
    a = 9
    console.log(a)
}
f();
```

**OUTOUT**
![[Pasted image 20241228211229.png]]

***Example 2:*** This code explains the use of the const keyword to declare the JavaScript objects.

```
const a = {
    prop1: 10,
    prop2: 9
}

// It is allowed
a.prop1 = 3

// It is not allowed
a = {
    b: 10,
    prop2: 9
}
```

**OUPUT**
![[Pasted image 20241228211401.png]]

## **Var** VS **Let** VS **Const**

| **var***                                                                                                        | **let**                                                                                          | **const**                                                                                            |
| --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| The scope of a [__var__](https://www.geeksforgeeks.org/javascript-var/) variable is functional or global scope. | The scope of a [__let__](https://www.geeksforgeeks.org/javascript-let/) variable is block scope. | The scope of a [__const__](https://www.geeksforgeeks.org/javascript-const/) variable is block scope. |
| It can be updated and re-declared in the same scope.                                                            | It can be updated but cannot be re-declared in the same scope.                                   | It can neither be updated or re-declared in any scope.                                               |
| It can be declared without initialization.                                                                      | It can be declared without initialization.                                                       | It cannot be declared without initialization.                                                        |
| It can be accessed without initialization as its default value is “undefined”.                                  | It cannot be accessed without initialization otherwise it will give ‘referenceError’.            | It cannot be accessed without initialization, as it cannot be declared without initialization.       |
| These variables are hoisted.                                                                                    | These variables are hoisted but stay in the temporal dead zone untill the initialization.        | These variables are hoisted but stays in the temporal dead zone until the initialization.            |

## Data Types
	strings, numbers and booleans
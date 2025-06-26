// Example 1 : The below code example explains the use of the var keyword to declare the variables in JavaScript.

// var a = 10;
// console.log(a);

// Example 2: The below code example explains the use of the var keyword to declare the variables in JavaScript.

// var a = 10
// function f() {
//     var b = 20
//     console.log(a, b)
// }
// f();
// console.log(a);

// Example 3: The below example explains the behavior of var variables when declared inside a function and accessed outside of it.

// function f() {

//     // It can be accessible any
//     // where within this function
//     var a = 10;
//     console.log(a)
// }
// f();

// // A cannot be accessible
// // outside of function
// console.log(a);

// Example 4: The below code re-declare a variable with same name in the same scope using the var keyword, which gives no error in the case of var keyword.

// var a = 10

// // User can re-declare
// // variable using var
// var a = 8

// // User can update var variable
// a = 7 
// console.log(a);

// console.log(a);
// var a = 10;


// LET KEYWORD
// Example 1: The below code declares the variable using the let keyword.

// let a = 10;
// function f() {
//     let b = 9
//     console.log(b);
//     console.log(a);
// }
// f();


// Example 2: The below code explains the block scope of the variables declared using the let keyword.


// let a = 10;
// function f() {
//     if (true) {
//         let b = 9

//         // It prints 9
//         console.log(b);
//     }

//     // It gives error as it
//     // defined in if block
//     console.log(b);
// }
// f()

// // It prints 10
// console.log(a)

// Example 3: The below code explains the behaviour of let variables when they are re-declared in the same scope.

// let a = 10

// // It is not allowed
// let a = 10

// // It is allowed
// a = 10

// Example 4: The below code explains the behaviour of let variables when they are re-declared in the different scopes.
// let a = 10
// if (true) {
//     let a = 9
//     console.log(a) // It prints 9
// }
// console.log(a) // It prints 10

// Example 5: This code explains the hoisting concept with the let variables.

// console.log(a);
// let a = 10;


// Const
// Example 1: This code tries to change the value of the const variable.

// const a = 10;
// function f() {
//     a = 9
//     console.log(a)
// }
// f();


// Example 2: This code explains the use of the const keyword to declare the JavaScript objects.

// const a = {
//     prop1: 10,
//     prop2: 9
// }

// // It is allowed
// a.prop1 = 3

// // It is not allowed
// a = {
//     b: 10,
//     prop2: 9
// }

// const ages = [21,22,23,24,25];
// for(let i=0;i<=ages.length;i++){
//     if (ages[i]%2==0){
//         console.log(ages[i]);
//     }
// }

// Object

// const user1 = {
//     firstname : "Shwetank",
//     age : 20
// }
// console.log(user1.firstname);

// Array of obj

const user0 = ["Shwetank", "Haru"]
const user1 = [20,19]

// another way to write arrays in object format
const alluser = [{
    firstname : "Shwetank", 
    age : 20,
    gender : "male"
},
{
    firstname : "Haru",
    age : 19,
    gender : "female"
},
{
    
}]

console.log(alluser);
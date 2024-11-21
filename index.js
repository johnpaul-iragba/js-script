// alert("Hello jsclass");
// console.log("welcome to my website");

// // var
// // let
// // const
// var name = "johnpaul";
// console.log(name);

// let age = 12;
// age = 20;
// console.log(age);

// const email = "johnpaul@gmail.com";
// console.log(email);



// // datatypes
// // primitives
// // string
// let name2 = "james";

// // number
// // integer
// // float
// let age2 = 25
// let myNumber = 0.94

// // boolean
// // true or false
// let isMarried = false;
// let isGudMan = true;

// // undefined
// let notAssigned;

// // null
// let isActive = null;

// // nonprimitive datatypes
// // Array

// let products = ["bag", "shoes", "clothes", "phone", "laptop"]
// console.log(products [3] [2]);


// // object
// let user = {
//     name: "johnpaul",
//     age: 20,
//     email: "johnpaul@gmail.com",
//     isStudent: false
// };

// console.log(user);


// const user2 = {
//     id: 1,
//     firstName: "John",
//     LastName: "Doe",
//     userName: "johndeo123",
//     email: "johndoe@example,com",
//     phone: "+123 467895690",
//     adress: {
//         street: "123 Main st",
//         city: "Lagos",
//         PostalCode: "100001",
//         country: "Nigeria"
//     },
//     dateOfBirth: "1990-01-01",
//     isActive: true,
//     roles: ["user","admin"],
//     LastLogin: "2024-10-14T10:30:00z",
// };


//  Arrow Function
// is a shorter way to write a function using => instead of "function".



const welcomeuser = (name) => `welcome,
${name}`;

console.log(welcomeuser("john"));

// sum up two numbers

let sum = (x,y,z) => x + y +z;
console.groupCollapsed(sum(1,2,3))


// modulus
let mod = (a,b) => a % b;
console.log(mod(1,5))

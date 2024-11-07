// // opaerations in java are special symbol that performs operations on one or more 
// // operads in our js files system.

// // 1. Arithmetic operations
// // addition
// let sum = 5 + 3;
// console.log(sum);

// // subtrations
// let difference = 10 - sum;
// console.log(difference);

// // mutipliation
// let product = sum * difference;
// console.log(product);

// // division
// let quotient = product / 4;
// console.log(quotient);

// // modulus
// let remainder = quotient % 3;
// console.log(remainder);

// //.2 assignment Operators
// // these operators assign values to variables

// // assignment
// let x = 5;
// console.log(x)

// // addition assignment
// let y = 5;
// y += 1;
// console.log(y)

// // substraction assignment
// let z = 10;
// z -= y;
// console.log(z)

// //.3 comparison operators
// // These operators compare values nad return a boolean value

// // Equal
// console.log(5 == "5");

// // strict Equal
// console.log(5 === "5");

// // Not Equal
// console.log(5 != '5');
// let N = 3
// let p = 2

// console.log(N != p)

// // Strict Not Equal
// console.log(5 !== "5");
// let u = "jp"
// let j = 10
// console.log(u !== j)

// // Greater than
// console.log(10 > 5)
// let g = 12
// let k = 10
// let b = g + k
// console.log(k > g)

// // less than
// console.log(3 < 2)
// let l = 12
// let i = 10
// let w = l - i
// console.log(b < w)

// // greater than and equal
// console.log(4 >= 5);
// let r = 6
// let d = 6
// let n = u * 2
// console.log(u >= v)

// let o = v - 3

// console.log(n >= o)


// using logical operators declare four variables that logs boolean value on
// console
// using comments on the vs code editor explian the meaning and how it functions

// && operator
const hasDriverLisence = true;
const hasInsurance  = true;      
const carDrive = hasDriverLisence && hasInsurance ;
console.log(carDrive);

const isAdult = true;
const isHungry = false;
const canEater = isAdult && isHungry;
console.log(canEater);

// || operator
const KnowsHMTL = false ;
const KnowCSS   = true 
const canDesignWebsite = KnowsHMTL || KnowCSS ;
console.log(canDesignWebsite);

const isAdmin = false;
const isSuperUser = false;
const CanAccessPage = isAdmin || isSuperUser ;
console.log(CanAccessPage)
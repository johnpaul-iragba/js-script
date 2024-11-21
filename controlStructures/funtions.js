// funtions
// function is a block of code that performs an action and is
// reuseable.

// types of function
// function declaration
// function express
// arrow function

// 1, function declaration.
function add(a, b){
    return(a+b)
}
const add = add(2,4);
console.log(sum)


function mutiplication(a, b){
    return(a*b)
}
const product = mutiplication(2,4);
console.log(product)

function greet(name){
    console.log(`hello ${name} welcome to our app`)
}
greet("JohnPaul")

const name = "martins"
console.log(`hello ${name}`)
greet("martins")


function greet(name,course){
    console.log(`hello ${name} i am learning ,i am learning  ${course} it is very hard`)
}
greet("johnpaul","JavaScript")

// function Expression

const add2 = function (a,b){
    return a + b
}
const sum2 = add(1,2)
console.log(sum2)

const greet2 = function (name){
    console.log(`Hello ${name}`)
}
 greet2("johnpaul")


 const greet3 = function (name,course,school){
    console.log(`hello ${name} i a lerning ${course} my school name ${school}`)
 }
 greet3("johnpaul","java","new horizon")


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
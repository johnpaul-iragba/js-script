// contorl structure in js is essential for controooling the flow of 
// execution in your code. the allow you to dictate how your
// programme should respond based on conditions.

// 1 conditional Statement
// conditional statement executes a block of code if the specifield
// condition is true or false

// a. If statement 
let temperature = 30;

if( temperature > 25)   {
    console.log('it is a hot day!')
}else {
    console.log('it is a cold day!')
}

const isAdmin = false;
const isSuperUser = false;

if( isAdmin || isSuperUser){
    console.log('you can have access to the app')
}else {
    console.log("you are not allowed to access this app")
}


// write if statement that checkness if someone has paid school 
// fees and also have good health before the person can
// have access to the class, else the person should go back home.

// ypur output shoukd be: welcome to the class or go back home.

// a. statement
const isFees = true;
const isSuperstar = true;

if(isFees || isSuperstar){
    console.log("you")
}

const Paid = true;
const Owning = true;

if(Paid || Owning){
    console.log("Paid")
}else{
    console.log("Owning")
}



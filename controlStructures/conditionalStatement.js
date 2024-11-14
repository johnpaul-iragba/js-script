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

let age = 25;
if (age > 25){
    console.log("your age is above 25")
}else if(age < 25){
    console.log("your age is below 25")
}else {
    console.log("your age is 25")
}

let age1 = 25
switch(age1){
    case age > 25:
    console.log('your age is above 25')
    break;

    case age < 25:
        console.log('your age is below 25')
        break;

        default:
            console,log('your age is 25')
        break;
}

let age2 = 25;
switch(age2){
    case age2 > 25:
        console.log('your age is above 25')
        break;
        case age2 < 25:
        console.log('your age is below 25')
        break;
        default:
            console.log('your age is 25')
            break;
}




let fruit = "apple";
if(fruit === "banana") {
    console.log('we have banana in the store')
}else if(fruit === "orange"){
    console.log("we have orange in our store")
}else if(fruit ==='coconut'){
    console.log('coconut in our store')
}else if(fruit === 'apple'){
    console.log('we have apple in our store')
}else{
    console.log('we do not have any fruit in out store')
}


let fruit1 = 'apple';
switch (fruit1){
    case "banana":
        console.log('it is banana');
        break;
        case 'apple':
            console.log('it is apple');
            break;
        default:
            console.log("we do not have any fruit");    
            break;
}

const actions = ["start", "stop", "pause",]; // First  create n array variable 
let userAction = "start"; // create another variable to single out an item in yhe array
let isloggedIn = true; // this is a variable that declaeres true
switch(true){
    case actions.include(userActions) && isloggedIn: // so if the useAction and tyhe isLogged are both correct then
    console.log("action permitted:" + userAction); // the action will be 'start' which will be console logged
    break;
    case actions.includes(userAction) && !isloggedIn:// but if the useraction is correct and the (!isLogged) which means not LoggedIn which is wrong
        console.log("please log in to perform this action"); // then it will console log "please log in to perform this action"
        break;
        default:
            console.log("no valid case found."); // this can only take place if the subject matter in the switch is false or another thing
}
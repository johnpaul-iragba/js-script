// Loop are used to execute a block of code repeatedly until
// speecific conditions are met.

for (let i = 0; i < 5; i++) {
    console.log("hello from loop" + i);
}

const colors = ["red", "green", "blue", "yellow"]

for (let i = 0; i < colors.length; i++){
    console.log("colors:", colors[i]);
}


const fruit = ['apple', 'orange', 'banana']

for(let i = 0; i < fruit.length; i++){
    console.log("friut:", fruit[i]);
}


const students = [
    {name:       "john", grade: 85},
    {name:  "martins",grade: 92},
    {name: "seyi", grade: 100}
]

for (let i = 0; i < students.length; i++) {
    console.log("students", students[i].name,"Grade:",students[i].grade);
}


const Attribute = [
    {name: "Johnpaul", school: "new Horizon", course:"frontEnd"},
]

for (let i = 0; i < Attribute.length ; i++) {
    console.log("My name is:", Attribute[i].name,"course:",Attribute[i].course, "school:", Attribute[i].school )
}

//while loop
let i = 0;
while ( i < 5){
    console.log("count is:" + i)
    i++
}


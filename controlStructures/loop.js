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
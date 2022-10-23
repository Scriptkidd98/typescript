/* function log(msg) {
    console.log(msg);
}
log("Hello World!");

function doSomething() {
    for(let i = 0; i < 5; i++) { //let is a block scoped variable. var on the other hand is functionally scoped. that means it can be accessed all through the function, which can cause problems
        console.log(i);
    }
    //console.log(i); if i is var instead of let, we would be able to access the i variable here
}

doSomething(); */
/* let count = 5;
count = "a"; //cant reassign different variable type after initialization
 */
/* let a: any;
a = 1;
a = true;

enum Color {Red, Green, Blue};
let background = Color.Blue
console.log(background); */
var msg = "abc";
//let x = msg.endsWith("c");
//console.log(x)
var myname;
var age;
var random;
var person = {
    myname: "Isaac"
};
myname = "Isaac";
age = 24;
console.log(myname, age, person);

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

let msg = "abc";
//let x = msg.endsWith("c");
//console.log(x)

let myname: string; //declaring variable types
let age: number;
let random: any;

type Person  = { //declaring object type as blueprint
  myname: string,
}

let person: Person = { //assiging object blueprint to variable
  myname: "Anon",
}

myname = "Anon"; //initializing variables with their respective types
age = 24;

console.log(myname, age, person);

type x = {
  a: string,
  b: number,
}
type y = x & {
  c: string,
  d: number,
}

let y: y = {
  a:"one",
  b:1,
  c:"two",
  d:2,
}

console.log(y)

interface Persons {
  name: string,
  age: number,
}
interface Guy extends Person {
  role: string,
}
type guy = Persons & {
  role: string,
}
let aname: string;
let anage: number;
let arandom: any;

type Personas  = {
  name: string,
}

let personas: Personas = {
  name: "John Doe",
}

aname = "John Doe";
anage = 24;

console.log(person)
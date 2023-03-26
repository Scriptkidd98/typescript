/* function log(msg) {
    console.log(msg);
}
log("Hello World!");

function doSomething() {
    for(let i = 0; i < 5; i++) { //let is a block scoped variable. var on the other hand is functionally scoped. that means it can be accessed all through the function, which can cause problems if it's initialized anywhere else
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

//console.log(myname, age, person);

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

//console.log(y)

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

//console.log(person)

type Dog = { //object type as a blueprint
  name: string,
  breed: string,
  color: string,
  age: number,
  healthy: boolean
}

let Sophie: Dog = { //initialize the Dog object blueprint and pass to variable
  name: 'Sophie',
  breed: 'Caucasian',
  color: 'Grey & Black & Brown',
  age: 1,
  healthy: true
}

//console.log(typeof(Sophie)); //Sophie variable is an object

/* async function f() {
  let aPromise = new Promise<string>(function(resolve){ //aPromise creates a promise, so like 'I promise you something, just wait for 3 seconds'
    setTimeout(() => {
      resolve('Yo') //after 3 seconds the promise is resolved
    }, 3000);
  });
  let done = await aPromise; //done waits for what aPromise promised it. after 3 seconds aPromise gives done what it promised it 
  console.log(done);
  console.log(await aPromise);
}
f() */

let anArray:number[] = [2, 9, 7, 6, 7];
anArray.map((data) => {
  //console.log(data)
})

const getFullName = (firstName: string, lastName: string): string => { //specify the function return type
  return firstName + " " + lastName;
}
//console.log(getFullName('Isaac', 'Natty'))

const user: {name: string, age: number} = { //creating object, with object type and predefined property types
  name: 'Isaac',
  age: 1
}

interface User { //another way to create object blueprint
  name: string,
  age?: number, //the ? means the age property is not compulsory/mandatory to initialize
  getName(): string //define function with return type
}
const user2: User = {
  name: 'Isaac O',
  age: 1,
  getName() {
      return user2.name
  },
}
//console.log(user2.getName())

type Users = {
  name?: string,
  age?: number,
  dob: number,
  accountType?: string,
  setName(name: string): void;
  calcAge(currentYear: number): void;
  setAccountType(): void;
}

const user1: Users = {
  dob: 1987,
  setName(name) {
    this.name = name;
  },
  calcAge(currentYear) {
    this.age = currentYear - user1.dob
  },
  setAccountType() {
    this.age >= 18 ? this.accountType = 'Adult' : this.accountType = 'Minor'
  }
}
const createUser = (name: string, currentYear: number) => {
  user1.setName(name);
  user1.calcAge(currentYear);
  user1.setAccountType();
}
createUser('David', 2023)

console.log(user1.name);
console.log(user1.age);
console.log(user1.accountType);

const dstArray:string[] = ['One', 'Two', 'Three', 'Four']
const [one, two, three, four] = dstArray;
//console.log(one);

type styles = {
  height: `${number}px`,
  width?: `${number}px` | `${string}px`, //this means the type can either be number or string. | is called a union operator
}

interface StylesInterface {
  height: `${number}px`,
  width?: `${number}px` | `${string}px`,
}

let buttonStyleOne: styles = {
  height: `50px`,
  width: `50px`,
}

let buttonStyleTwo: StylesInterface = {
  height: `50px`,
  width: `50px`,
}

console.log("Height is " + buttonStyleOne.height + " and width is " + buttonStyleOne.width);

const aFunction = (name: string, job: string) => {

}

interface UserInterface {
  name: string
  age: number
}

let userOne: UserInterface | null = null;

console.log("Initial userone is " + userOne);

userOne = {
  name: 'Isaac',
  age: 24
}
console.log("Final userone is " + userOne.name)
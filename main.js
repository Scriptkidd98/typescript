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
var msg = "abc";
//let x = msg.endsWith("c");
//console.log(x)
var myname; //declaring variable types
var age;
var random;
var person = {
    myname: "Anon"
};
myname = "Anon"; //initializing variables with their respective types
age = 24;
console.log(myname, age, person);
var y = {
    a: "one",
    b: 1,
    c: "two",
    d: 2
};
console.log(y);
var aname;
var anage;
var arandom;
var personas = {
    name: "John Doe"
};
aname = "John Doe";
anage = 24;
console.log(person);
var Sophie = {
    name: 'Sophie',
    breed: 'Caucasian',
    color: 'Grey & Black & Brown',
    age: 1,
    healthy: true
};
console.log(typeof (Sophie));


async function f() {
    let aPromise = new Promise(function(resolve){ //aPromise creates a promise, so like 'I promise you something, just wait for 3 seconds'
        setTimeout(() => {
            resolve('Yo') //after 3 seconds the promise is resolved
        }, 3000);
    });
    let done = await aPromise; //done waits for what aPromise promised it. after 3 seconds aPromise gives done what it promised it 
    console.log(done)
    console.log(await aPromise);
}
f();

/* function test() {
    setTimeout(() => {console.log('After 3 seconds')}, 3000);
    console.log('Immediately')
}
test() */
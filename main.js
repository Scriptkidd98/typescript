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
var y = {
    a: "one",
    b: 1,
    c: "two",
    d: 2
};
var aname;
var anage;
var arandom;
var personas = {
    name: "John Doe"
};
aname = "John Doe";
anage = 24;
var Sophie = {
    name: 'Sophie',
    breed: 'Caucasian',
    color: 'Grey & Black & Brown',
    age: 1,
    healthy: true
};
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
var anArray = [2, 9, 7, 6, 7];
anArray.map(function (data) {
    //console.log(data)
});
var getFullName = function (firstName, lastName) {
    return firstName + " " + lastName;
};
//console.log(getFullName('Isaac', 'Natty'))
var user = {
    name: 'Isaac',
    age: 1
};
var user2 = {
    name: 'Isaac O',
    age: 1,
    getName: function () {
        return user2.name;
    }
};
var user1 = {
    dob: 1987,
    setName: function (name) {
        this.name = name;
    },
    calcAge: function (currentYear) {
        this.age = currentYear - user1.dob;
    },
    setAccountType: function () {
        this.age >= 18 ? this.accountType = 'Adult' : this.accountType = 'Minor';
    }
};
var createUser = function (name, currentYear) {
    user1.setName(name);
    user1.calcAge(currentYear);
    user1.setAccountType();
};
createUser('David', 2023);
console.log(user1.name);
console.log(user1.age);
console.log(user1.accountType);
var dstArray = ['One', 'Two', 'Three', 'Four'];
var one = dstArray[0], two = dstArray[1], three = dstArray[2], four = dstArray[3];
//console.log(one);

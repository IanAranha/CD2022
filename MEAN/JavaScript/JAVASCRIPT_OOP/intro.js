function personConstructor (name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log('Hello my name is ' + this.name + ' and I am ' + this.age + ' years old!')
    }
}
// create the 'steve' instance, run greet
let steve = new personConstructor("Steve", 27);
console.log(steve)
steve.greet()

// create the 'anika' instance, run greet. note that it is different.
var anika = new personConstructor("Anika", 33);
anika.greet()

// create the "emily" instance and run greet using the new instance
var emily = new personConstructor("Emily", 30)
// emily.greet() = function(){
//     console.log("My name is " + this.name + " and I'm the coolest ever!");
// }
var emily = new personConstructor("Emily", 22);
// using this & new, we can now refer to the 'name' attribute of our instance!
emily.greet = function() {
    console.log("My name is " + this.name + " and I'm the coolest ever!")
}

emily.greet()
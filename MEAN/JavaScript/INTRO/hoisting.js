var foo = "bar";
function magic(){
    foo = "hello world";
    console.log(foo);
    var foo;
}
magic();
console.log(foo);

//**************************************************************************************

// Exercise 1.

console.log(hello);                                   
var hello = 'world';                                 

//var hello is hoisted
//console.log(hello) ==> will show undefined
//hello is assigned the string "world"


//**************************************************************************************

//Exercise 2.
var needle = 'haystack';
test();
function test(){
	var needle = 'magnet';
	console.log(needle);
}

// var needle is assigned "haystack"
// test is called 
// inside the function block test, var needle is assigned "magnet"
// console will print "magnet"


//**************************************************************************************

//Exercise 3

var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);

// variable brendan is assigned value "super cool"
// program will then print "supercool"

//**************************************************************************************

//Exercise 4

var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}

// variable food is assigned "chicken"
// program will print "chicken" to console.log
// function eat() will be called.
// inside function variable food is hoisted.
// food is assigned "half-chicken"
// program console.logs "half chicken"

//**************************************************************************************

//Exercise 5

mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);


// variable mean is hoisted...but has no value so will throw an error...because the function hasn't been assigned to it yet.

//**************************************************************************************

//Exercise 6

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);

// variable genre will be hoisted...with no value
// console.log will throw undefined           <=======
// genre is then assigned value "disco"
// rewind is called
// inside the function genre is hoisted.
// it is assigned value of rock.
//console log will print rock
//genre is assigned r&b
//console log will now print "r&b"
//console.log will print disco...because it is outside the function now.

//**************************************************************************************

//Exercise 7

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);

//dojo is declared and assigned value of "san jose"
//line 120 will print "san jose"
//line 121 calls function learn
//inside function, var dojo is hoisted from line 125 to top
//line 123 dojo is assigned valye of "seattle"
//line 124 console prints value of "seattle"
//lube 125, dojo is reassinged value of "burbank"
//line 126, console prints "burbank"
//line 128 console prints "san jose"

//**************************************************************************************

//Exercise 8

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
}

//{
//     name: "Chicago",
//     students: 65,
//     hiring: true
// }

// will throw an error becasue dojo is a constant and cannot be reassigned a new value.
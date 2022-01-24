// This is a function that just prints the result of another list of instructions
function printResult(doSomething) {
    var result = doSomething();         // store the return value of the callback parameter
    console.log(result);                // print the result!
   }

printResult(function returnFive(){
    return 5
    }
)  

// this should print "5"
   
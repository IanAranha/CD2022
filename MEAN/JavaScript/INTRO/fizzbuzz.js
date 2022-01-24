function fizzbuzz(n){
    console.log(typeof(n));
    if(typeof(n) != "number" && n <= 0){
        return null
    } else{
        for(var i=1; i<=n; i++){
            if(i % 15 == 0){
                console.log("FizzBuzz")
            }
            else if(i % 3 == 0){
                console.log("Fizz")
            }
            else if(i % 5 == 0){
                console.log("Buzz")
            }
            else {
                console.log(i)
            }
        }

    }
}

console.log(fizzbuzz("ten"))
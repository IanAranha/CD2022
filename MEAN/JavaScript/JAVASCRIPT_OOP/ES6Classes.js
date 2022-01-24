class Dot_A{
    constructor(x, y){
        this.x = x;
        this.y = y;
        console.log("You created a DOT!")
    }
}

const dot1 = new Dot_A(10,10);


//ES5 vs ES6    (Same output)

function Dot_B(x, y){
    this.x = x;
    this.y = y;
}
Dot_B.prototype.showLocation = function(){
    console.log(`This dot is at x: ${this.x} and y: ${this.y}`)
}

var dot2 = new Dot_B(20, 30)
dot2.showLocation()

class Dot_C{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    showLocation(){
        console.log(`This dot is at x: ${this.x} and y: ${this.y}`)
    }
}

const dot3 = new Dot_C(25, 35)
dot3.showLocation()

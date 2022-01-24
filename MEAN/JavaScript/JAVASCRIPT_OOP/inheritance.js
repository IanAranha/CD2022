// Parent Dot class
class Dot {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    showLocation() {
        console.log(`This Dot is at x ${this.x} and y ${this.y}`);
        console.log(`This ${this.constructor.name} is at x ${this.x } and y ${this.y}`) //
    }

    parentFunction(){
        return `This is coming from the parent!`
    }
}

// Child Circle class
class Circle extends Dot {
    constructor(x, y, radius) {
        super(x, y);
        this.radius = radius;
    }

    childFunction(){
        const message = super.parentFunction()
        console.log(message)
    }
}

// we can now create Circles
const circle1 = new Circle(33, 33, 33);

// same attributes as a Dot, plus a radius
console.log(circle1);

// and Circles can access Dot methods
circle1.showLocation();

const circle2 = new Circle(1,2,3)
circle2.childFunction()


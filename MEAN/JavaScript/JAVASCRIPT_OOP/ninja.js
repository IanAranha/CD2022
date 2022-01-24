function Ninja(name){
    this.name = name
    this.health = 100
    var speed = 3;
    var strength = 3;

    this.showStats = function(){
        console.log(`Stats:\n\tName: ${this.name}\n\tStrength: ${strength}\n\tSpeed: ${speed}\n\tHealth: ${this.health} `)
    }

    this.kick = function(ninja){
        if(ninja instanceof Ninja){
            let damage = strength * 15
            ninja.health -= damage
            console.log(`${ninja.name} was kicked by ${this.name} and lost ${damage} points!`)
        } else {
            console.log(`${ninja} is not a Ninja and cannot be kicked`)
        }
    }
}


Ninja.prototype.sayName = function(){
    console.log(`My name is ${this.name}`)
}

Ninja.prototype.drinkSake = function(){
    this.health+=10;
}

Ninja.prototype.punch = function(ninja){
    if(ninja instanceof Ninja){
        ninja.health -= 5;
        console.log(`${ninja.name} was punched by ${this.name} and lost 5 health!`)
    } else {
        console.log(`${ninja} is not a Ninja and cannot be punched`)
    }
}

var angelo = new Ninja("Angelo")
var miko = new Ninja("Niko")
angelo.sayName()
miko.sayName()
console.log("************************************************************")
console.log("Drinking Sake......")
angelo.showStats()
angelo.drinkSake();
angelo.showStats()
console.log("************************************************************")
console.log("Angelo punching Miko")
miko.showStats()
angelo.punch(miko)
miko.showStats()
console.log("************************************************************")
console.log("Miko kicking Angelo")
angelo.showStats()
miko.kick(angelo)
angelo.showStats()
miko.kick("Donatello")
angelo.punch("Petra")
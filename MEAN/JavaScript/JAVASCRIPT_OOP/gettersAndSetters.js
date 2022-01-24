class Pizza{
    pizzaConstructor(radius, slices){
        this.radius = radius;
        this._slices = slices;
    }

    get slices(){
        return this._slices
    }

    set slices(slices){
        this._slices = slices
    }
}

const pie = new Pizza(10, 8)
console.log(pie.slices)

pie.slices = 12
console.log(pie.slices)
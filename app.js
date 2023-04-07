class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    };
        honk(){
        console.log('beep!');
    }
        toString(){
            console.log(`the vehicle is a ${this.make} ${this.model} from ${this.year}`);
        }
};

class Car extends Vehicle{
    constructor(make, model, year){
        super();
        this.make = make;
        this.model = model;
        this.year = year;
    };
    numWheels(){
        console.log(4);
    }
}

class MotorCycle extends Vehicle{
    constructor(make, model, year){
        super();
        this.make = make;
        this.model = model;
        this.year = year;
    };
    numWheels(){
        console.log(2);
    }
    revEngine(){
        console.log('VROOM!!')
    };
}

class Garage{
  constructor(capacity){
    this.vehicles = [];
    this.capacity = capacity;
  };
    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
            return 'Only vehicles are allowed here';
        };
        if(this.vehicles.length >= this.capacity) {
            return "Sorry, we're full";
        };
        this.vehicles.push(newVehicle);
        return 'Vehicle added!';
    };
};



let myFirstVehicle = new Vehicle('honda', 'monster truck', 1999);

let myFirstCar = new Car("Toyota", "Corolla", 2005);

let myFirstMotorcycle = new MotorCycle("Honda", "Nighthawk", 2000);

let garage = new Garage(2);
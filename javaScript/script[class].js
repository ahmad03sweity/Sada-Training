class Car{
    #engineSize =2000;
    constructor(make,model,year){
        this.make = make;
        this.model=model;
        this.year=year;
    }
    set setEngineSize(engineSize){
        this.engineSize=engineSize;
    }
    printCard(){
        console.log(`Car Make: ${this.make}\nCar Model: ${this.model}\nCar Year: ${this.year}\nEngine Size: ${this.#engineSize}`);
    }
}
// const engineSize = 2000;
const car1 = new Car("BMW", "X5",2023 );
car1.year = 2022;
car1.printCard();
const car2 = new Car("mercedes","")
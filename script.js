class Car {
    brand;
    model;
    carYear;
    distance;
    countOfFuel;
    _master;

    constructor(brand, model, carYear, distance, countOfFuel, master) {
            this.brand = brand;
            this.model = model;
            this.carYear = carYear;
            this.distance = distance;
            this.countOfFuel = countOfFuel;
            this._master = master;
    };

    getConsumptionFuel() {
        return this.countOfFuel / this.distance * 100;
    };

    get master() {
        return this._master;
    };
};

const myCar = new Car('Toiota', 'Ipsum', '2004', 200, 20, 'Anna');
console.log(myCar.getConsumptionFuel());
console.log(myCar.master);
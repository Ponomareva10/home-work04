class Car {
    brand;
    model;
    carYear;
    distance;
    countOfFuel;

    constructor(brand, model, carYear, distance, countOfFuel) {
            this.brand = brand;
            this.model = model;
            this.carYear = carYear;
            this.distance = distance;
            this.countOfFuel = countOfFuel;
    };

    getConsumptionFuel() {
        return this.countOfFuel / this.distance * 100;
    };
};

const myCar = new Car('Toiota', 'Ipsum', '2004', 200, 20);
console.log(myCar.getConsumptionFuel())
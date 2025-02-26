class Owner {
    get surname() {
        return this._surname;
    }
    set surname(value) {
        this._surname = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get middle_name() {
        return this._middle_name;
    }
    set middle_name(value) {
        this._middle_name = value;
    }
    get doc_series() {
        return this._doc_series;
    }
    set doc_series(value) {
        this._doc_series = value;
    }
    get doc_number() {
        return this._doc_number;
    }
    set doc_number(value) {
        this._doc_number = value;
    }
    constructor(name, surname, middle_name, doc_series, doc_number) {
        this._surname = surname;
        this._name = name;
        this._middle_name = middle_name;
        this._doc_series = doc_series;
        this._doc_number = doc_number;
    }
    ownerInfo() {
        return 'name: ' + this._name + '\n surname: ' + this._surname + '\n middle name: ' + this._middle_name;
    }
}
class Vehicle {
    get VIN() {
        return this._VIN;
    }
    set VIN(value) {
        this._VIN = value;
    }
    get Reg_number() {
        return this._Reg_number;
    }
    set Reg_number(value) {
        this._Reg_number = value;
    }
    set owner(value) {
        this._owner = value;
    }
    constructor(brand, model, year, VIN, Reg_number, owner) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this._VIN = VIN;
        this._Reg_number = Reg_number;
        this._owner = owner;
    }
    vehicleInfo() {
        return "brand: " + this.brand + '\nmodel: ' + this.model + '\nyear: ' + this.year + '\nVIN: ' + this._VIN + '\nregistration number: ' + this._Reg_number;
    }
    getVehicleDetailsJSON() {
        const vehicleDetails = {
            VIN: this._VIN,
            owner: this._owner.ownerInfo(),
            Reg_number: this._Reg_number
        };
        return JSON.stringify(vehicleDetails);
    }
}
class MyStorage {
    constructor() {
        this.vehicles = [];
    }
    addVehicle(vehicle) {
        this.vehicles.push(vehicle);
    }
    sortByBrand() {
        this.vehicles.sort((a, b) => a.brand.localeCompare(b.brand));
    }
    showAll() {
        this.vehicles.forEach(vehicle => {
            console.log(vehicle.vehicleInfo());
            console.log('--------------------------');
        });
    }
    findVehiclesByModelEnd(modelEnd) {
        return this.vehicles.filter(vehicle => vehicle.model.endsWith(modelEnd));
    }
}
const owner1 = new Owner('John', 'Doe', 'M', 1234, 567890);
const owner2 = new Owner('Jane', 'Smith', 'L', 5678, 123456);
const owner3 = new Owner('Alice', 'Johnson', 'B', 8765, 432109);
const vehicle1 = new Vehicle('Toyota', 'Corolla', 2020, '1HGBH41JXMN109186', 'ABC123', owner1);
const vehicle2 = new Vehicle('BMW', 'X5', 2022, '2HGBH41JXMN109187', 'XYZ789', owner2);
const vehicle3 = new Vehicle('Audi', 'A3', 2021, '3HGBH41JXMN109188', 'LMN456', owner3);
const vehicle4 = new Vehicle('Mercedes', 'E-Class', 2021, '4HGBH41JXMN109189', 'DEF123', owner1);
const storage = new MyStorage();
storage.addVehicle(vehicle1);
storage.addVehicle(vehicle2);
storage.addVehicle(vehicle3);
storage.addVehicle(vehicle4);
console.log('До сортировки:');
storage.showAll();
storage.sortByBrand();
console.log('После сортировки:');
storage.showAll();
console.log('Транспортные средства, модели которых заканчиваются на "X5":');
const vehiclesWithX5 = storage.findVehiclesByModelEnd('X5');
vehiclesWithX5.forEach(vehicle => {
    console.log(vehicle.vehicleInfo());
    console.log('==========================');
});
console.log(vehicle1.getVehicleDetailsJSON());
console.log(vehicle2.getVehicleDetailsJSON());

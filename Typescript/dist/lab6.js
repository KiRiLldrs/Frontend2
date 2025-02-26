var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function sealed(constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
function Up(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        const result = originalMethod.apply(this, args);
        if (typeof result === "string") {
            return result.toUpperCase();
        }
        return result;
    };
    return descriptor;
}
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
let Vehicle = class Vehicle {
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
};
__decorate([
    Up
], Vehicle.prototype, "vehicleInfo", null);
Vehicle = __decorate([
    sealed
], Vehicle);
const car = new Vehicle("Toyota", "Corolla", 2022, "1HGBH41JXMN109186", "ABC123", new Owner("John", "Doe", "Middle", 1234, 567890));
car.newProperty = "New Value";
//console.log(car.newProperty);
console.log(car);
console.log(car.vehicleInfo());

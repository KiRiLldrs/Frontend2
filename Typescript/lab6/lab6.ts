function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
    }
  
  function Up(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
  
    descriptor.value = function (...args: any[]) {
        const result = originalMethod.apply(this, args);
        if (typeof result === "string") {
            return result.toUpperCase();
        }
        return result;
    };
  
    return descriptor; 
  }

interface IOwner{
    surname: string;
    name: string;
    middle_name: string;
    doc_series: number;
    doc_number: number;
    ownerInfo: () => string;
}

interface IVehicle{
    brand: string;
    model: string;
    year: number;
    VIN: string;
    Reg_number: string;
    owner: IOwner;
    vehicleInfo: () => string;
}

class Owner implements IOwner{
    private _surname: string;
    private _name: string;
    private _middle_name: string;
    private _doc_series: number;
    private _doc_number: number;

    get surname():string{
        return this._surname;
    }

    set surname(value: string){
        this._surname = value;
    }

    get name():string{
        return this._name;
    }

    set name(value: string){
        this._name = value;
    }

    get middle_name():string{
        return this._middle_name;
    }

    set middle_name(value: string){
        this._middle_name = value;
    }

    get doc_series():number{
        return this._doc_series;
    }

    set doc_series(value: number){
        this._doc_series = value;
    }

    get doc_number():number{
        return this._doc_number;
    }

    set doc_number(value: number){
        this._doc_number = value;
    }

    constructor(name: string, surname: string, middle_name: string, doc_series: number, doc_number: number){
        this._surname = surname;
        this._name = name;
        this._middle_name = middle_name;
        this._doc_series = doc_series;
        this._doc_number = doc_number;
    }

    ownerInfo(): string {
        return 'name: ' + this._name + '\n surname: ' + this._surname + '\n middle name: ' + this._middle_name;
    }

}

@sealed
class Vehicle implements IVehicle{ 
    private _VIN: string;
    private _Reg_number: string;
    private _owner: IOwner;

    brand: string;
    model: string;
    year: number;

    get VIN(): string{
        return this._VIN;
    }
    set VIN(value: string){
        this._VIN = value;
    }

    get Reg_number(): string{
        return this._Reg_number;
    }
    set Reg_number(value: string){
        this._Reg_number = value;
    }

    set owner(value: IOwner){
        this._owner = value;
    }

    constructor(brand: string, model: string, year: number, VIN: string, Reg_number: string, owner: IOwner){
        this.brand = brand;
        this.model = model;
        this.year = year;
        this._VIN = VIN;
        this._Reg_number = Reg_number;
        this._owner = owner;
    }

    @Up
    vehicleInfo(): string{
        return "brand: " + this.brand +'\nmodel: ' + this.model + '\nyear: ' + this.year + '\nVIN: ' + this._VIN + '\nregistration number: ' + this._Reg_number;
    }

}

const car = new Vehicle("Toyota", "Corolla", 2022, "1HGBH41JXMN109186", "ABC123", new Owner("John", "Doe", "Middle", 1234, 567890));
(car as any).newProperty = "New Value";

console.log(car);
console.log(car.vehicleInfo());

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
    getVehicleDetailsJSON: () => string;
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

    vehicleInfo(): string{
        return "brand: " + this.brand +'\nmodel: ' + this.model + '\nyear: ' + this.year + '\nVIN: ' + this._VIN + '\nregistration number: ' + this._Reg_number;
    }

    getVehicleDetailsJSON(): string{
        const vehicleDetails = {
            VIN: this._VIN,
            owner: this._owner.ownerInfo(),
            Reg_number: this._Reg_number
        }
        return JSON.stringify(vehicleDetails);
    }
}

//1

interface IStorage {
    sortByBrand(): void;
    showAll(): void;
}

class MyStorage implements IStorage {
    private vehicles: Vehicle[] = [];


    addVehicle(vehicle: Vehicle): void {
        this.vehicles.push(vehicle);
    }


    sortByBrand(): void {
        this.vehicles.sort((a, b) => a.brand.localeCompare(b.brand));
    }

    showAll(): void {
        this.vehicles.forEach(vehicle => {
            console.log(vehicle.vehicleInfo());
            console.log('--------------------------');
        });
    }

    findVehiclesByModelEnd(modelEnd: string): Vehicle[] {
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

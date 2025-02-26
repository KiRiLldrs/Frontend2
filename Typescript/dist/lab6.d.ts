declare function sealed(constructor: Function): void;
declare function Up(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor;
interface IOwner {
    surname: string;
    name: string;
    middle_name: string;
    doc_series: number;
    doc_number: number;
    ownerInfo: () => string;
}
interface IVehicle {
    brand: string;
    model: string;
    year: number;
    VIN: string;
    Reg_number: string;
    owner: IOwner;
    vehicleInfo: () => string;
}
declare class Owner implements IOwner {
    private _surname;
    private _name;
    private _middle_name;
    private _doc_series;
    private _doc_number;
    get surname(): string;
    set surname(value: string);
    get name(): string;
    set name(value: string);
    get middle_name(): string;
    set middle_name(value: string);
    get doc_series(): number;
    set doc_series(value: number);
    get doc_number(): number;
    set doc_number(value: number);
    constructor(name: string, surname: string, middle_name: string, doc_series: number, doc_number: number);
    ownerInfo(): string;
}
declare class Vehicle implements IVehicle {
    private _VIN;
    private _Reg_number;
    private _owner;
    brand: string;
    model: string;
    year: number;
    get VIN(): string;
    set VIN(value: string);
    get Reg_number(): string;
    set Reg_number(value: string);
    set owner(value: IOwner);
    constructor(brand: string, model: string, year: number, VIN: string, Reg_number: string, owner: IOwner);
    vehicleInfo(): string;
}
declare const car: Vehicle;

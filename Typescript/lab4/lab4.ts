export namespace Transport{

    export enum Documents{
        PASSPORT = "Паспорт",
        FOREIGN_PASSPORT = "Загранпаспорт",
        BIRTH_CERTIFICATE ="Свидетельство о рождении"
    }

    export enum BodyTypes{
        SEDAN = "Седан",
        HATCHBACK = "Хэтчбек",
        COUPE = "Купе",
        VAN = "Фургон"
    }

    export enum AutoClass{
        SUV = "Внедорожник",
        LIMOUSINE = "Лимузин",
        SPORT = "Спортивный"
    }


    export interface IOwner{
        surname: string;
        name: string;
        middle_name: string;
        doc_type: Documents;
        doc_series: number;
        doc_number: number;
        ownerInfo: () => string;
    }

    export interface IVehicle{
        brand: string;
        model: string;
        year: number;
        VIN: string;
        Reg_number: string;
        owner: IOwner;
        vehicleInfo: () => string;
    }

    export class Owner implements IOwner{
        private _surname: string;
        private _name: string;
        private _middle_name: string;
        private _doc_type: Documents;
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

        get doc_type(): Documents{
            return this._doc_type;
        }

        set doc_type(value: Documents){
            this._doc_type = value;
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

        constructor(name: string, surname: string, middle_name: string, doc_type: Documents, doc_series: number, doc_number: number){
            this._surname = surname;
            this._name = name;
            this._middle_name = middle_name;
            this._doc_type = doc_type;
            this._doc_series = doc_series;
            this._doc_number = doc_number;
        }

        ownerInfo(): string {
            return 'name: ' + this._name + '\n surname: ' + this._surname + '\n middle name: ' + this._middle_name + '\n type of documents: ' + this._doc_type;
        }

    }

    export class Vehicle implements IVehicle{ 
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
    }

    export interface ICar extends IVehicle{
        body_type: BodyTypes;
        auto_class: AutoClass;
    }

    export class Car extends Vehicle implements ICar{
        body_type: BodyTypes;
        auto_class: AutoClass;

        constructor(brand: string, model: string, year: number, VIN: string, Reg_number: string, owner: IOwner, body_type: BodyTypes, auto_class: AutoClass){
            super(brand, model, year, VIN, Reg_number, owner);
            this.body_type = body_type;
            this.auto_class = auto_class;
        }

        vehicleInfo(): string{
            return super.vehicleInfo() + '\nBody type: ' + this.body_type + '\nClass of Auto: ' + this.auto_class;
        }

    }

    export interface IMotorbike extends IVehicle{
        frame_type: string;
        sport: boolean;
    }

    export class Motorbike extends Vehicle implements IMotorbike{
        frame_type: string;
        sport: boolean;

        constructor(brand: string, model: string, year: number, VIN: string, Reg_number: string, owner: IOwner, frame_type: string, sport: boolean){
            super(brand, model, year, VIN, Reg_number, owner);
            this.frame_type = frame_type;
            this.sport = sport;
        }

        vehicleInfo(): string {
            if (this.sport === true){
                return super.vehicleInfo() + '\nFrame type: ' + '\nSport bike';
            } else{
                return super.vehicleInfo() + '\nFrame type: '+ this.frame_type + '\nNot a sport bike'
            }
        }
    }

    export interface IVehicleStorage<T extends IVehicle>{
        created: Date;
        data: T[];

        getAll:() => T[];

        save: (data: T) => void;
        remove: (index: number) => void;
    }

    export class VehicleStorage<T extends IVehicle> implements IVehicleStorage<T>{
        private readonly _created: Date;
        private _data: T[];

        get created(): Date{
            return this._created;
        }

        get data(): T[]{
            return this._data;
        }

        constructor() {
            this._created = new Date();
            this._data = [];
        }

        getAll(): T[]{
            return this._data;
        }

        save(data: T): void{
            this._data.push(data);
        }

        remove(index: number): void{
            this._data.splice(index,1);
        }
    }
}

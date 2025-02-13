export declare namespace Transport {
    enum Documents {
        PASSPORT = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442",
        FOREIGN_PASSPORT = "\u0417\u0430\u0433\u0440\u0430\u043D\u043F\u0430\u0441\u043F\u043E\u0440\u0442",
        BIRTH_CERTIFICATE = "\u0421\u0432\u0438\u0434\u0435\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u043E \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0438"
    }
    enum BodyTypes {
        SEDAN = "\u0421\u0435\u0434\u0430\u043D",
        HATCHBACK = "\u0425\u044D\u0442\u0447\u0431\u0435\u043A",
        COUPE = "\u041A\u0443\u043F\u0435",
        VAN = "\u0424\u0443\u0440\u0433\u043E\u043D"
    }
    enum AutoClass {
        SUV = "\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A",
        LIMOUSINE = "\u041B\u0438\u043C\u0443\u0437\u0438\u043D",
        SPORT = "\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0439"
    }
    interface IOwner {
        surname: string;
        name: string;
        middle_name: string;
        doc_type: Documents;
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
    class Owner implements IOwner {
        private _surname;
        private _name;
        private _middle_name;
        private _doc_type;
        private _doc_series;
        private _doc_number;
        get surname(): string;
        set surname(value: string);
        get name(): string;
        set name(value: string);
        get middle_name(): string;
        set middle_name(value: string);
        get doc_type(): Documents;
        set doc_type(value: Documents);
        get doc_series(): number;
        set doc_series(value: number);
        get doc_number(): number;
        set doc_number(value: number);
        constructor(name: string, surname: string, middle_name: string, doc_type: Documents, doc_series: number, doc_number: number);
        ownerInfo(): string;
    }
    class Vehicle implements IVehicle {
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
    interface ICar extends IVehicle {
        body_type: BodyTypes;
        auto_class: AutoClass;
    }
    class Car extends Vehicle implements ICar {
        body_type: BodyTypes;
        auto_class: AutoClass;
        constructor(brand: string, model: string, year: number, VIN: string, Reg_number: string, owner: IOwner, body_type: BodyTypes, auto_class: AutoClass);
        vehicleInfo(): string;
    }
    interface IMotorbike extends IVehicle {
        frame_type: string;
        sport: boolean;
    }
    class Motorbike extends Vehicle implements IMotorbike {
        frame_type: string;
        sport: boolean;
        constructor(brand: string, model: string, year: number, VIN: string, Reg_number: string, owner: IOwner, frame_type: string, sport: boolean);
        vehicleInfo(): string;
    }
    interface IVehicleStorage<T extends IVehicle> {
        created: Date;
        data: T[];
        getAll: () => T[];
        save: (data: T) => void;
        remove: (index: number) => void;
    }
    class VehicleStorage<T extends IVehicle> implements IVehicleStorage<T> {
        private readonly _created;
        private _data;
        get created(): Date;
        get data(): T[];
        constructor();
        getAll(): T[];
        save(data: T): void;
        remove(index: number): void;
    }
}

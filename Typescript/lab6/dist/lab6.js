"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transport = void 0;
function seal(constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
function toUpperCase(target, propertyKey, descriptor) {
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
var Transport;
(function (Transport) {
    let Documents;
    (function (Documents) {
        Documents["PASSPORT"] = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442";
        Documents["FOREIGN_PASSPORT"] = "\u0417\u0430\u0433\u0440\u0430\u043D\u043F\u0430\u0441\u043F\u043E\u0440\u0442";
        Documents["BIRTH_CERTIFICATE"] = "\u0421\u0432\u0438\u0434\u0435\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u043E \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0438";
    })(Documents = Transport.Documents || (Transport.Documents = {}));
    let BodyTypes;
    (function (BodyTypes) {
        BodyTypes["SEDAN"] = "\u0421\u0435\u0434\u0430\u043D";
        BodyTypes["HATCHBACK"] = "\u0425\u044D\u0442\u0447\u0431\u0435\u043A";
        BodyTypes["COUPE"] = "\u041A\u0443\u043F\u0435";
        BodyTypes["VAN"] = "\u0424\u0443\u0440\u0433\u043E\u043D";
    })(BodyTypes = Transport.BodyTypes || (Transport.BodyTypes = {}));
    let AutoClass;
    (function (AutoClass) {
        AutoClass["SUV"] = "\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A";
        AutoClass["LIMOUSINE"] = "\u041B\u0438\u043C\u0443\u0437\u0438\u043D";
        AutoClass["SPORT"] = "\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0439";
    })(AutoClass = Transport.AutoClass || (Transport.AutoClass = {}));
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
        get doc_type() {
            return this._doc_type;
        }
        set doc_type(value) {
            this._doc_type = value;
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
        constructor(name, surname, middle_name, doc_type, doc_series, doc_number) {
            this._surname = surname;
            this._name = name;
            this._middle_name = middle_name;
            this._doc_type = doc_type;
            this._doc_series = doc_series;
            this._doc_number = doc_number;
        }
        ownerInfo() {
            return 'name: ' + this._name + '\n surname: ' + this._surname + '\n middle name: ' + this._middle_name + '\n type of documents: ' + this._doc_type;
        }
    }
    Transport.Owner = Owner;
    let Vehicle = (() => {
        let _classDecorators = [seal];
        let _classDescriptor;
        let _classExtraInitializers = [];
        let _classThis;
        var Vehicle = _classThis = class {
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
            //@toUpperCase
            get _brand() {
                return this.brand;
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
        __setFunctionName(_classThis, "Vehicle");
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            Vehicle = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        })();
        return Vehicle = _classThis;
    })();
    Transport.Vehicle = Vehicle;
    class Car extends Vehicle {
        constructor(brand, model, year, VIN, Reg_number, owner, body_type, auto_class) {
            super(brand, model, year, VIN, Reg_number, owner);
            this.body_type = body_type;
            this.auto_class = auto_class;
        }
        vehicleInfo() {
            return super.vehicleInfo() + '\nBody type: ' + this.body_type + '\nClass of Auto: ' + this.auto_class;
        }
    }
    Transport.Car = Car;
    class Motorbike extends Vehicle {
        constructor(brand, model, year, VIN, Reg_number, owner, frame_type, sport) {
            super(brand, model, year, VIN, Reg_number, owner);
            this.frame_type = frame_type;
            this.sport = sport;
        }
        vehicleInfo() {
            if (this.sport === true) {
                return super.vehicleInfo() + '\nFrame type: ' + '\nSport bike';
            }
            else {
                return super.vehicleInfo() + '\nFrame type: ' + this.frame_type + '\nNot a sport bike';
            }
        }
    }
    Transport.Motorbike = Motorbike;
    class VehicleStorage {
        get created() {
            return this._created;
        }
        get data() {
            return this._data;
        }
        constructor() {
            this._created = new Date();
            this._data = [];
        }
        getAll() {
            return this._data;
        }
        save(data) {
            this._data.push(data);
        }
        remove(index) {
            this._data.splice(index, 1);
        }
    }
    Transport.VehicleStorage = VehicleStorage;
})(Transport || (exports.Transport = Transport = {}));
const owner = new Transport.Owner("Иванов", "Иван", "Иванович", Transport.Documents.PASSPORT, 1234, 123456);
const myCar = new Transport.Vehicle("Toyota", "Camry", 2022, "1HGBH41JXMN109186", "ABC123", owner);
myCar.hello = "hello";
console.log(myCar.hello);

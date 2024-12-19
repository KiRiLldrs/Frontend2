var Documents;
(function (Documents) {
    Documents["PASSPORT"] = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442";
    Documents["FOREIGN_PASSPORT"] = "\u0417\u0430\u0433\u0440\u0430\u043D\u043F\u0430\u0441\u043F\u043E\u0440\u0442";
    Documents["BIRTH_CERTIFICATE"] = "\u0421\u0432\u0438\u0434\u0435\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u043E \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0438";
})(Documents || (Documents = {}));
var BodyTypes;
(function (BodyTypes) {
    BodyTypes["SEDAN"] = "\u0421\u0435\u0434\u0430\u043D";
    BodyTypes["HATCHBACK"] = "\u0425\u044D\u0442\u0447\u0431\u0435\u043A";
    BodyTypes["COUPE"] = "\u041A\u0443\u043F\u0435";
    BodyTypes["VAN"] = "\u0424\u0443\u0440\u0433\u043E\u043D";
})(BodyTypes || (BodyTypes = {}));
var AutoClass;
(function (AutoClass) {
    AutoClass["SUV"] = "\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A";
    AutoClass["LIMOUSINE"] = "\u041B\u0438\u043C\u0443\u0437\u0438\u043D";
    AutoClass["SPORT"] = "\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0439";
})(AutoClass || (AutoClass = {}));
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
}
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
const owner = new Owner("Сидоров", "Дмитрий", "Николаевич", Documents.PASSPORT, 228, 1488);
console.log(owner.ownerInfo());
const vehicle = new Vehicle("Lada", "2107", 2005, "gfd4334tdfg34", "кк000к", owner);
console.log(vehicle.vehicleInfo());
const car = new Car("Lada", "2107", 2005, "gfd4334tdfg34", "кк000к", owner, BodyTypes.COUPE, AutoClass.SPORT);
const car2 = new Car("BMW", "M16", 2017, "lgfd78gdkgdf", "мк228е", owner, BodyTypes.SEDAN, AutoClass.SUV);
const car3 = new Car("LADA", "Kalina", 2007, "gdf3425gdg43", "лл111л", owner, BodyTypes.VAN, AutoClass.SPORT);
console.log(car.vehicleInfo());
const motorbike = new Motorbike("Yamaha", "YZF-R1", 1992, "qwertyuiop432", "ghj234g", owner, "Scooter", true);
const motorbike2 = new Motorbike("Ducati", "1098", 2005, "kfsdnksd89342", "gfd321f", owner, "Cruiser", false);
const motorbike3 = new Motorbike("Suzuki", "Hayabusa", 2014, "ewrdsv832421", "fdg214b", owner, "Naked", true);
console.log(motorbike.vehicleInfo());
const autoStorage = new VehicleStorage();
autoStorage.save(car);
autoStorage.save(car2);
autoStorage.save(car3);
console.log(autoStorage.getAll());
const bikeStorage = new VehicleStorage();
bikeStorage.save(motorbike);
bikeStorage.save(motorbike2);
bikeStorage.save(motorbike3);
console.log(bikeStorage.getAll());
const AllStorage = new VehicleStorage();
AllStorage.save(car);
AllStorage.save(car2);
AllStorage.save(car3);
AllStorage.save(motorbike);
AllStorage.save(motorbike2);
AllStorage.save(motorbike3);
console.log(AllStorage.getAll());

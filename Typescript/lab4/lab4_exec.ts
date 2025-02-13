import {Transport} from "./lab4";
import Documents = Transport.Documents;
import BodyTypes = Transport.BodyTypes;
import AutoClass = Transport.AutoClass;
import IOwner = Transport.IOwner;
import IVehicle = Transport.IVehicle;
import Owner = Transport.Owner;
import Vehicle = Transport.Vehicle;
import ICar = Transport.ICar;
import Car = Transport.Car;
import IMotorbike = Transport.IMotorbike;
import Motorbike = Transport.Motorbike;
import IVehicleStorage = Transport.IVehicleStorage;
import VehicleStorage = Transport.VehicleStorage;


const owner: IOwner = new Owner("Сидоров", "Дмитрий", "Николаевич", Documents.PASSPORT, 228, 1488);
console.log(owner.ownerInfo());

const vehicle: IVehicle = new Vehicle("Lada", "2107", 2005, "gfd4334tdfg34", "кк000к", owner);
console.log(vehicle.vehicleInfo());

const car: ICar = new Car("Lada", "2107", 2005, "gfd4334tdfg34", "кк000к", owner, BodyTypes.COUPE, AutoClass.SPORT);
const car2: ICar = new Car("BMW", "M16", 2017, "lgfd78gdkgdf", "мк228е", owner, BodyTypes.SEDAN, AutoClass.SUV);
const car3: ICar = new Car("LADA", "Kalina", 2007, "gdf3425gdg43", "лл111л", owner, BodyTypes.VAN, AutoClass.SPORT);
console.log(car.vehicleInfo())

const motorbike: IMotorbike = new Motorbike("Yamaha", "YZF-R1", 1992, "qwertyuiop432", "ghj234g", owner, "Scooter", true);
const motorbike2: IMotorbike = new Motorbike("Ducati", "1098", 2005, "kfsdnksd89342", "gfd321f", owner, "Cruiser", false);
const motorbike3: IMotorbike = new Motorbike("Suzuki", "Hayabusa", 2014, "ewrdsv832421", "fdg214b", owner, "Naked", true);
console.log(motorbike.vehicleInfo())

const autoStorage: IVehicleStorage<ICar> = new VehicleStorage();
autoStorage.save(car);
autoStorage.save(car2);
autoStorage.save(car3);
console.log(autoStorage.getAll());

const bikeStorage: IVehicleStorage<IMotorbike> = new VehicleStorage();
bikeStorage.save(motorbike);
bikeStorage.save(motorbike2);
bikeStorage.save(motorbike3);
console.log(bikeStorage.getAll())

const AllStorage: IVehicleStorage<IVehicle> = new VehicleStorage();
AllStorage.save(car); AllStorage.save(car2); AllStorage.save(car3);
AllStorage.save(motorbike); AllStorage.save(motorbike2); AllStorage.save(motorbike3);

console.log(AllStorage.getAll());

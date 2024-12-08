//Arrays
let data = [1, 2, 3, 4, 6, 3, 324, 63, 12, -54, 0, 432, 344];
function getAverage(data) {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        sum += data[i];
    }
    sum /= data.length;
    return Math.round(sum);
}
console.log(getAverage(data));
let matrix = [
    [1, 2, 3],
    [7, 85, 5],
    [1, 8],
    [4, 3, 9, 1]
];
function countInInterval(martix, start, finish) {
    let count = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] > start && matrix[i][j] < finish) {
                count += 1;
            }
        }
    }
    return count;
}
console.log(countInInterval(matrix, 4, 10));
//Tuple
const tuple = ['Выборный', 'Подкидной', 25];
function forTuple(tuple) {
    return tuple[0] + ' ' + tuple[2] + ' ' + tuple[1];
}
console.log(forTuple(tuple));
//Enum
var Oil;
(function (Oil) {
    Oil["type1"] = "\u041F\u043E\u0434\u0441\u043E\u043B\u043D\u0435\u0447\u043D\u043E\u0435";
    Oil["type2"] = "\u041A\u0443\u043A\u0443\u0440\u0443\u0437\u043D\u043E\u0435";
    Oil["type3"] = "\u041E\u043B\u0438\u0432\u043A\u043E\u0432\u043E\u0435";
    Oil["type4"] = "\u041E\u0440\u0435\u0445\u043E\u0432\u043E\u0435";
    Oil["type5"] = "\u0410\u0440\u0430\u0445\u0438\u0441\u043E\u0432\u043E\u0435";
    Oil["type6"] = "\u041A\u0443\u043D\u0436\u0443\u0442\u043D\u043E\u0435";
})(Oil || (Oil = {}));
console.log(Oil.type5);
//Generic
class Pet {
    constructor() {
        this.name = 'Some pet';
        this.age = -1;
    }
    speak() {
        return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    constructor() {
        super(...arguments);
        this.label = "AngryHunter";
        this.age = 8;
    }
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    constructor() {
        super(...arguments);
        this.label = "Barsik";
        this.age = 2;
    }
    speak() {
        return "Miyau!";
    }
}
const someCat = new Cat();
const someDog = new Dog();
console.log(someCat, someCat.speak());
console.log(someDog, someDog.speak());
const Oil1 = {
    company: 'Золотая семечка',
    id: 24,
    type: Oil.type1
};
const jsonOil = JSON.stringify(Oil1);
console.log(jsonOil);
const parsedOil = JSON.parse(jsonOil);
console.log(parsedOil);

declare let data: number[];
declare function getAverage(data: number[]): number;
declare let matrix: number[][];
declare function countInInterval(martix: number[][], start: number, finish: number): number;
declare const tuple: [string, string, number];
declare function forTuple(tuple: [string, string, number]): string;
declare enum Oil {
    type1 = "\u041F\u043E\u0434\u0441\u043E\u043B\u043D\u0435\u0447\u043D\u043E\u0435",
    type2 = "\u041A\u0443\u043A\u0443\u0440\u0443\u0437\u043D\u043E\u0435",
    type3 = "\u041E\u043B\u0438\u0432\u043A\u043E\u0432\u043E\u0435",
    type4 = "\u041E\u0440\u0435\u0445\u043E\u0432\u043E\u0435",
    type5 = "\u0410\u0440\u0430\u0445\u0438\u0441\u043E\u0432\u043E\u0435",
    type6 = "\u041A\u0443\u043D\u0436\u0443\u0442\u043D\u043E\u0435"
}
declare class Pet {
    name: string;
    age: number;
    speak(): string;
}
declare class Dog extends Pet {
    label: string;
    age: number;
    speak(): string;
}
declare class Cat extends Pet {
    label: string;
    age: number;
    speak(): string;
}
declare const someCat: Pet;
declare const someDog: Pet;
interface OilInfo {
    company: string;
    id: number;
    type: Oil;
}
declare const Oil1: OilInfo;
declare const jsonOil: string;
declare const parsedOil: OilInfo;

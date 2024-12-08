//Arrays

let data: number[] = [1 ,2 ,3 ,4 ,6 ,3 ,324 ,63 ,12 ,-54 ,0 ,432 , 344];

function getAverage(data: number[]): number{
    let sum: number = 0;
    for ( let i=0; i<data.length; i++ ){
        sum+=data[i];
    }

    sum/=data.length;
    return Math.round(sum);
}

console.log(getAverage(data));

let matrix: number[][] = [
    [1,2,3],
    [7,85,5],
    [1,8],
    [4,3,9,1]
]

function countInInterval(martix: number[][], start: number, finish: number): number{
    let count:number = 0;

    for(let i=0; i<matrix.length; i++){
        for (let j=0; j<matrix[i].length; j++){
            if (matrix[i][j]>start && matrix[i][j]<finish){
                count+=1;
            }
        }
    }
    return count;
}

console.log(countInInterval(matrix, 4,10));

//Tuple

const tuple: [string, string, number] = ['Выборный', 'Подкидной', 25];

function forTuple(tuple: [string, string, number]): string{
    return tuple[0] + ' ' + tuple[2] + ' ' + tuple[1];
}

console.log(forTuple(tuple));

//Enum

enum Oil{
    type1 = 'Подсолнечное',
    type2 = 'Кукурузное',
    type3 = 'Оливковое',
    type4 = 'Ореховое',
    type5 = 'Арахисовое',
    type6 = 'Кунжутное'
}

console.log(Oil.type5);

//Generic

class Pet {
    name: string = 'Some pet'
    age: number = -1
    speak() {
    return "No speak. I am fish!";
    }
}

class Dog extends Pet {
    label = "AngryHunter";
    age = 8;
    speak() {
    return "Yaw-Gaw!";
    }
}

class Cat extends Pet{
    label = "Barsik";
    age = 2;
    speak(){
        return "Miyau!";
    }
}

const someCat: Pet = new Cat();
const someDog: Pet = new Dog();

console.log(someCat, someCat.speak());
console.log(someDog, someDog.speak());

//

interface OilInfo{
    company: string;
    id: number;
    type: Oil;
}

const Oil1: OilInfo = {
    company: 'Золотая семечка',
    id: 24,
    type: Oil.type1
}

const jsonOil = JSON.stringify(Oil1);
console.log(jsonOil);

const parsedOil: OilInfo = JSON.parse(jsonOil) as OilInfo;
console.log(parsedOil);
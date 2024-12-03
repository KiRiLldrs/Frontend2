//Задание 2

const Sum = (p1: number, p2: number): number =>{
    return p1*p2;
}

const result: number = Sum(5,4);
console.log(result);

//Задание 3

const Name: string = "Алексей";
const Surname: string = "Иванов";
const loggedIn: boolean = true;
let age: number = 30;
let password: string = "123456";

const user: any = [Name, Surname, loggedIn, age, password];
console.log(user);

//Задание 4

interface Entity{
    id: number;
}

interface ToJsonStringify extends Entity{
    e1?: number;
    e2?: string;
}

const data: ToJsonStringify = {
    id: 4,
    e1: null,
    e2: null
}

const jsonStringify: string = JSON.stringify(data);
console.log(jsonStringify);

const jsonParse = JSON.parse(jsonStringify);
console.log(jsonParse);

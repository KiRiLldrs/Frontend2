//Задание 2
const Sum = (p1, p2) => {
    return p1 * p2;
};
const result = Sum(5, 4);
console.log(result);
//Задание 3
const Name = "Алексей";
const Surname = "Иванов";
const loggedIn = true;
let age = 30;
let password = "123456";
const user = [Name, Surname, loggedIn, age, password];
console.log(user);
const data = {
    id: 4,
    e1: null,
    e2: null
};
const jsonStringify = JSON.stringify(data);
console.log(jsonStringify);
const jsonParse = JSON.parse(jsonStringify);
console.log(jsonParse);

declare const Sum: (p1: number, p2: number) => number;
declare const result: number;
declare const Name: string;
declare const Surname: string;
declare const loggedIn: boolean;
declare let age: number;
declare let password: string;
declare const user: any;
interface Entity {
    id: number;
}
interface ToJsonStringify extends Entity {
    e1?: number;
    e2?: string;
}
declare const data: ToJsonStringify;
declare const jsonStringify: string;
declare const jsonParse: any;

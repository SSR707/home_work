//Githubdagi massalalar
//!------------
//masala - 1
//1 Array (Massiv)

const array: (string | number)[] = [1, 'Salom' , 2 , 'Dunyo'];
let sum: number = 0;
let str: string = '';
for (let i:number = 0; i < array.length ; i++){
    if (typeof array[i] == 'number'){
        sum += array[i] as number
    }
    else{
        str += array[i]  as string 
    }
}
console.log(sum)
console.log(str)

//!------------
//masala - 2
//Tuple
const tuple:[string , number , string] = ['Ali' , 17, '02-12-2024']
console.log(tuple)

//!------------
//masala - 3
//Type Aliases

type person = {name:string ,age:number , address: string }

const user : person = {name: 'Ali' , age: 17, address: 'Toshkent'}
console.log(user)

//!------------

//masala - 4
//Union Type (Ittifoq turi)

let value: number | string
value = 10
console.log(`Bu son: ${value}`)
value = 'Bu matn'
console.log(value)


//!------------

//masala - 5
//Function (Funktsiya)

const myFn = (a:number , b:number): number => {
    return a + b
}

console.log(myFn(5, 5))



//!------------

//masala - 6
//6. Literal Type (Literal tur)

type role = 'user' | 'admin' | 'SuperAdmi';
let userr:role = 'admin'
console.log(userr)

//!------------

//masala - 7
// Object Type (Obyekt turi)

type Person = {name:string ,age:number , address: string }

const student : person = {name: 'Ali' , age: 17, address: 'Toshkent'}
console.log(student)


//!------------

//masala - 8
// 8 Object Type (Obyekt turi)

type Personn = {name:string;age?:number;address?: string;};
const usr : Personn = {name: 'Ali' , age: 17}
console.log(usr)


//!------------

//masala - 9
// 9 Readonly

type prs = {readonly name:string; readonly age:number;readonly address: string;};
const  u : prs = {name: 'Ali' , age: 17 , address: 'Tahkent'}

// u.name = 'Hakim' Error beradi reonly da ozgrtirip bolmaydi
console.log(usr)

//!------------

//masala - 10
// 10 Type Assertions 

let strr : unknown = 'Salom Dunyo'
let len : number = (strr as string).length
console.log(len)
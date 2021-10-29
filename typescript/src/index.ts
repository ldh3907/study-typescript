import { timeStamp } from "console";
import INameble from "./INameBle";

//타입 주석과 타입추론
let n: number = 1;
let m = 2;

//인터페이스
interface Person {
  name: string;
  age?: number;
}

let person: Person = { name: "lty" };

//튜플
let numberArray: number[] = [1, 2, 3]; // 배열
let tuple: [boolean, number, string] = [true, 1, "ok"]; //튜플

//제네릭 타입
class Container<T> {
  constructor(public value: T) {}
}
let numberContainer: Container<number> = new Container<number>(1);
let stringContainer: Container<string> = new Container<string>("hello world");

//대수 타입
// type NumberOfString = number | string;
// type AnimalAndPerson = Animal & Person;

interface IPerson {
  name: string;
  age: number;
}

interface IPerson2 {
  name: string;
  age: number;
  etc?: boolean;
}

let ai: {
  name: string;
  age: number;
  etc?: boolean;
} = { name: "sada", age: 12 };

// function printMe(me: { name: string; age: number; etc?: boolean }) {
//   console.log(
//     me.etc ? `${me.name} ${me.etc} ${me.etc}` : `${me.name} ${me.etc}`
//   );
// }

// printMe({ name: "ASdad", age: 12, etc: true });

class Person1 {
  name: string;
  age?: number;
}

let jack1: Person = new Person1();
jack1.name = "jack";
jack1.age = 32;

console.log(jack1);

class Person2 {
  constructor(public name: string, public age?: number) {}
}
let jack2: Person2 = new Person2("jack", 32);
console.log(jack2);

class Person3 {
  name: string;
  age?: number;
  constructor(name: string, age?: number) {
    this.name = name;
    this.age = age;
  }
}

interface IPerson4 {
  name: string;
  age?: number;
}

class Person4 implements IPerson4 {
  constructor(public name: string, public age?: number) {}
}

let jack3: Person4 = new Person4("jack", 21);

console.log(jack3);

abstract class abstractPerson5 {
  abstract name: string;
  constructor(public age?: number) {}
}

class Person5 extends abstractPerson5 {
  constructor(public name: string, age?: number) {
    super(age);
  }
}

let jack5: Person5 = new Person5("jack", 32);
console.log(jack5);

class A {
  static initValue = 1;
}

let initVal = A.initValue;
console.log(initVal);

//type conversion
let TCperson: object = { name: "jack", age: 32 };
let TCpersonName = (<{ name: string }>TCperson).name;
console.log(TCpersonName);

let obj: object = { name: "jack" };

let name1 = (<INameble>obj).name;
let name2 = (obj as INameble).name;
console.log(name1, name2);

// function add(a: number, b: number): number {
//   return a + b;
// }

let printMe: (name: string, age: number) => void = function (
  name: string,
  age: number
): void {};

type stringNumberFunc = (a: string, b: number) => void;
let f: stringNumberFunc = (name: string, age: number): void => {
  console.log(name);
};

f("jack", 32);

function fn(arg1: string, arg?: number): void {}

type OptionalArgFunc = (a: string, b?: number) => void;

let add = new Function("a", "b", `return a + b`);
let result = add(1, 2);

// let add2 = function (a, b) {
//   return a + b;
// };

const arrow1 = (a: number, b: number): number => {
  return a + b;
};

const arrow2 = (a: number, b: number): number => a + b;

// let f = () => {};
// const f = () => {};

// const f = (callback: () => void): void => callback();

const calc = (value: number, cb: (a: number) => void): void => {
  let add = (a: number, b: number) => a + b;
  function multiply(a: number, b: number) {
    return a * b;
  }
  let result = multiply(add(1, 2), value);
  cb(result);
};

calc(30, (result: number) => console.log({ result }));

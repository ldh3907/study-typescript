import { timeStamp } from "console";

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

function printMe(me: { name: string; age: number; etc?: boolean }) {
  console.log(
    me.etc ? `${me.name} ${me.etc} ${me.etc}` : `${me.name} ${me.etc}`
  );
}

printMe({ name: "ASdad", age: 12, etc: true });

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

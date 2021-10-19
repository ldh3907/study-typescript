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

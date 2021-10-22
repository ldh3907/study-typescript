"use strict";
exports.__esModule = true;
//타입 주석과 타입추론
var n = 1;
var m = 2;
var person = { name: "lty" };
//튜플
var numberArray = [1, 2, 3]; // 배열
var tuple = [true, 1, "ok"]; //튜플
//제네릭 타입
var Container = /** @class */ (function () {
    function Container(value) {
        this.value = value;
    }
    return Container;
}());
var numberContainer = new Container(1);
var stringContainer = new Container("hello world");
var ai = { name: "sada", age: 12 };
function printMe(me) {
    console.log(me.etc ? me.name + " " + me.etc + " " + me.etc : me.name + " " + me.etc);
}
printMe({ name: "ASdad", age: 12, etc: true });
var Person1 = /** @class */ (function () {
    function Person1() {
    }
    return Person1;
}());
var jack1 = new Person1();
jack1.name = "jack";
jack1.age = 32;
console.log(jack1);
var Person2 = /** @class */ (function () {
    function Person2(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person2;
}());
var jack2 = new Person2("jack", 32);
console.log(jack2);
var Person3 = /** @class */ (function () {
    function Person3(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person3;
}());
var Person4 = /** @class */ (function () {
    function Person4(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person4;
}());
var jack3 = new Person4("jack", 21);
console.log(jack3);

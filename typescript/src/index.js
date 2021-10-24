"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var abstractPerson5 = /** @class */ (function () {
    function abstractPerson5(age) {
        this.age = age;
    }
    return abstractPerson5;
}());
var Person5 = /** @class */ (function (_super) {
    __extends(Person5, _super);
    function Person5(name, age) {
        var _this = _super.call(this, age) || this;
        _this.name = name;
        return _this;
    }
    return Person5;
}(abstractPerson5));
var jack5 = new Person5("jack", 32);
console.log(jack5);
var A = /** @class */ (function () {
    function A() {
    }
    A.initValue = 1;
    return A;
}());
var initVal = A.initValue;
console.log(initVal);
//type conversion
var TCperson = { name: "jack", age: 32 };
var TCpersonName = TCperson.name;
console.log(TCpersonName);

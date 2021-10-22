let student = {
  name: "jake",
  course: "typescript",
  codingIQ: 80,
  code: function () {
    console.log("i love the web");
  },
};
// student.name = 1 <- 라고 하면 string 타입이 아니라고 오류가 뜬다.

function calculateCodingIQ(lostPoints: number) {
  return 100 - lostPoints;
}

let studentID: number = 12345;
let studentName: string = "임동현";
let age: number = 21;
let gendet: string = "femail";
let subject: string = "javascript";
let courseCompleted: boolean = false;

enum GenderType { // <- 숫자 열거형
  Male = "male",
  Female = "female",
}

let studentDetail: Student = {
  studentID: 12345,
  studentName: "임동현",
  age: 17,
  gender: "male",
  subject: "javascript",
  courseCompleted: true,
};

interface Student {
  //<- 인터페이스
  readonly studentID: number;
  studentName: string;
  age?: number; //<- 선택적 프로퍼티
  gender: "male" | "female";
  subject: string;
  courseCompleted: boolean;
  // addComment (comment : string) : string;
  addComment?: (comment: string) => string; //<- 메소드, <- 둘이 같은 기능의 함수인데 나는 밑에 형식이 더 나은거 같다.
}

function getStudentDetails(studentID: number): Student {
  return studentDetail;
}

function saveStudentDetails(student: Student): void {
  console.log(`ID :${student.studentID}`, student);
}

saveStudentDetails(studentDetail);

let someValue: any; // <- any 타입
let price: number | string; // <- 유니언 타입
price = "hello";
price = 1;
// price =  true;

type StrOrNum = number | string; //<= Type Aliases

let itemPrice: number;

const setItemPrice = (price: StrOrNum): void => {
  if (typeof price === "string") {
    //<- 타입 가드
    itemPrice = 0;
  } else {
    itemPrice = price;
  }
};
// class Employee {
//    fullName : string;
//    personAge : number;
//    jobTitle :string;
//    hourlyRate : number;
//    workingHoursPerWeek : number;

//    printEmployeeDetails =():void =>{
//     console.log(`${this.fullName}의 직업은 ${this.jobTitle} 이고, 일주일의 수입은 ${this.hourlyRate * this.workingHoursPerWeek} 달러이다.`)
//   }
// }

// let employee1 = new Employee();
// employee1.fullName = "동현";
// employee1.personAge = 28;
// employee1.jobTitle = "주니어 웹개발자";
// employee1.hourlyRate = 48;
// employee1.workingHoursPerWeek = 35;
// employee1.printEmployeeDetails();

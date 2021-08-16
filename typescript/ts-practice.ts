let student = {
  name: 'jake',
  course : "typescript",
  codingIQ : 80,
  code : function () {
    console.log('i love the web')
  }
}
// student.name = 1 <- 라고 하면 string 타입이 아니라고 오류가 뜬다.


function calculateCodingIQ (lostPoints:number){
  return 100-lostPoints;
}

let studentID:number = 12345;
let studentName:string = "임동현";
let age:number= 21;
let gendet:string = "femail";
let subject:string = "javascript"
let courseCompleted:boolean = false;

enum GenderType { // <- 숫자 열거형
  Male ='male', 
  Female ='female'
}

let studentDetail: Student = {
    studentID :12345,
    studentName : "임동현",
    age:17,
    gender : 'male',
    subject : "javascript",
    courseCompleted : true
}

interface Student { //<- 인터페이스
  readonly studentID:number,
  studentName:string,
  age?:number, //<- 선택적 프로퍼티
  gender: 'male' | 'female',
  subject:string,
  courseCompleted : boolean;
  // addComment (comment : string) : string;
  addComment?: (comment : string) => string; //<- 메소드, <- 둘이 같은 기능의 함수인데 나는 밑에 형식이 더 나은거 같다.
}

function getStudentDetails(studentID : number):Student {
  return studentDetail;
}

function saveStudentDetails(student:Student) : void {
  console.log(`ID :${student.studentID}`, student)
}

saveStudentDetails(studentDetail)



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

function getStudentDetails(studentID : number):{
  studentID:number;
  studentName:string;
  age:number;
  gendet:string;
  subject:string;
  createDate:Date ;
}  {
  return null;
}



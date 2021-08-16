var student = {
    name: 'jake',
    course: "typescript",
    codingIQ: 80,
    code: function () {
        console.log('i love the web');
    }
};
// student.name = 1 <- 라고 하면 string 타입이 아니라고 오류가 뜬다.
function calculateCodingIQ(lostPoints) {
    return 100 - lostPoints;
}
var studentID = 12345;
var studentName = "임동현";
var age = 21;
var gendet = "femail";
var subject = "javascript";
var courseCompleted = false;
var studentDetail = {
    studentID: 12345,
    studentName: "임동현",
    age: 17,
    gendet: "male",
    subject: "javascript",
    courseCompleted: true
};
function getStudentDetails(studentID) {
    return studentDetail;
}
function saveStudentDetails(student) {
    console.log("ID :" + student.studentID, student);
}
saveStudentDetails(studentDetail);

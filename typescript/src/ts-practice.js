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
var GenderType;
(function (GenderType) {
    GenderType["Male"] = "male";
    GenderType["Female"] = "female";
})(GenderType || (GenderType = {}));
var studentDetail = {
    studentID: 12345,
    studentName: "임동현",
    age: 17,
    gender: 'male',
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
var someValue; // <- any 타입
var price; // <- 유니언 타입
price = "hello";
price = 1;
var itemPrice;
var setItemPrice = function (price) {
    if (typeof price === "string") { //<- 타입 가드
        itemPrice = 0;
    }
    else {
        itemPrice = price;
    }
};
var Employee = /** @class */ (function () {
    function Employee() {
        var _this = this;
        this.printEmployeeDetails = function () {
            console.log(_this.fullName + "\uC758 \uC9C1\uC5C5\uC740 " + _this.jobTitle + " \uC774\uACE0, \uC77C\uC8FC\uC77C\uC758 \uC218\uC785\uC740 " + _this.hourlyRate * _this.workingHoursPerWeek + " \uB2EC\uB7EC\uC774\uB2E4.");
        };
    }
    return Employee;
}());
var employee1 = new Employee();
employee1.fullName = "동현";
employee1.personAge = 28;
employee1.jobTitle = "주니어 웹개발자";
employee1.hourlyRate = 48;
employee1.workingHoursPerWeek = 35;
employee1.printEmployeeDetails();

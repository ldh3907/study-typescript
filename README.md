
# typescript란?
기존 js 함수는 모두 포함하고 있는 언어, js에는 없는 함수도 포함하고있다. 기본적으로 변수마다 타입을 지정해줘야한다는 특징이 있다.

    let age:number = 10;

보시다시피 다음과 비슷한 형식으로 타입을 지정해준다.

# 타입 추론
typescript는 타입이 정해지지 않았을때 변수에 할당된 값의 타입으로 타입을 추론하여 알려준다.

    let age = 1; 숫자를 할당해줬기때문에 age 는 number 형으로 추론 됨.
    age = "hi"; <-라고 하게 되면 age에 할당된 값이 number 형이 아니므로 오류가 뜬다.

# 타입 명시
변수를 선언할 때, 변수 값의 타입을 명시함으로써 변수 값의 데이터 타입을 지정해주는것.

    let num:number = 1; <- 이렇게 변수앞에 :type 을 지정해준다.

함수의 경우

    function pring(text : string) : void { <= 파라미터에도 타입을 지정해주고, function에도 타입을 지정해준다. (해당 함수가 아무것도 리턴하지 않으면 void로 지정해주고, 리턴하면 리턴값의 타입으로 지정해준다.)
        consolo.log(text)
    }

객체를 리턴해줘야 할 경우

    function getStudentDetails(studentID : number):{
        studentID:number;
        studentName:string;
        age:number;
        gendet:string;
        subject:string;
        createDate:Date; <- 객체들을 지정해줘야 한다.
    }  {
        return null;
    }

하지만 이렇게 지정해주면 코드의 가독성이 떨어진다. 그러면 어떻게 할까?

# 인터페이스
우리가 타입을 만들 수 있게 해주는 도구이다.

    interface Student { <- ☆무조건 앞글자는 대문자여야 한다.
        studentID:number;
        studentName:string;
        age:number;
        gendet:string;
        subject:string;
        createDate:Date ;
    }    <- Student라는 타입이 생겼고, 위애 객체 형식을 가지고 있음.

    function getStudentDetails(studentID : number):Student {
        return {
            studentID :12345,
            studentName : "임동현",
            age:21,
            gendet : "femail",
            subject : "javascript",
            courseCompleted : true 
        };
    }

다음과 같이 코드를 효율적으로 쓸 수 있다. 
리턴해주는 값은 Student 타입의 형식과 똑같아야 한다(아니면 오류가 뜸.). 하지만 선택적 프로퍼티 때문에 꼭 그런건 아니다.

# 선택적 프로퍼티

    interface Student {
        studentID:number;
        studentName:string;
        age?:number; <- 다음과 같이 변수 앞에 ?를 붙혀줌으로써 age값은 반환 해줘도 되고 안해줘도 되는 변수가 되었다.
        gendet:string;
        subject:string;
        createDate:Date ;
    }

# 메소드
객체 내에서 생성된 함수 이다.

    interface Student {
        studentID:number;
        studentName:string;
        age?:number; <- 다음과 같이 변수 앞에 ?를 붙혀줌으로써 age값은 반환 해줘도 되고 안해줘도 되는 변수가 되었다.
        gendet:string;
        subject:string;
        createDate:Date ;
        // addComment (comment : string) : string;
        addComment : (comment : string) => string; // <- 둘이 같은 기능의 함수인데 나는 밑에 형식이 더 나은거 같다.
    }

다음과 같이 메소드를 생성한다.

# readonly 속성 
어떤 값을 바꿀 수도 없고, 읽을 수만 있게끔 해주는 속성이다.

    interface Student {
        readonly studentID:number; <- 이렇게 타입 같이 앞에 readonly를 붙혀주면 된다.
        studentName:string;
        age:number;
        gendet:string;
        subject:string;
        courseCompleted : boolean;
    }

# enum 숫자 열거형
연관된 아이템들을 함께 묶어서 표현 할 수 있는 수단이다.

    enum GenderType { <- enum 타입을 주고 다음과 같이 객체안에 여러 아이템을 지정해준다.
        Male,
        Female,
    }

    interface Student { //<- 인터페이스
        readonly studentID:number;
        studentName:string;
        age?:number; //<- 선택적 프로퍼티
        gender: GenderType; <- 이렇게 활용한다. 만약에 GenderType의 Male, Female 아이템이 아닌 다른 아이템이 들어가면 오류가 뜬다.
        subject:string;
        courseCompleted : boolean;
    }

이대로 콘솔을 찍으면 gender은 0이 나온다. 이유는 아이템들의 값을 우리가 정해주지 않았기 때문에 타입스크립트에서 자동으로 넣어준다. 아이템들이 만들어진 순서로 값을 넣어준다. 값을 지정해주려면 이렇게 하면 된다.

    enum GenderType {
        Male ="male", 
        Female ="female"
    }

# 리터럴 타입
앞서 말했던 숫자 열거형을 더 심플하게 쓸 수 있게 해주는 방법

    interface Student { //<- 인터페이스
        readonly studentID:number;
        studentName:string;
        age?:number; //<- 선택적 프로퍼티
        gender: "male" | "female", <- 이렇게 GenderType 의 아이템들의 값을 사이에 | 을 넣으면서 쓴다.(존재하지 않는 값을 쓰면 오류가 뜸.)
        subject:string;
        courseCompleted : boolean;
    }

# any 타입
아무 타입이나 다 할당 가능 하게 해주는 타입이다.

    let someValue: any = 5; <- 다음과 any 타입을 지정해주고 숫자 타입을 넘겨주면
    someValue = "string"; <- 연관없는 아무 타입이나 넣어도 오류가 뜨지 않는다.

이런식으로 any 타입을 사용한다. 하지만 정보를 명확히 명시해줘야하는 타입스크립트 특성상 코드에서 any 타입은 가급적 사용하지 않는게 좋다. 이럴때 사용하는게 있다.

# 유니언타입
쉽게 설명하면 타입을 2개 이상 지정해주는 것이다.

    let price : number | string // <- 넘버타입, 문자열 타입 지정
    price = "hello"; <- 오류가 안난다.
    price = 1; <- 오류가 안난다.
    price =  true; <- boolean 타입은 지정안해줬으므로 오류가 뜸.

하지만 타입을 여러곳에 지정해주게 되면 유니언 타입도 비효율적이 된다. 또 이럴때 사용하는게 있다.

# Type Aliases 
2개 이상의 타입을 하나의 타입으로 묶고 싶을때 사용한다.

    type StrOrNum = number | string <- 이렇게 지정해준다.

이런식으로 사용한다.

# 타입 가드

    type StrOrNum = number | string; <- Type Aliases

    let itemPrice : number; < - 숫자형 타입으로 지정

    const setItemPrice = (price : StrOrNum) : void => {
        itemPrice = price; <- 이렇게 하면 오류가 난다.(itemPrice는 숫자만 받는데, price는 숫자, 문자열을 반환 하기 때문)
    }

Type Aliases 를 사용할때 이런식으로 오류가 날 수도 있다. 이럴때 주로 막는 방식이 타입가드이다.

    const setItemPrice = (price : StrOrNum) : void => {
        if(typeof price === "string"){ //<- 타입 가드
            itemPrice = 0;
        }   
        else {
            itemPrice = price;
        }
    }

이런식으로 타입가드를 한다.

# class 
관련있는 변수와 함수끼리 묶을 수 있는 수단이다. 클래스가 있게 되면, 클래스 속에서 정의된 함수들은 클래스 내 정의된 변수들에게 접근 가능해진다.

    let fullName : string;
    let personAge : number;
    let jobTitle :string;
    let hourlyRate : number;
    let workingHoursPerWeek : number;
  
    printEmployeeDetails =(fullName : string, jobTitle :string, hourlyRate : number,workingHoursPerWeek : number ):void =>{
        console.log(`${this.fullName}의 직업은 ${this.jobTitle} 이고, 일주일의 수입은 ${this.hourlyRate * this.workingHoursPerWeek} 달러이다.`)
    }

이런식의 코드가 있으면,

    class Employee {
        fullName : string;
        personAge : number;
        jobTitle :string;
        hourlyRate : number;
        workingHoursPerWeek : number;
        
        printEmployeeDetails =():void =>{
            console.log(`${this.fullName}의 직업은 ${this.    jobTitle} 이고, 일주일의 수입은 ${this.hourlyRate * this.workingHoursPerWeek} 달러이다.`) <-- 이런식으로 파라메터에 접근이 가능하다.
        }
    }

이런식으로 묶을 수 있다. 그리고 클래스를 쓰면 let을 쓸 필요가 없다.

# Property
클래스 내에 정의된 변수


# 클래스의 인스턴스 
쉽게 설명하자면 클래스 밖에서 변수를 선언해서 변수에다가 클래스를 할당해주는 것이다.

    let employee1 = new Employee();
    employee1.printEmployeeDetails();

이런식으로 클라스를 할당해서 활용한다. 하지만 콘솔을 찍으면 이상하게 나온다. 이유는 클래스 내의 프로퍼티들을 안사용해줬기 때문이다.

    let employee1 = new Employee();
    employee1.fullName = "동현";
    employee1.personAge = 28;
    employee1.jobTitle = "주니어 웹개발자";
    employee1.hourlyRate = 48;
    employee1.workingHoursPerWeek = 35;
    employee1.printEmployeeDetails();

이런식으로 하면 이제 결과가 잘나온다.

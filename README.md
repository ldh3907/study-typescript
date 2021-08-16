땅콩코딩의 타입스크립트 강의를 보고 기록하는 레포지토리 입니다.

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
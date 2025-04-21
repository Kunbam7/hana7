function add(a: number, b: number) {
    return a + b;
}

const add2 = (a: number, b: number): number => a+ b;    // 굳이 리턴값까지 체크 -> 실행에 시간이 더걸림
const add3 = (a: number, b: number) => a+ b;

const introduce = (name:string, height?:number) => {
        // 1. change func height = 0
        console.log(`이름 : ${name}`);
        // 2. 
        console.log(`키 : ${height ?? 0 + 10}`)
        // 3. 실무, undifined 일때 출력하고싶지 않는경우
        if(height)  console.log(`키 : ${height + 10}`)
        // 4.
        if(height && height >= 0)  console.log(`키 : ${height + 10}`)
        // 5.값을 반드시 출력해야하는 경우
        if(typeof height === 'number')  console.log(`키 : ${height + 10}`)
    //Error : 'height' is possibly 'undefined'.
    }
    
introduce("김현준"); // OK
introduce("김현준", undefined); // OK
introduce("김현준", 170); // OK

//----------------------------------------------
const introduce2 = (name:string, height : number | undefined ) => {
    console.log(`이름 : ${name}`);
    if(typeof height === 'number'){
        console.log(`키 : ${height + 10}`)   
    }
}

introduce2("김현준", 0); // Error : Expected 2 arguments, but got 1.
introduce2("김현준", undefined); // OK
introduce2("김현준", 170); // OK

//----------------------------------------------
const introduce4 = (name : string, height = 0) => {
    console.log(`이름 : ${name}`);
    console.log(`키 : ${height + 10}`);
}

introduce4('김현준'); // OK
introduce4('김현준', undefined);
introduce4('김현준',170);   
// introduce4("김현준", "이재현");
// Error: Argument of type 'string' is not assignable to parameter of type 'number'.

//----------------------------------------------
function factorial(n: number): number {
    if(n <= 1) return 1;
    return n * factorial(n - 1);
}
const aFactorial = (n: number): number => {
    if(n <= 1)  return 1;
    return n * aFactorial(n - 1);
}
const saFactorial = (n: number): number => n <= 1 ? n : n * saFactorial(n - 1);

const arr3 = [1, 2, 3];
arr3.map((a, i) => a + i);

//this------------------------------------------

// globalThis.id = 10;
function tfn(this: {id: number}, x: string) {
    console.log('tfn', this.id, x);
}
tfn.bind({id: 1})('X');

function ntfn(this: void, x: string) {
    console.log('tfn', x);
}
ntfn('Y');
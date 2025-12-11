// // function addtwo(val){
// //     val.toLowerCase();
// //     return val+2;
// // }  
// //--> it create any type which isn't good practice

// addtwo("5");

// //To solve it in TS

// function addTwo(val : number){
//     //val.toUpperCase(); --> it show an error 
//     return val+2; // it return only integer, float and double
// }

// function getUpper(val: string) {
//     return val.toUpperCase();
// }

// addTwo(5);
// getUpper("Abhishek");

// function signUpUser(name : string, email: string, password: string, isPaid: boolean) {

// }

// signUpUser("Abhishek", "example.com", 'abc123', true)

// let loginUSer = (email: string, password: string, isPAid: Boolean) => {}

// loginUSer("Abhi","xyz.com"); // if we pass only two argument it generate error, so we have to pass some default value

let loginUSer = (email: string, password: string, isPAid: Boolean = false) => {}

loginUSer("Abhi","xyz.com"); // now it will not generate any error b/c passed deffault value in function argument 

// var loginPage = function (name, email , isPaid){
//     if(isPaid == void 0) {
//          isPaid = false;
//     }
// }

// function addTwo(val:Number){
//     return "hello"
// } /// it is valid;
// but it is not correct way to handle this in TS 
function addTwo(val:number) : number {
    return val+2;
}


// But what about different types of retun type
function getValue(myVal: number){
    if(myVal){
        return true
    }
    return "200 OK";
}  // there is another types of declaration of function 

const getHello = (s: string): string =>{
    return '2';
}

// to define the retur ntype of function is good way to 
function consoleError(errmsg: string): void {
    console.log(errmsg);
}

const sci = ["Einstein", "Heisenberg", "Bohr"];

sci.map( (s) => { return s.length }); // in this we don;t need to specify the data type it detect automatically

// "never" -> it is another type used in function that means 
// it means in a return type,the function throws an exception or terminates execution of the program.
function fail(msg: string) : never {
    throw new Error(msg)
}

 export {};
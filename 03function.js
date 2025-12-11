"use strict";
// // function addtwo(val){
// //     val.toLowerCase();
// //     return val+2;
// // }  
// //--> it create any type which isn't good practice
Object.defineProperty(exports, "__esModule", { value: true });
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
var loginUSer = function (email, password, isPAid) {
    if (isPAid === void 0) { isPAid = false; }
};
loginUSer("Abhi", "xyz.com"); // now it will not generate any error b/c passed deffault value in function argument 

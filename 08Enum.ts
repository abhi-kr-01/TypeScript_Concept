// why enum ??
// let's see problem 
// suppose in your college only three branch exist : cse, ece, bs
const cse = 0;
const ece =1;
const bs = 2;

// any one have to select from three 
//if(you === 0 | "cse") { /*your code*/ } 
// but let if anyone can change your variable or it's value , it's blunder for you

// here enum is come for solve this issued??

// enum BranchChoice {
//     cse,
//     ece,
//     bs
// }
// onhover: bydefault each varibale is decide it's value 
// to change according to you :

// enum BranchChoice {
//     cse=10,
//     ece=11,
//     bs,
//     physcology=13
// }// it automatically make it's own number pattern if we don't initialise it's valuse it auto,atically make pattern

// but if we used other than number then

enum BranchChoice {
    cse="cse",
    ece="ece",
    bs=0
} // then we have to assugn all value for each variable inside enum

// const enum BranchChoice {
//     cse,
//     ece,
//     bs
// }  
// we use const before use  of enum to refuce the code written by typescript after compillationin js


const AkBranch = BranchChoice.cse ;
const UKBranch = BranchChoice.ece ;

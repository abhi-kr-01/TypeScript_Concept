// let greeting : string = "Hello, world"

// greeting.toLowerCase();

// let myNum: string = "6" ;

// let xnum = 6;
// const ynum = 6;
// var znum = 6;

// All three method is in js

// in TS 
//  let num : number = 343435 ;
//  num.valueOf();


//  let check: boolean = false;
//  check.valueOf();





// console.log(greeting);

/* ================================================*/

let hero; // this means hero can make  any type 
function xgetHero() {
    return "thor";
}
function ygetHero(){
    return true
}
hero = xgetHero();   // string
hero = ygetHero();  // boolean 

// But it is not good practice, In TS
let heroTS: string;
function getHero() {
    return "Iron Man"
}

heroTS = getHero();
//heroTS = ygetHero();  // it is not correct it detect error

// "any" ==> "you can use whenever you don't want a particular value to causee typechecking errors"
// most of the time we avoid to use it because any isn't type-checked 

let obj : any = { x: 0}
obj.foo();
obj();
obj.bar = 100 ;
obj = "hello";


export {};
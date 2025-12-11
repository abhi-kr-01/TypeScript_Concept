"use strict";
// const a : Array<number> = [];
// const k : Array<string> = [];
Object.defineProperty(exports, "__esModule", { value: true });
// function identity1(val:number | boolean): number | boolean {
//     return val
// }
// // in this we have to check condtion of every different types
// function identity2(val: any): any {
//     return val;
// }
// // in this we don't know which datatytpe will come. when we use how we know which datatype return
// function identity3<Type> (val: Type): Type {
//     return val;
// }
// // int this if argument called its datatype locked for everything . we don't need to check it's datatype for return val  
// identity3(true);
// identity3(3);
// identity3("abhishek");
// function identity4<Type>(val: Type) : Type {
//     return val;
// }
// function identity5<ak>(val: ak) : ak {
//     return val;
// }
// identity5("hsvfs");
// // we can define own type just like user-define datatype and we can pass it
// interface Bottle{
//     brand: string;
//     type: number
// }
// function identity6<Bottle>({brand: "xyz",type:1}:Bottle): Bottle {
//     return {brand: "xyz",type:1};
// }
// function getSearchProduct<T>(products: T[]):T{
//     const myIndex = 3;
//     return products[myIndex];
// }
// arrow function
// const getMoreSearchProducts = <T>(products: T[]): T => {
//     // do some database operation
//     const myIndex = 2;
//     return products[myIndex];
// }
// let _getMoreSearchProducts = (products: number[]): number => {
//     // do some database operation
//     const myIndex = 2;
//     return products[myIndex];
// }
//# sourceMappingURL=Generics.js.map
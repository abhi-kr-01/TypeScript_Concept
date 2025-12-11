"use strict";
// class User {
//     public email: string
//     public name: string
//     readonly city: string = "Patna"
//     constructor(email:string, name:string){
//         this.email = email;
//         this.name = name;
//     }
// }
Object.defineProperty(exports, "__esModule", { value: true });
//const abhi = new User("abhikr@a.com","abhi");
//abhi.city ="Patna";
// class User {
//     constructor(email,name){
//         this.email = email;
//         this.name = name;
//     }
// }
// shiort-cut method to make class
class User {
    email;
    name;
    userId;
    _courseCount = 1;
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
    }
    // get keyword used as to make method to get some data from class
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    // get is also used for access private data from class
    get getCourseCount() {
        return this._courseCount;
    }
    //set - to set data
    set setCount(courseNumber) {
        if (courseNumber <= 1) {
            throw new Error("course count should be more than 1");
        }
        this._courseCount = courseNumber;
    }
    set setEmail(email) {
        this.email = email;
    }
}
//# sourceMappingURL=index.js.map
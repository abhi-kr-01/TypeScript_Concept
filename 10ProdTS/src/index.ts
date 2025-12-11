// class User {
//     public email: string
//     public name: string
//     readonly city: string = "Patna"
//     constructor(email:string, name:string){
//         this.email = email;
//         this.name = name;
//     }
// }

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
    private _courseCount = 1;
    constructor(public email: string,public name: string, private userId: string) {
    }

    // get keyword used as to make method to get some data from class
    get getAppleEmail():string
    {
        return `apple ${this.email}`
    }

    // get is also used for access private data from class
    get getCourseCount(): number{
        return this._courseCount
    }

    //set - to set data
    set setCount(courseNumber: number) {
        if(courseNumber <=1){
            throw new Error("course count should be more than 1");
        }
        this._courseCount = courseNumber;
    }
    set setEmail(email: string){
        this.email = email;
    }
}

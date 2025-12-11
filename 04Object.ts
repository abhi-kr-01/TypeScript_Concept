// const User = 
// {
//     name: "Abhishek",
//     email: "abhikr954614@gmial.com",
//     isActive : true
// }

// function createUser({name: string , isPaid: boolean}){}

// //createUser({name: "abhishek", isPaid: "false"})

// //createUser({name: "abhishek", isPaid: "false",email:"ahdf@in"});  // it will generate an error
// // to resolve it 
// let newUser = {
//     name: "Abhishek kumar",
//     isPaid: false,
//     email: "abhiikr@gmail.com"
// }

// createUser(newUser);
// // it will not generate any error 
// function createCouser():{name: string , price: number} {
//     return {name : "reactjs", price: 999}
// }


/* ==================================================== */

// user defined -- type aliases

// type User = {
//     name : string;
//     email: string;
//     isActive : boolean
// }

// //function createUser( user : User){}
// function createUser( user : User); User {
//     return {name: "", email: " ", isActive: true}
// }

// createUser({name: "", email: " ", isActive: true})


//-----------------------------------------------------

type User = {
    readonly _id : string;  // it is readOnl;y not permit to access
    name  : string;
    email: string;
    isActive: boolean;
}

let myUser: User = {
    _id : "12345",
    name: "h",
    email: "h@",
    isActive: true
}
 
myUser.email = "a@mail"  // allowed to modification
//myUser._id = "123"   // not allowed


type cardNumber = {
    cardnumber: string
}

type cardDate = {
    carddate: string
}

type cradDetails = cardDate & cardNumber & {
    cvv : number
}

export {}
// =========================> L-01 <===========================

interface user{
    readonly dbId: string,
    email : string,
    userId: string,
    GoogleId?: string  // we add ? to give it is optional either it is present or not it's on your choice
    //startTrail : () => string
    startTrail() : string  // there is two method of intialise the methods
    getCoupon(couponName: string) : number
}

// const newUser : user = { dbId: "123@xyz", email: "abhikr@gmail.com",userId:"123qwerty",
//     startTrail: ()=> {
//         return "trail started"
//     },
//     getCoupon: (name:"notem") => {
//         return 10
//     }
// }


// ==============================> L - 02 < ==================================

// we can use again and again same interface or add more methods,variable, and etc .. 
// this is called "Reopening of interface"
interface user {
    gitHubToken : string
}

// const newUser : user = { dbId: "123@xyz", email: "abhikr@gmail.com",userId:"123qwerty",
//     startTrail: ()=> {
//         return "trail started"
//     },
//     getCoupon: (name:"notem") => {
//         return 10
//     },
//     gitHubToken : "github"
// }

interface Admin extends user {
    role: "admin" | "ta" | "learner"
}
// inheritance occur -- in interface we can call multipile inheritance
const newUser : Admin = { dbId: "123@xyz", email: "abhikr@gmail.com",userId:"123qwerty",
    startTrail: ()=> {
        return "trail started"
    },
    getCoupon: (name:"notem") => {
        return 10
    },
    gitHubToken : "github",
    role : "admin"
}

export {}
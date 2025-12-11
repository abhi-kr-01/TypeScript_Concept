function printAll(str : string | string[] | null ){

    if(str ){
        if(typeof str === "object") {
            for( const s of str) {
                console.log(s);
            }
        }
        else if (typeof str === "string"){
            console.log(str);
        }
    }
}

// we are checking all condition for detect all datatypes this is called narrowing
//typeof means types guarding 


///   -------- in ---------

interface User {
    email: string,
    name: string
}

interface admin {
    email : string,
    name : string,
    isAdmin: boolean
}

function checkAdmin(account : User| admin) {
    if("isAdmin" in account){
        return account.isAdmin
    }
}

// -------------------- instance of narrowing ----------------------------
// it is more similar to typeof 
// typeof check for variable
/// but instanceof check narrowing in class obkect

function logValue(x: Date | string){
    if(x instanceof Date) {
        console.group(x.toUTCString());
    }
    else{
        console.log(x.toUpperCase());
    }
}

// type predicates  -- to define a user defined type guard , we simply need to define a functio n whose return type is a type predicate

type Fish = { 
    swim: () => void
}
type Bird = {
    Fly  : () => void
}
function isFish(pet : Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

// it return true or false after typecasting putting condition

function getFood(pet: Fish | Bird){
    if(isFish(pet)){
        pet  // int his case even now it confuse after checking condition
        return "Fish food"
    }else {
        pet
        return "bird Food"
    }
}


// ---------- dicrimination union -------------------

interface circle {
    kind: "circle",
    radius: number
}

interface square {
    kind : "square",
    side : number
}

interface rectangle {
    kind : "rectangle",
    length : number,
    breadth: number,
}

type Shape = circle | square ;

function getTrueShape(shape : Shape) {
    if(shape.kind == "circle"){
        return Math.PI* shape.radius ** 2
    }
    else {
        return shape.side * shape.side
    }
}

function getArea(shape : Shape) {
    switch(shape.kind){
        case "circle": 
            return Math.PI* shape.radius ** 2

        case "square":
            return shape.side * shape.side
        
        default:
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
    }
}

/* ---------------------- ExhaustiveChecking is never type . so it is never be used it's variable name can be abything -------------------- */
// it is used when we left some datatype to check edge cases
// e.g : let's suppose we add rectangle in shape type But we don't check it's case . if , we will check all this then this default will never be in use

// you should have to always use "default" 

// we will use "DU"
// interface shape{
//     kind: "square" | "circle" | "rectangle",
//     edge : number
// }


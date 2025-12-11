let score : number | string = 33;

score = 55;
score = "1010100001";

type User = {
    name : string;
    id: number;
}

type Admin = {
    username : string;
    id: number;
}

let Abhishek: User | Admin = {
    name: "Abhishek",
    id: 223
}

Abhishek = {
    username : "ak",
    id: 223
}


function DbId(id: number | string){
    //making some API calls 
    // console.log(`Db id is : ${id}`);

    // edge case
    //id.toLowercase() // this will generate an error  to avoid it

    // check the type on where we need to use as number or as string
    if(typeof id === "string"){
        console.log(id.toLowerCase());
    }
    if(typeof id === "number"){
        console.log(id + 2);
    }
}

DbId(3);
DbId("3");


/* Arrays */

//const d: number[] | string[] = [1,2,3,4,5,"5"]; // this will generate error
const data: (number | string | boolean)[] = [1,2,3,4,5,"5"];  // this is the coorect way to handle all this union in array


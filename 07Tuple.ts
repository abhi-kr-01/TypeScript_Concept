/* In array we can make different datatype of array but we can't fixed it's position
to handle this we use tuple to fixed size of array with fixed dattatype .
It is very useful in big project e.g: api call*/

//const user: (string | number)[] = [1,"hc"];
let tUser: [string, number, boolean]
tUser = ["ak", 111, true]

let rgb : [number, number, number] = [255, 256, 257]  // now it is fixed with size and datatype

// for accessing an elements or modified it : yes we can do 
tUser[1] = 101;

// now we can use all the method of the array push(), pop(),shift(), unshift(),...

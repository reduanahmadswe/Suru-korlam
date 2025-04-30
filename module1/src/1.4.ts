//Basic Data Types

//string
let firstName : string = 'Reduan Ahmad';

//number
let roll : number = 123;

//boolean
let isAdmin : boolean = true;

//undefined
let x : undefined = undefined;

//null
let y: null = null;


let d : number;

d = 123;

// array
let friends : string[] = ['Reduan', 'Rafiq', 'Rifat'];
let eligibleRollList : number[] = [123, 124, 125, 126, 127];
// friends.push(7);  error: Argument of type 'number' is not assignable to parameter of type 'string'.
eligibleRollList.push(128);
// eligibleRollList.push('Reduan');  error: Argument of type 'string' is not assignable to parameter of type 'number'.

// tuple --> array  --> order --> type of values
let coordinates : [number,number]= [1,5];
let ageName : [number,string,boolean] = [123, 'Reduan',true];
{

// ternary operator || optional chaining || nullish coalescing operator

const age : number = 95;

if (age >= 18) {
    console.log("adult");
}else{
    console.log("not adult");
}

const isAdult = age >= 18 ? "adult" : "not adult";
console.log(isAdult);


//nullish coalescing operator
//null or undefined --> decision making

// const isAuthenticated = null;
const isAuthenticated = undefined;  

const result1 = isAuthenticated ?? "Gust User";
const result2 = isAuthenticated? isAuthenticated : "Gust User";

console.log({result1}, {result2}); 


type User = {
    name :string;
    address: {
        city: string;
        road: string;
        presentaddress: string;
        permanentaddress?: string;
    }
}

const user : User = {
    name : 'Reduan',
    address: {
        city: 'Dhaka',
        road: 'Mirpur',
        presentaddress: 'Mirpur 11',
    }

}
const permanentaddress = user?.address?.permanentaddress ?? "No Address";
console.log(permanentaddress); //undefined






}
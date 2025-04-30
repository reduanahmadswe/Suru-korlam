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






}
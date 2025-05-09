"use strict";
var _a, _b;
{
    // ternary operator || optional chaining || nullish coalescing operator
    const age = 95;
    if (age >= 18) {
        console.log("adult");
    }
    else {
        console.log("not adult");
    }
    const isAdult = age >= 18 ? "adult" : "not adult";
    console.log(isAdult);
    //nullish coalescing operator
    //null or undefined --> decision making
    // const isAuthenticated = null;
    const isAuthenticated = undefined;
    const result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Gust User";
    const result2 = isAuthenticated ? isAuthenticated : "Gust User";
    console.log({ result1 }, { result2 });
    const user = {
        name: 'Reduan',
        address: {
            city: 'Dhaka',
            road: 'Mirpur',
            presentaddress: 'Mirpur 11',
        }
    };
    const permanentaddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentaddress) !== null && _b !== void 0 ? _b : "No Address";
    console.log(permanentaddress); //undefined
}

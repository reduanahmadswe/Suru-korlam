"use strict";
{
    //nullabel types
    const searchName = (value) => {
        if (value) {
            console.log("Searching for", value);
        }
        else {
            console.log("There is nothing to search");
        }
    };
    searchName("Reduan");
    searchName(null);
    const getSpeedInMeterperSecond = (value) => {
        if (typeof value === 'number') {
            const convertedSpeed = (value * 1000) / 3600;
            console.log("Speed in meter per second", convertedSpeed);
        }
        else if (typeof value === 'string') {
            const [result, unit] = value.split(" ");
            console.log(result);
            const convertedSpeed = (parseFloat(result) * 1000) / 3600;
            console.log("Speed in meter per second", convertedSpeed);
        }
        else {
            console.log("Invalid speed value");
        }
    };
    getSpeedInMeterperSecond(`1000 kmh^-1`);
    // error: Argument of type 'null' is not assignable to parameter of type 'string'.
    const throwError = (msg) => {
        throw new Error(msg);
    };
    throwError("This is an error message");
}

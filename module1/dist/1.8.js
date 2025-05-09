"use strict";
//destructuring
{
    const user = {
        id: 345,
        name: {
            first: 'Reduan',
            middle: 'Ahmad',
            last: 'Rasel',
        },
        contactNo: 1234567890,
        address: 'Dhaka',
    };
    const { contactNo, name: { middle: midName }, } = user;
    //array destructuring
    const myfrands = ['Reduan', 'Rafiq', 'Rifat', 'Rabbi', 'Rahman', 'jabbar'];
    const [a, b, c, ...rest] = myfrands;
}

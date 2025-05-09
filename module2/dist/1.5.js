"use strict";
//Reference type --> Object
const user = {
    company: 'Programing Hero',
    firstName: 'Reduan',
    // middleName: 'Ahmad',
    lastName: 'Rasel',
    isMarried: false,
};
user.company = 'PH'; // error: Cannot assign to 'company' because it is a read-only property.

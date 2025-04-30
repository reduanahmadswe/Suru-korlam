//Reference type --> Object
const user : {
    // company : 'Programing Hero',//type -> literal type
    // company : string, // if you want to use dynamic value then use string;
    readonly company : string;
    firstName: string;
    middleName?: string; // optional property
    lastName: string;
    isMarried : boolean;
} ={
    company : 'Programing Hero',
    firstName: 'Reduan',
    // middleName: 'Ahmad',
    lastName: 'Rasel',
    isMarried: false,
}

user.company = 'PH'; // error: Cannot assign to 'company' because it is a read-only property.


//Reference type --> Object
{

    const user :{
        // company : 'Programing Hero',//type -> literal type;
        company ?: string, 
        name : string;
        age : number;
        isMarried : boolean;
        address:{
            city : string;
            countruy : string;
            zip ?: number;
        }
    } = {
        company : 'Programing Hero',
        name: 'reduan',
        age : 345,
        isMarried : false,
        address:{
            city : 'Dhaka',
            countruy : 'Bangladesh',
            zip : 1200,
        }
    }

    console.log(user);

    user.company = 'PH'; // error: Cannot assign to 'company' because it is a read-only property.
    user.name = 89345; // error: Type 'number' is not assignable to type 'string'.


}

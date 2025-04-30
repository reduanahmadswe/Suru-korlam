{

    //type alias

    type Student = {
        name : string;
        age : number;
        contactNo?: number;
        address : string;
        gender : string;
    }

    // const student1 : {
    //     name : string;
    //     age : number;
    //     gender : string;
    //     contactNo : number;
    //     address : string;
    // } = {
    //     name : 'Reduan',
    //     age : 23,
    //     gender : 'Male',
    //     contactNo : 1234567890,
    //     address : 'Dhaka',
    // }

    const student1 : Student ={
        name : 'Reduan',
        age : 23,
        gender : 'Male',
        contactNo : 1234567890,
        address : 'Dhaka',
    }

    // const student2 : {
    //     name : string;
    //     age : number;
    //     gender : string;
    //     address : string;
    // }= {
    //     name : 'Rafiq',
    //     age : 23,
    //     gender : "Male",
    //     address : 'Dhaka',
    // }

    const student2 : Student={
        name : 'Rafiq',
        age : 23,
        gender : "Male",
        address : 'Dhaka',
    }

    const student3 : Student={
        name : 'Rafiq',
        age : 23,
        gender : "Male",
        address : 'Dhaka',
    }


    type UserName = string;
    type IsAdmin = boolean;

    const userName : UserName = 'Reduan';
    const isAdmin : IsAdmin = true;


    type Add = (num1: number , num2:number) => number;

    const add : Add= (num1,num2)=> num1+num2;



}
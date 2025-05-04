{
    type User1 = {
        name : string;
        age : number;
    };


    interface User2 {
        name : string;
        age : number;
    };


    type UserWithRole1 = User1 & {role : string}

    interface UserWithRole2 extends User2 {
        role : string ;
    }

    const user1: UserWithRole1 ={
        name  : 'reduna',
        age : 7325,
        role : 'manager',
    }

    const user2 : UserWithRole2 ={
        name : 'reduan',
        age : 83465,
        role : 'manager',
    }

    type rollNumber = number


    type Roll1 = number[];

    interface Roll2 {
        [index :  number] : number

    }


    const rollNumber : Roll1 = [73,4,6,556,7,];

    type Add1 = (num1:number,num2 : number )=> number

    interface Add2 {
        (num1: number , num2 : number ): number
    }


    const Add2 = (num1,num2)=> num1+num2;


}




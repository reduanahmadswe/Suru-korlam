{
    //introductin to generics                
    type GenaricArray<T> = Array<T>;

    //const rollNumbers : number[] = [3,6,8];
    
    const rollNumbers : GenaricArray<number> = [3,6,8];
    console.log(rollNumbers);
    //const mentors : string[] = ['Mr.X','Mr.Y','Mr.Z'];
    const mentors : GenaricArray<string> = ['Mr.X','Mr.Y','Mr.Z'];
    console.log(mentors);

    //const boolArray : boolean[] = [true,false,true];
    const boolArray : GenaricArray<boolean> =  [true,false,true];
    console.log(boolArray);

    // type User ={
    //     name : string;
    //     age : number,
    // }


    interface User {
        name : string;
        age : number,
    }
    // const user : GenaricArray<{name:string,age:number}> = [
    //     {
    //         name : 'reduan',
    //         age : 100,
    //     },
    //     {
    //         name :'ahmad',
    //         age : 100,
    //     },
    // ]

    const user : GenaricArray<User> = [
        {
            name : 'reduan',
            age : 100,
        },
        {
            name :'ahmad',
            age : 100,
        },
    ]


    //generic tuple 

    type GenaricTuple<X,Y> = [X,Y];

    const manush : GenaricTuple<string,string>= ['Mr.X','Mr.Y']

    const UserWithID :GenaricTuple<number,{naem:string,email:string}>
    = [1234,{naem : 'reduan',email : 'a@gmail.com'}]



}
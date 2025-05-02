{
    // type GenaricArray<T> = Array<T>;



    // const students: GenaricArray<string> = ['reduan', 'ahmad', 'rasel'];
    // console.log(students);


    // const numbers: GenaricArray<number> = [2, 3, 4, 5, 6, 7];
    // console.log(numbers);


    // const bollArray: GenaricArray<boolean> = [true, false, true];
    // console.log(bollArray);

    // interface User {
    //     name: string,
    //     age: number,
    // }

    // const users: GenaricArray<User> = [
    //     {
    //         name: 'reduan',
    //         age: 894353,
    //     },
    //     {
    //         name: 'ahmad',
    //         age: 856767,
    //     }
    // ]

    // console.log(users);


    // type GenaricTuple<T, U> = [T, U];

    // const manush: GenaricTuple<string, number> = ['Reduan', 7834656];
    // console.log(manush);

    // interface ContactUser {
    //     email: string,
    //     phone: number,
    // }

    // interface UserAddress {
    //     presentadd: string,
    //     permanentadd: string,
    // }


    // const UserWithID: GenaricTuple<number, { name: string; contact: ContactUser; address: UserAddress }> = [
    //     784353,
    //     {
    //         name: 'reduan',
    //         contact: {
    //             email: 'r@gmail.com',
    //             phone: 7856034,
    //         },
    //         address: {
    //             presentadd: 'Dhaka',
    //             permanentadd: 'Brahmanbaria',
    //         }
    //     }
    // ];

    // console.log(UserWithID);


    type GenaricTupleTwo<T, U> = [T, U];

    interface UsersName {
        firstName: string,
        middleName: string,
        lastName: string,
    }

    interface UserContact {
        phone: number,
        email: string,
    }

    interface UserAddress {
        presentAdd: string;
        permanentAdd: string;
    }
    
    interface UserInfo {
        name: UsersName;
        userContact: UserContact;
        userAddress: UserAddress;
    }

    const Person: GenaricTupleTwo<number, UserInfo> = [
        874364389,
        {
            name: {
                firstName: 'reduan',
                middleName: 'ahmad',
                lastName: 'rasel',
            },
            userContact: {
                phone: 768453,
                email: 'A@gjkdfa.com',
            },
            userAddress: {
                presentAdd: 'Dhaka',
                permanentAdd: 'Brahmanbaria',
            }            
        }

    ];

    const printUserInfo = (person: GenaricTupleTwo<number, UserInfo>) => {
        const [id, info] = person;
        console.log(`ID: ${id}`);
        console.log(`Full Name: ${info.name.firstName} ${info.name.middleName} ${info.name.lastName}`);
        console.log(`Email: ${info.userContact.email}, Phone: ${info.userContact.phone}`);
        console.log(`Address: Present - ${info.userAddress.presentAdd}, Permanent - ${info.userAddress.permanentAdd}`);
    };
    
    printUserInfo(Person);
    



}
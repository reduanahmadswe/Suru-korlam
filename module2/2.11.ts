{
    //utility types
    //pick

    type Person = {
        name : string;
        age : number;
        email?: string;
        contactNo : number;
    }

    type NameAge = Pick<Person,'name'|'age'>

    //Omit
    type ContactInfo = Omit<Person,"name"|"age">

    //required 
    type PersonRequired = Required<Person>

    //partial

    type PersonPartial = Partial<Person>

    type PersonReadonly = Readonly<Person>

    //readOnly; 
    const person1 :Person = {

        name : 'Mr.dskf',
        age : 73485,
        contactNo : 3848,
    };

    person1.name = 'Mr. yx'

    //record
    // type MyObj = {
    //     a: string,
    //     b: string,
    // }

    type MyObj = Record<string,string>

    const EmptyObj : Record<string,unknown> = {}

    const obj1 : MyObj = {
        a: 'aa',
        b: 'bb',
        c : 'cc',
        d : 'dfd',
        e: 'dksfg',
    }


    //
}
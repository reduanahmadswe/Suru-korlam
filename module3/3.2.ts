{
    //oop - inheritance

    class Person {
        name: string;
        age: number;
        address: string;


        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        }

        getSleep(numberOfHours: number) {
            console.log(`${this.name} will sleep for ${numberOfHours}`);
        }
    }

    // class Student {
    //     name: string;
    //     age: number;
    //     address: string;


    //     constructor(name: string, age: number, address: string) {
    //         this.name = name;
    //         this.age = age;
    //         this.address = address;
    //     }

    //     getSleep(numberOfHours: number) {
    //         console.log(`${this.name} will sleep for ${numberOfHours}`);
    //     }

    // }


    class Student extends Person{

        constructor(name: string, age: number, address: string) {
            // this.name = name;
            // this.age = age;
            // this.address = address;
            super(name,age,address);
        }

    }

    // class Teacher {
    //     name: string;
    //     age: number;
    //     address: string;
    //     designation: string;


    //     constructor(name: string, age: number, address: string, designation: string) {
    //         this.name = name;
    //         this.age = age;
    //         this.address = address;
    //         this.designation = designation;
    //     }

    //     getSleep(numberOfHours: number) {
    //         console.log(`${this.name} will sleep for ${numberOfHours}`);
    //     }

    //     takeClass(numOfClass: number) {
    //         console.log(`${this.name} will take ${numOfClass}`)
    //     }

    // }

    class Teacher extends Person{
        
        designation: string;


        constructor(name: string, age: number, address: string, designation: string) {
            // this.name = name;
            // this.age = age;
            // this.address = address;
            super(name,age,address);
            this.designation = designation;
        }

        takeClass(numOfClass: number) {
            console.log(`${this.name} will take ${numOfClass}`)
        }

    }


    const student = new Student('Mr. Reduan', 89756, 'Uganda');
    const teacher = new Teacher('Mr. Teacher', 8756, 'Uganda', 'Lecturer');


    const st = student.name;
    console.log(st);






}
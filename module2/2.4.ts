{

    // type GenaricArray<T> = Array<T>;
    // // const numbers : number[] = [1,3,4,5];
    // const numbers: GenaricArray<number> = [1, 3, 4, 5];
    // console.log(numbers);


    // // const mentors : string[] = ['Mr.X','Mr.Y'];
    // const mentors: GenaricArray<string> = ['Mr.X', 'Mr.Y'];

    // console.log(mentors);


    // //const boolArray : boolean[] = [true,false,true];
    // const boolArray: GenaricArray<boolean> = [true, false, true];
    // console.log(boolArray);


    // const user : GenaricArray<{name:string,age:number}> = [
    //     {
    //         name : 'reduan',
    //         age : 78345,
    //     },
    //     {
    //         name : 'ahmad',
    //         age : 8956,
    //     }
    // ]

    // //tuple 

    // type GenaricTuple<X,Y> = [X,Y];



    // // const manush : [string,number] = ['reduan',8945];
    // const manush : GenaricTuple<string,number> = ['reduan',8945];



    //interface - genaric

    interface Developer<T,X> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        }
        smartWatch: T;
        bike?: X
    }

    type EmilabWatch = {
        brand: string,
        model: string,
        display: string,
    }

    const poorDeveloper: Developer<EmilabWatch,null> = {
        name: 'reduan',
        computer: {
            brand: "Asus",
            model: "iore",
            releaseYear: 7864,
        },
        smartWatch: {
            brand: 'Emilab',
            model: 'kw66',
            display: 'OLED',
        }

    }

    interface AppleWatch {
        brand: string,
        model: string,
        heartTrack: boolean,
        sleepTrack: boolean,
    }

    interface YamahaBike {
        model: string,
        engineCapacity : string,
    }


    const richDeveloper: Developer<AppleWatch,YamahaBike> = {
        name: 'Rich reduan',
        computer: {
            brand: "HP",
            model: "iore",
            releaseYear: 7864,
        },
        smartWatch: {
            brand: 'APPLE WATCH',
            model: 'kgfjw66',
            heartTrack: true,
            sleepTrack: true,

        },
        bike:{
            model : 'Yamaha',
            engineCapacity : '100CC',
        }

    }




}
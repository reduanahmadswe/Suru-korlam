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

    // interface Developer<T,X> {
    //     name: string;
    //     computer: {
    //         brand: string;
    //         model: string;
    //         releaseYear: number;
    //     }
    //     smartWatch: T;
    //     bike?: X
    // }

    // type EmilabWatch = {
    //     brand: string,
    //     model: string,
    //     display: string,
    // }

    // const poorDeveloper: Developer<EmilabWatch,null> = {
    //     name: 'reduan',
    //     computer: {
    //         brand: "Asus",
    //         model: "iore",
    //         releaseYear: 7864,
    //     },
    //     smartWatch: {
    //         brand: 'Emilab',
    //         model: 'kw66',
    //         display: 'OLED',
    //     }

    // }

    // interface AppleWatch {
    //     brand: string,
    //     model: string,
    //     heartTrack: boolean,
    //     sleepTrack: boolean,
    // }

    // interface YamahaBike {
    //     model: string,
    //     engineCapacity : string,
    // }


    // const richDeveloper: Developer<AppleWatch,YamahaBike> = {
    //     name: 'Rich reduan',
    //     computer: {
    //         brand: "HP",
    //         model: "iore",
    //         releaseYear: 7864,
    //     },
    //     smartWatch: {
    //         brand: 'APPLE WATCH',
    //         model: 'kgfjw66',
    //         heartTrack: true,
    //         sleepTrack: true,

    //     },
    //     bike:{
    //         model : 'Yamaha',
    //         engineCapacity : '100CC',
    //     }

    // }


    // interface Developer {
    //     name : string,
    //     computer :{
    //         brand : string,
    //         model : string,
    //         releseYear : number,
    //     }
    //     smartWatch : TemplateStringsArray,
    // }

    // const poorDeveloper : Developer<> = {
    //     name : 'reduan',
    //     computer:{
    //         brand : 'Asus',
    //         model : 'fahsdf',
    //         releaseYear :89435,
    //     }
    //     smartWatch :{
    //         brand : 'Emilab',
    //         model :'adf',
    //         display : 'oeld',
    //     }
    // }

    type EmilabWatch = {

        brand: string;
        model: string;
        display: string;

    }

    interface Developer<T, X = null> {
        name: string;
        computers: {
            brand: string;
            model: string;
            releseYear: number;
        }
        smartWatch: T;
        bike?: X
    }

    const poorDeveloper: Developer<EmilabWatch> = {
        name: 'Reduan',
        computers: {
            brand: 'dkslf',
            model: 'klsdahf',
            releseYear: 8979,
        },
        smartWatch: {
            brand: 'emilab',
            model: 'sdfj',
            display: 'OLED',
        }

    }

    interface appleWatch {
        brand: string;
        modle: string;
        hardTrack: boolean;
        sleepTrack: boolean;
    }

    interface YamahaBike {
        model: string;
        engine: string;
    }

    const richDeveloper: Developer<appleWatch, YamahaBike> = {
        name: 'Reduan',
        computers: {
            brand: 'dkslf',
            model: 'klsdahf',
            releseYear: 8976579,
        },
        smartWatch: {
            brand: 'apple watch',
            modle: 'lkjsalkdf',
            hardTrack: true,
            sleepTrack: true,

        },
        bike: {
            model: 'Yamaha',
            engine: '100cc',
        }

    }


}
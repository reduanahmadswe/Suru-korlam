{

    //type assertion
    let anything: any;

    anything = "next level web development";

    anything = 32424;

    // (anything as string ).
    // (anything as number)


    const kgToGm = (value: string | number):
        string | number | undefined => {
        if (typeof value === 'string') {
            const convertedvalue = parseFloat(value) * 1000;
            return `The consverted value is ${convertedvalue}`;
        }
        if (typeof value === 'number') {
            return value * 1000;
        }
    };


    const result1 = kgToGm(1000) as number;
    const result2 = kgToGm('1000') as string;

    console.log(result1);
    console.log(result2);

    type CustomError = {
        message: string;
    }

    try{

    }catch (error) {
        console.log((error as CustomError).message);
    }


}
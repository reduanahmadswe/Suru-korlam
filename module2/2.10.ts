{
    // mapped type
    const arrOfNumber : number[] = [1,23,3,435];

    //const arrOfString : string[] = ['1','2','45']


    const arrOfString : string[] = arrOfNumber.map((number)=>
        number.toString()
    );

    console.log(arrOfString);


    type AreaNumber = {
        height : number;
        width : number;
    };

    type Height = AreaNumber['height']  //look up type 




    // type AreaString = {
    //     height : string;
    //     width : string;
    // }

    // type AreaString = {
    //     [key in 'height' | 'width'] : string
    // }

    type AreaString<T> = {
        [key in keyof T] : T[key]
    }

    const area1 : AreaString<{height : string; width : number}> ={
        height : '78645',
        width : 89,
    }


    //
}
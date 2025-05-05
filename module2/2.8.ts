{
    //promise 


    //simulate
    // const createPromise = () : Promise<string>=>{
    //     return new Promise<string>((resolve,reject)=>{
    //         const data : string = "something";
    //         if(data){
    //             resolve(data)
    //         }else{
    //             reject("failed to , load data")
    //         }
    //     })
    // }

    


    // const createPromise = () : Promise<{something: string}>=>{
    //     return new Promise<{something: string}>((resolve,reject)=>{
    //         const data : {something: string} = {something : 'Something'};
    //         if(data){
    //             resolve(data)
    //         }else{
    //             reject("failed to , load data")
    //         }
    //     })
    // }

    type TODO = {
        id : number;
        userId : number;
        titile : string;
        completed : boolean;
    }


    const getTodo = async() : Promise<TODO>=>{
        const responce = await fetch('https://jsonplaceholder.typicode.com/todos/1')

        const data = await responce.json();

       // console.log(data)
       return data;
    }

    getTodo();

    type Something = {something: string};

    const createPromise = () : Promise<Something>=>{
        return new Promise<Something>((resolve,reject)=>{
            const data : Something = {something : 'Something'};
            if(data){
                resolve(data)
            }else{
                reject("failed to , load data")
            }
        })
    }

    //calling create promise function 

    const showData = async() : Promise<Something> => {
        const data : Something = await createPromise();
       // console.log(data);

       return data;
    };

    showData();

    //
}
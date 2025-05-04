{

    //function with generics

    const createArray = (param: string): string[] => {
        return [param]
    }
    const res1 = createArray('Bangladesh')

    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param]
    }

    const resGeneric = createArrayWithGeneric<string>('Bangladesh')

    interface User {
        id: number,
        name: string
    };

    const resGenericObj = createArrayWithGeneric<User>(
        {
            id: 222,
            name: 'reduan'
        }
    )

    
















}
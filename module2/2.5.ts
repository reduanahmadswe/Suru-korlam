{

    //function with generics

    const createArray = (pharm: string): string[] => {
        return [pharm]
    }


    // const createArrayWithGeneric = (pharm : string) : string[] => {
    //     return [pharm]
    // }
    const createArrayWithGeneric = <T>(pharm: T): T[] => {
        return [pharm]
    }

    const res1 = createArray('Bangladesh');
    const resGeneric = createArrayWithGeneric<string>('Bangladesh')

    interface User {
        id: number;
        name: string;
    }
    // const resGenericObj = createArrayWithGeneric<{id:number;name:string}>({
    //     id : 333,
    //     name : 'Mr. Reduan',
    // })
    const resGenericObj = createArrayWithGeneric<User>({
        id: 333,
        name: 'Mr. Reduan',
    })



    const createArrayWithTuple = <T, Q>(parm1: T, parm2: Q): [T, Q] => {
        return [parm1, parm2]
    }

    const res10 = createArrayWithTuple('Bangladesh', 87345);
    const resGeneric10 = createArrayWithTuple<string, { name: string }>('Bangladesh', { name: 'Asia' })

    interface User {
        id: number;
        name: string;
    }
    // const resGenericObj = createArrayWithGeneric<{id:number;name:string}>({
    //     id : 333,
    //     name : 'Mr. Reduan',
    // })
    const resGenericObj10 = createArrayWithTuple<User, { presentAdd: string }>(
        {
            id: 333,
            name: 'Mr. Reduan',
        },
        {
            presentAdd : 'sldkfj',
        }
        
    )


    const addCourseToStudent = <T> (student : T)=>{
        const course = 'Next level web Development'

        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent(
        {
            name:'Mr x',
            email :'dksfa@gkadf.com',
            devType : 'NLWD'
        }
    )

    const student2 = addCourseToStudent(
        {
            name:'Mr Y',
            email :'sfa@gkadf.com',
            devType : 'NLWD',
            hasWatch : 'Apple Watch'
        }
    )

    
















}
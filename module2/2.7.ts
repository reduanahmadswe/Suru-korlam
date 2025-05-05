{
    //generic constraint with keyof operator

    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    }

    type Owner1 = 'bike ' | 'car' | 'ship'; //manually

    type Owner2 = keyof Vehicle

    //const person1 : Owner2 = ""

    const user = {
        name: 'Mr. reduan',
        age: 26,
        address: 'dha'
    }

    const car = {
        model : 'kasdf',
        year : 3000,
    }

    // const getPropertyValue =<X,Y extends "name"|"age"|"address">(obj: X, key: Y) => {
    //     return obj[key]
    // }
    const getPropertyValue =<X,Y extends keyof X>(obj: X, key: Y) => {
        return obj[key]
    }

    

    user['age']

    const result1 = getPropertyValue(user,"name");

    const resultcar = getPropertyValue(car,"model");



    // user['key']


}
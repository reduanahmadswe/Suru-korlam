
{

    let name = 'Redua Ahmad';
    name = 'Rasel';
    console.log(name);


    let age = 43;
    age = 44;
    console.log(age);


    let playerName ;
    console.log(playerName);
    playerName = 'Redua Ahmad';
    playerName = 34;
    console.log(playerName);


}

function multiply(a:number,b:number):number{
    return a*b;
}

console.log(multiply(2,3));


let fruits:string[] = ['apple', 'banana', 'orange'];

fruits.push('grape');
 

console.log(fruits);


let mixt = [1, 'apple', true, 3.14,{}];

mixt.push('banana');
mixt.push(42);
mixt.push(false);
mixt.push([1,2,3]);
mixt.push({name: 'John', age: 30});

console.log(mixt);


//objects

let person = {
    name : 'Reduan',
    age : 23,
    isStudent : true,
    hobbies : ['reading', 'sports'],
    address : {
        city : 'Dhaka',
        country : 'Bangladesh'
    }
};

person.name = 'Rifat';
person.age = 24;
person.isStudent = false;
person.hobbies.push('music');
person.address.city = 'Chittagong';
person.address.country = 'Bangladesh';


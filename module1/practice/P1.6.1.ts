//function 

//Normal function

function add(num1: number, num2: number): number {
    return num1 + num2;
}
console.log("The result is ",add(2, 3)); //5

function addthree(num1:number,num2:number,num3:number):number{
    return num1 + num2 + num3;
}
console.log("The result is ",addthree(2, 3, 4)); //9


const addarrow = (num1:number,num2:number):number =>{
    return num1 +num2;
}


const arrowfunction = (a:number , b:number):number =>{
    return a+b;
}

//object function method
const poorUser = {
    name : 'reduan',
    balance : 6876,
    addbalance(balance : number): number{
        return balance+balance;
    }
}


const arr : number[] = [1,3,4,556,6,7,76,,8];

const newarr : number[] = arr.map((elem : number) => elem*elem);


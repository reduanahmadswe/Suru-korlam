{



//learning function
//Normal function
//arrow function

function add(num1: number , num2:number = 10):number{
    return num1 + num2;
}

add(3,'2');

const addArrow = (num1 : number , num2:number):number =>{
    return num1 + num2;
}

//object --> function --> method
const poorUser ={
    name : 'Reduan',
    balance: 0,
    addBalance(balance : number) : string{
        return `My new balance is : ${this.balance + balance}`;
    }
}


const arr : number[] = [1,2,3,4,5,6,7,8,9,10];
const newarr : number[] = arr.map((elem : number )=> elem*elem);


}
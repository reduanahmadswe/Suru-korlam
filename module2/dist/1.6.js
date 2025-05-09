"use strict";
{
    //learning function
    //Normal function
    //arrow function
    function add(num1, num2 = 10) {
        return num1 + num2;
    }
    add(3, '2');
    const addArrow = (num1, num2) => {
        return num1 + num2;
    };
    //object --> function --> method
    const poorUser = {
        name: 'Reduan',
        balance: 0,
        addBalance(balance) {
            return `My new balance is : ${this.balance + balance}`;
        }
    };
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const newarr = arr.map((elem) => elem * elem);
}

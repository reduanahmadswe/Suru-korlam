{
<<<<<<< HEAD
    //Access modifiers
    class BankAccount {
        public readonly id: number;
        public name: string;
        private balance: Number;
=======
    //access modifires 
    class BankAccount {
        public readonly id: number;
        public name: string;
        protected _balance: number;

>>>>>>> 5f8ff9394c17f11f4ac66cfaa25c9bfa66edc55f

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
<<<<<<< HEAD
            this.balance = balance;
        }

        addDeposite(amount: number) {
            this.balance = this.balance + amount;
        }


    }

    const goribManusherAccount = new BankAccount(111, "Mr. gorib", 10);
    goribManusherAccount.addDeposite(300);

    //
=======
            this._balance = balance;
        }

        public addDeposit(amount: number) {
            this._balance = this._balance + amount
        }

        public getBalance() {
            return this._balance;
        }

    }

    class StudentAccount extends BankAccount {
        test(){
            this.
        }
    }

    const goribManusherAccount = new BankAccount(111, 'Mr.gorib ', 70);
    goribManusherAccount.addDeposit(20);
    const myBalance = goribManusherAccount.getBalance();

    console.log(myBalance);

>>>>>>> 5f8ff9394c17f11f4ac66cfaa25c9bfa66edc55f
}
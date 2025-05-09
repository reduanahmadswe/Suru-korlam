{
    //Access modifiers
    class BankAccount {
        public readonly id: number;
        public name: string;
        private balance: Number;

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this.balance = balance;
        }

        addDeposite(amount: number) {
            this.balance = this.balance + amount;
        }


    }

    const goribManusherAccount = new BankAccount(111, "Mr. gorib", 10);
    goribManusherAccount.addDeposite(300);

    //
}
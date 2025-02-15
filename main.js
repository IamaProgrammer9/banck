class BankAccount {

    name = "";
    age = "";
    
    constructor(name, age, balance, address) {
        this.name = name;
        this.age = age;
        this.balance = balance;
        this.address = address;
    }

    accountInfo = function () {
        console.log(this.name, this.balance);
    }

    deposit = async function (amount) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.addAmount(amount).then(() => {
                    console.log("Withdrawn successfuly")
                })
                resolve();
            }, 1000);
        })
    }

    addAmount = async function(amount) {
        return new Promise((resolve, reject) => {
            this.balance += amount;
        })
    }

    balanceCompare = async function(amount) {
        if (amount > this.balance) {
            return false;
        }
        return true;
    }

    withdraw = async function (amount) {
        const compare = await this.balanceCompare(amount);
        if (compare) {
            this.balance -= amount;
            return `Your balance is ${this.balance}`;
        }
        return "Go get a job";
    }

}
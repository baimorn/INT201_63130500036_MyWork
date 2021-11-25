let accid = 1001 ;

class Customer {
constructor(fname , lname){
    this.firstname = fname ;
    this. lastname= lname ;
    this.accountid = accid ;
    accid += 1 ;
    }
}

class BankAccount {  
    gatbalance(mymoney){
        this.balance = mymoney ;
        return "Balance : " + this.balance ;
    }

    deposit(money){
        this.balance += money ;
        return "Complete Deposit : " + this.balance ;
    }
    withdraw(money){
        if(this.balance < money){
            return "Monry not enough" ;
        }else 
        this.balance -= money ;
        return "Complete Withdraw : " + this.balance ;
    }

}

let customer1 = new Customer("Bam","Motth");
// let accountid1 = new BankAccount(customer1)
// console.log(customer1);
// console.log(accountid1.gatbalance(1000));
// console.log(accountid1.deposit(500)) ;
// console.log(accountid1.withdraw(200)) ;

// let customer2 = new Customer("Bai","Morn");
// let accountid2 = new BankAccount(customer2)
console.log(customer1);
// console.log(accountid2.gatbalance(300));
// console.log(accountid2.deposit(10)) ;
// console.log(accountid2.withdraw(100)) ;
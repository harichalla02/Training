class BankAccount{
    public accountHolder : string;
    private balance : number

    constructor(accountHolder: string, balance: number){
        this.accountHolder = accountHolder;
        this.balance = balance;
    }
    deposit(amount:number) : void{
        this.balance = this.balance + amount;
    }
    getBalance(){
        return this.balance;
    }
}
const result = new BankAccount("Hari", 150000);
result.deposit(10000)
console.log(result.accountHolder)
console.log(result.getBalance());
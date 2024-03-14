import {Account} from './Account.js';
import {SavingsAccount} from './SavingsAccount.js';
import {CheckingAccount} from './CheckingAccount.js';

// import * as a from './Account.js';
// const myAccount = new a.Account('001', 'Allie', 1000);

const myAccount = new Account('001', 'Allie', 1000);
myAccount.deposit(500);
myAccount.withdraw(500);
console.log(myAccount.getBalance());
console.log(myAccount._ownerName); // undefined

const mySavingsAccount = new SavingsAccount('001', 'Allie', 1000, 2);
mySavingsAccount.addInterest();

const myCheckingAccount = new CheckingAccount('001', 'Allie', 1000, 2);
myCheckingAccount.withdraw(200);
myCheckingAccount.withdraw(200);
myCheckingAccount.withdraw(200);
myCheckingAccount.resetTransactionCount();
myCheckingAccount.withdraw(100);

const yourCheckingAccount = new CheckingAccount('002', 'You', 500);
yourCheckingAccount.withdraw(100);
yourCheckingAccount.withdraw(100);

import {Account} from './Account.js';

const myAccount = new Account('001', 'Allie', 1000);
myAccount.deposit(500);
myAccount.withdraw(500);
console.log(myAccount.getBalance());
console.log(myAccount._ownerName); // undefined

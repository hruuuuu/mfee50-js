// SavingsAccount.js
import {Account} from './Account.js';
export class SavingsAccount extends Account {
  static defaultInterestRate = 2;
  #interestRate;
  constructor(accountNumber, ownerName, balance, interestRate = SavingsAccount.defaultInterestRate) {
    super(accountNumber, ownerName, balance);
    this.#interestRate = interestRate;
  }
  addInterest() {
    const interest = (this.#interestRate * this.getBalance()) / 100;
    this.deposit(interest);
    console.log(`存款利息 ${interest}, 餘額: ${this.getBalance()}。`);
  }
}

// CheckingAccount.js
import {Account} from './Account.js';
export class CheckingAccount extends Account {
  static defaultFreeTransactions = 1;
  #freeTransactions;
  #transactionCount;
  constructor(accountNumber, ownerName, balance, freeTransactions = CheckingAccount.defaultFreeTransactions) {
    super(accountNumber, ownerName, balance);
    this.#freeTransactions = freeTransactions;
    this.#transactionCount = 0;
  }
  withdraw(amount) {
    super.withdraw(amount);
    this.#transactionCount++;
    if (this.#transactionCount > this.#freeTransactions) {
      console.log(`扣除交易手續費。`);
      super.withdraw(10);
    }
  }
  resetTransactionCount() {
    this.#transactionCount = 0;
  }
}

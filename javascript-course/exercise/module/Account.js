export class Account {
  static bankName = '資展銀行';
  #accountNumber;
  #ownerName;
  #balance;
  constructor(accountNumber, ownerName, balance) {
    this.#accountNumber = accountNumber;
    this.#ownerName = ownerName;
    this.#balance = balance || 0;
  }
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`金額 ${amount} 入帳成功, 餘額: ${this.#balance}。`);
    }
  }
  withdraw(amount) {
    if (amount > this.#balance) {
      console.log(`餘額不足, 提款失敗。`);
    } else {
      this.#balance -= amount;
      console.log(`金額 ${amount} 扣款成功, 餘額: ${this.#balance}。`);
    }
  }
  getBalance() {
    console.log(`餘額: ${this.#balance}。`);
    return this.#balance;
  }
}

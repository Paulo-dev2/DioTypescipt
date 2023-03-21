import { Account } from "./DioAccount";

export class AdminAccount extends Account {

    constructor(name: string, accountNumber: number){
        super(name, accountNumber);
    }

    deposit = (value: number): void => {
        this.balance += value + 10;
    }
}
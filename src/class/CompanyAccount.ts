import { Account } from "./DioAccount";

export class CompanyAccount extends Account {

    constructor(name: string, accountNumber: number){
        super(name, accountNumber);
    }

    getLoan = (value: number) => {
        if (this.validateStatus()){
            this.balance += value;
        }
    }
}
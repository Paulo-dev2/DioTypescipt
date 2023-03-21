export abstract class Account {
    private name: string;
    private readonly accountNumber: number;
    balance: number = 0;
    private status: boolean = true;

    constructor(name: string, accountNumber: number) {
        this.name = name;
        this.accountNumber = accountNumber;
    }

    setName = (name: string): void => {
        this.name = name;
    }

    getName = (): string => {
        return this.name;
    }

    deposit = (value: number): void => {
        if (this.validateStatus()){
            console.log('Você depositou: ', value);
            this.balance += value;
        }
    }

    withdraw = (value: number): string | undefined => {
        if (this.validateStatus()){
            if (this.balance - value >= 0){
                this.balance -= value;
                return "Saque Feito com sucesso";
            }else{
                throw new Error('Saque Invalido');
            }
        }
    }

    getBalance = (): number => {
        return this.balance;
    }

    validateStatus = (): boolean => {
        if (this.status) return this.status

        throw new Error('Conta Invalida');
        
    }
}
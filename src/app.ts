import { AdminAccount } from "./class/AdminAccount";
import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(15987,'Paulo',1522);
peopleAccount.deposit(100);
const balancePeople: number = peopleAccount.getBalance();
const withdrawPeople: string | undefined = peopleAccount.withdraw(100);
console.log("Saldo da Pessoa: ", balancePeople);
console.log("Resultado do saque: ", withdrawPeople);

const companyAccount: CompanyAccount = new CompanyAccount('Google',789);
companyAccount.deposit(150);
companyAccount.getLoan(100);
const balanceCompany: number = companyAccount.getBalance();
console.log("Saldo da Company: ", balanceCompany);

const adminAccount: AdminAccount = new AdminAccount('Admin',789);
adminAccount.deposit(150);
const balanceAdmin: number = adminAccount.getBalance();
console.log("Saldo do Admin: ", balanceAdmin);
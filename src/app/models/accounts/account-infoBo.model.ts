import { TransactionInfoBo } from "../transactions/transaction-infoBo.model";

export interface AccountInfoBo{
    accountNumber:string;
    firstName?:string;
    lastName?:string;
    transactions: TransactionInfoBo[];
}
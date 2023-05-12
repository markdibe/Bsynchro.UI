import { TransactionInfoBo } from "../transactions/transaction-infoBo.model";

export interface AccountInfoBo{
    accountNumber:string;
    transactions: TransactionInfoBo[];
}
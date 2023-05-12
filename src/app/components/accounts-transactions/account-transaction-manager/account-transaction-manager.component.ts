import { Component, OnInit, ViewChild } from '@angular/core';
import { AccountGenerateComponent } from '../../accounts/account-generate/account-generate.component';
import { TransactionGenerateComponent } from '../../transactions/transaction-generate/transaction-generate.component';
import { AccountTransactionBO } from 'src/app/models/accounts/account-transaction.model';
import { AccountBo } from 'src/app/models/accounts/accountBo.model';
import { TransactionBo } from 'src/app/models/transactions/transactionBo.model';
import { ToastrService } from 'ngx-toastr';
import { AccountInfoListComponent } from '../../accounts/account-info-list/account-info-list.component';

@Component({
  selector: 'app-account-transaction-manager',
  templateUrl: './account-transaction-manager.component.html',
  styleUrls: ['./account-transaction-manager.component.css'],
})
export class AccountTransactionManagerComponent implements OnInit {
  @ViewChild('account') account: AccountGenerateComponent;
  @ViewChild('transaction') transaction: TransactionGenerateComponent;
  @ViewChild('accountInfos') accountInfos:AccountInfoListComponent;

  constructor(private toastr: ToastrService) {}
  ngOnInit(): void {}

  generateTransaction() {
    this.account.createAccount()?.subscribe((accountBo: AccountBo) => {
      this.notifyAccountCreation(accountBo);
      this.makeTransaction(accountBo);
    });
  }

  notifyAccountCreation(accountBo: AccountBo) {
    if (!accountBo.isExisted) {
      this.toastr.success('new account created', 'Account!');
    }
  }

  makeTransaction(accountBo: AccountBo) {
    if(this.transaction.amount.valueOf() <0){
      return ;
    }
    this.transaction.transact({
      accountId: accountBo.accountId,
      amount: this.transaction.amount,
    } as TransactionBo)?.subscribe(()=>{
      this.toastr.info("transaction successfull!")
      this.accountInfos.getaccountInformations();
      this.accountInfos.countAccounts();
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { AccountInfoBo } from 'src/app/models/accounts/account-infoBo.model';
import { AccountInputQuery } from 'src/app/models/inputs/account-input-query.model';
import { AccountService } from 'src/app/services/accounts/account.service';

@Component({
  selector: 'app-account-info-list',
  templateUrl: './account-info-list.component.html',
  styleUrls: ['./account-info-list.component.css'],
})
export class AccountInfoListComponent implements OnInit {
  accountInputQuery = { take: 5, skip: 0 } as AccountInputQuery;
  accountInfos: AccountInfoBo[] = [];
  accountCounter:number= 0 ;

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.countAccounts();
    setTimeout(()=>{
      this.getaccountInformations();
    },1000)
    
    
  }

  onPageChange(accountInput: AccountInputQuery) {
    accountInput.skip = accountInput.page * accountInput.rows;
    accountInput.take = accountInput.rows;
    this.accountInputQuery = accountInput;
    this.getaccountInformations();
  }

  getaccountInformations() {
    this.accountService
      .getAccountInformations(this.accountInputQuery)
      .subscribe((accountInfo: AccountInfoBo[]) => {
        this.accountInfos = accountInfo;
      });
  }

  countAccounts(){
    this.accountService.countAccounts().subscribe((counter)=>{
      console.log(counter);
      this.accountCounter = counter;
    });
  }
}

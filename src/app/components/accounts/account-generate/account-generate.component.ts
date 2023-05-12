import { Component, Input, OnInit } from '@angular/core';
import { CreateAccountBO } from 'src/app/models/accounts/createAcccountBo.model';
import { AccountService } from 'src/app/services/accounts/account.service';

@Component({
  selector: 'app-account-generate',
  templateUrl: './account-generate.component.html',
  styleUrls: ['./account-generate.component.css'],
})
export class AccountGenerateComponent implements OnInit {
   accountNumber: string;

  ngOnInit(): void {}

  constructor(private accountService: AccountService) {}
  
  isAccountExisted() {
    if (!this.accountNumber) {
      return;
    }
    this.accountService.isAccountExisted(this.accountNumber);
  }

  createAccount() {
    if (!this.accountNumber) {
      return null;
    }
    let createdAccount = {
      accountNumber: this.accountNumber,
    } as CreateAccountBO;
    return this.accountService.addAccount(createdAccount);
  }
}

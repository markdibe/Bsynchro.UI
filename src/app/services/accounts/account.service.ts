import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateAccountBO } from 'src/app/models/accounts/createAcccountBo.model';
import { AccountBo } from 'src/app/models/accounts/accountBo.model';
import { AccountInputQuery } from 'src/app/models/inputs/account-input-query.model';
import { AccountInfoBo } from 'src/app/models/accounts/account-infoBo.model';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private baseUri = environment.apiUrl + '/accounts';
  constructor(private httpClient: HttpClient) {}

  isAccountExisted(accountNumber: string): Observable<boolean> {
    let url = `${this.baseUri}/IsAccountExisted?accountNumber=${accountNumber}`;
    return this.httpClient.get<boolean>(url);
  }

  addAccount(createdAccount: CreateAccountBO):Observable<AccountBo> {
    let url = `${this.baseUri}/Create`;
    return this.httpClient.post<AccountBo>(url, createdAccount);
  }

  getAccountInformations(inputQuery:AccountInputQuery):|Observable<AccountInfoBo[]>{
    let url = `${this.baseUri}/GetAccountInformations`
    return this.httpClient.post<AccountInfoBo[]>(url,inputQuery);
  }

  countAccounts(){
    let url = `${this.baseUri}/countAccounts`;
    return this.httpClient.get<number>(url);
  }
}

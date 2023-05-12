import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TransactionBo } from 'src/app/models/transactions/transactionBo.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private baseUrl = environment.apiUrl + '/transactions';

  constructor(private httpClient: HttpClient) {}

  transact(transaction: TransactionBo) {
    let url = this.baseUrl + '/transact';
    return this.httpClient.post(url, transaction);
  }
}

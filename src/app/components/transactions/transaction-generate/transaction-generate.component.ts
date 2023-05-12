import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TransactionBo } from 'src/app/models/transactions/transactionBo.model';
import { TransactionService } from 'src/app/services/transactions/transaction.service';

@Component({
  selector: 'app-transaction-generate',
  templateUrl: './transaction-generate.component.html',
  styleUrls: ['./transaction-generate.component.css'],
})
export class TransactionGenerateComponent {
  public amount: Number;

  constructor(
    private transactionService: TransactionService,
    private toastr: ToastrService
  ) {}
  transact(transaction: TransactionBo) {
    if (transaction.amount <= 0) {
      return;
    }
    return this.transactionService.transact(transaction);
  }
}

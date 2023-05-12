import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { PaginatorModule } from 'primeng/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import { TableModule } from 'primeng/table';


import { AccountTransactionManagerComponent } from './components/accounts-transactions/account-transaction-manager/account-transaction-manager.component';
import { AccountInfoListComponent } from './components/accounts/account-info-list/account-info-list.component';
import { AppComponent } from './app.component';
import { AccountGenerateComponent } from './components/accounts/account-generate/account-generate.component';
import { TransactionGenerateComponent } from './components/transactions/transaction-generate/transaction-generate.component';
import { LoadingComponent } from './components/shared/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountGenerateComponent,
    TransactionGenerateComponent,
    AccountTransactionManagerComponent,
    AccountInfoListComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    PaginatorModule,
    TableModule,

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AppComponent, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

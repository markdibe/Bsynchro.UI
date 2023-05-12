import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTransactionManagerComponent } from './account-transaction-manager.component';

describe('AccountTransactionManagerComponent', () => {
  let component: AccountTransactionManagerComponent;
  let fixture: ComponentFixture<AccountTransactionManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountTransactionManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountTransactionManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

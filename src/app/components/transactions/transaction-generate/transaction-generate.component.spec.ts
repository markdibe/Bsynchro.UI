import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionGenerateComponent } from './transaction-generate.component';

describe('TransactionGenerateComponent', () => {
  let component: TransactionGenerateComponent;
  let fixture: ComponentFixture<TransactionGenerateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionGenerateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionGenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountGenerateComponent } from './account-generate.component';

describe('AccountGenerateComponent', () => {
  let component: AccountGenerateComponent;
  let fixture: ComponentFixture<AccountGenerateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountGenerateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountGenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

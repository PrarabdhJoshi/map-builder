import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FederatedLoginComponent } from './federated-login.component';

describe('FederatedLoginComponent', () => {
  let component: FederatedLoginComponent;
  let fixture: ComponentFixture<FederatedLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FederatedLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FederatedLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

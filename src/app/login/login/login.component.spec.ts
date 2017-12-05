import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './login.component';
import { MatCardModule } from '@angular/material';
import {RouterModule} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import { AuthService } from '../../auth/auth.service';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        RouterModule.forRoot([]),
      ],
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue: '/'
        },
        AuthService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

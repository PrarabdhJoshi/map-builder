import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import {UserService} from '../../domain/user.service';
import { AuthService } from '../../auth/auth.service';

  @Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
  })
  export class LoginComponent implements OnInit {

    //Added for Auth
    username: string;
    password: string;

    error: string;
    
    public userEmail: string;
    form: FormGroup;
    fb: FormBuilder = new FormBuilder();
    emailValidator(email: FormControl): any {
      const value = (email.value || '') + '';
      const myEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
      const valid = myEmail.test(value);
      return valid ? null : {email: true};
    }
  

    constructor(private _authService: AuthService,private router: Router) {
    }

    ngOnInit() {
      this.form = this.fb.group({
        email: ['', this.emailValidator],
        password: ['']
      });
    }

    login() {
      this.router.navigateByUrl('//home');
    }

    onSubmit() {
      if (this._authService.login(this.username, this.password)) {
        this.error = null;
  
        let redirect = this._authService.redirectUrl ? this._authService.redirectUrl : '/home';
        this.router.navigate([redirect]);
      } else {
        this.error = "Authentication failed !";
      }
    }
  }

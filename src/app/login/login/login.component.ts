import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import {UserService} from '../../domain/user.service';
import { AuthService } from '../../auth/auth.service';
import { AuthService as AService} from "angular4-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";
import { SocialUser } from "angular4-social-login";
  @Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
  })
  export class LoginComponent implements OnInit {

    //Added for Authentication
    username: string;
    password: string;

    error: string;
    private user: SocialUser;
    private loggedIn: boolean;
    public userEmail: string;
    form: FormGroup;
    fb: FormBuilder = new FormBuilder();
    emailValidator(email: FormControl): any {
      const value = (email.value || '') + '';
      const myEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
      const valid = myEmail.test(value);
      return valid ? null : {email: true};
    }
  

    constructor(private _authService: AuthService,private router: Router,private authService: AService) {
    }

    signInWithGoogle(): void {
      this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    }
    ngOnInit() {

      this.authService.authState.subscribe((user) => {
        this.user = user;
        this.loggedIn = (user != null);
        if(this.loggedIn)
          this.router.navigateByUrl('//home');
      });
      this.form = this.fb.group({
        email: ['', this.emailValidator],
        password: ['']
      });
    }

    // If Logged redirected towards Home
    login() {
      this.router.navigateByUrl('//home');
    }

    // on submit called on Button press 
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

import { Injectable } from '@angular/core';

@Injectable()
export class AuthService{

  isLoggedIn: boolean;
  redirectUrl: string;

  constructor() { }

  // Used to Login an User
  login(username: string, password: string): boolean {
    if (username === 'test@gmail.com' && password === 'testuser123') {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }

    return this.isLoggedIn;
  }


  // Used to logout an user
  logout() {
    this.isLoggedIn = false;
  }
}




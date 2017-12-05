import { Component, OnInit } from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { AuthService as AServ } from "angular4-social-login";
import { SocialUser } from "angular4-social-login";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _authService: AuthService, private router: Router,private authService: AServ) { }

  signOut(): void {
    this.authService.signOut();
    this.router.navigateByUrl('//login');
  }
  ngOnInit() {
  }

  // Logout the logged in user
  onLogout() {
    this._authService.logout();
  }


}

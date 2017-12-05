import { Component, OnInit } from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  // Logout the logged in user
  logout() {
    this._authService.logout();
  }

}

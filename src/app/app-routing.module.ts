import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CenterComponent} from './core/main/center.component';
import { MapComponent } from './map/map.component';
import {EditVenueComponent} from './edit-venue/edit-venue.component';
import { LoginComponent } from './login/login/login.component';

import { AuthGuardService } from './auth/auth-guard.service';


const routes: Routes = [  
{path: '', redirectTo: '/login', pathMatch: 'full'},
  {
  path: 'home', 
  component: CenterComponent,
  canActivate: [AuthGuardService],
  },
  {
    path: 'map',
    component: MapComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'edit', 
    component:EditVenueComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


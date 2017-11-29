import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CenterComponent} from './core/main/center.component';
import { MapComponent } from './map/map.component';
import {EditVenueComponent} from './edit-venue/edit-venue.component';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'home', component: CenterComponent},
  {path: 'map',component: MapComponent},
  {path: 'edit', component:EditVenueComponent},
  {path: 'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CenterComponent} from './core/main/center.component';
import { MapComponent } from './map/map.component';
import {EditVenueComponent} from './edit-venue/edit-venue.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: CenterComponent},
  {path: 'Service/Sign_in',component: MapComponent},
  {path: 'edit', component:EditVenueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


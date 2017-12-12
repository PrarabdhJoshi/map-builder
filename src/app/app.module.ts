import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material';
import { MatRadioModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';
import {HttpClientModule} from '@angular/common/http';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatStepperModule} from '@angular/material/stepper';
import { EditVenueComponent } from './edit-venue/edit-venue.component';
import { LoadingComponent } from './ui/loading/loading.component';
import { ProspectComponent } from './prospect/prospect.component';
import { NgxPaginationModule}  from 'ngx-pagination';
import { FederatedLoginComponent } from './federated-login/federated-login.component';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';

import { SocialLoginModule, AuthServiceConfig } from "angular4-social-login";
import { GoogleLoginProvider } from "angular4-social-login";
 
let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("Google-client-id")
  }
]);
 
export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [ 
    AppComponent,
    MapComponent,
    EditVenueComponent,
    LoadingComponent,
    ProspectComponent,
    FederatedLoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatRadioModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatListModule,
    MatTabsModule,
    MatPaginatorModule,
    MatStepperModule,
    FormsModule,
    NgxPaginationModule,
    SocialLoginModule,
    AgmCoreModule.forRoot({
      apiKey:YOUR_API_KEY,
      
      libraries: ["places"]
      
    }),
    RouterModule.forRoot([
      {
          path:'map',
          component: MapComponent
      },
      {
        path: 'edit',
        component: EditVenueComponent
      },
      {
        path:'prospect',
        component:ProspectComponent
      }
    ])
  ],
  providers:[AuthService, AuthGuardService, {
    provide: AuthServiceConfig,
    useFactory: provideConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
 }


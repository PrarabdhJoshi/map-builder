import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { VenueComponent } from './venue/venue.component';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule,MatRadioModule,MatToolbarModule, MatCardModule,MatInputModule} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    VenueComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAsf3dSFPmh3ZuPGxTBQPnAHrliHIjuodk'
    }),
    AgmSnazzyInfoWindowModule,
    BrowserAnimationsModule,MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

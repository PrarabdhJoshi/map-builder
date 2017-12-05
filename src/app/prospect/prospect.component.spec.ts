import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectComponent } from './prospect.component';
import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import { HttpClient } from '@angular/common/http';
import {} from '@types/googlemaps';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { NgxPaginationModule}  from 'ngx-pagination';
import { MatCardModule } from '@angular/material';
import {RouterModule} from '@angular/router';


import { MapComponent } from './../map/map.component';
import { Component,OnInit,ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatPaginator} from '@angular/material';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { CenterComponent } from './../core/main/center.component';
import { EditVenueComponent } from './../edit-venue/edit-venue.component';
import {APP_BASE_HREF} from '@angular/common';

import { AppRoutingModule } from "../app-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material';
import { MatRadioModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatStepperModule} from '@angular/material/stepper';
import { AuthService } from '../auth/auth.service';
import { AuthGuardService } from '../auth/auth-guard.service';
import { MatSelectModule } from '@angular/material/select';





describe('ProspectComponent', () => {
  let component: ProspectComponent;
  let fixture: ComponentFixture<ProspectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
              HttpClientModule,
              HttpModule,
              MatSelectModule,
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
              AgmCoreModule.forRoot({
                apiKey:'AIzaSyBvuCT0-V_Y50Np7Six7oTgqqL5wUzSPiw',
                
                libraries: ["places"]
                //'AIzaSyBvuCT0-V_Y50Np7Six7oTgqqL5wUzSPiw'
              }),    
              RouterModule,
      
        ],
        providers: [
          {
            provide: APP_BASE_HREF,
            useValue: '/'
          }
  
         ],
      declarations: [ ProspectComponent, MapComponent, CenterComponent,EditVenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Chceck show_result value obtained', ()=> {
    const fixture = TestBed.createComponent(ProspectComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.show_result).toEqual(false);
    });

    
    it('Check near value obtained', ()=> {
      const fixture = TestBed.createComponent(ProspectComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.near).toEqual(true);
      });

      it('call setCurrentPosition function', ()=> {
        const fixture = TestBed.createComponent(ProspectComponent);
        const app = fixture.debugElement.componentInstance;
        app.setCurrentPosition();
        });
    

});

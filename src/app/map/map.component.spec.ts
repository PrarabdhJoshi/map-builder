import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MapComponent } from './map.component';
import { AgmCoreModule } from '@agm/core';
import { Component,OnInit,ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { AgmMap, AgmMarker } from '@agm/core';
import { HttpClient } from '@angular/common/http';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatPaginator} from '@angular/material';
import { MatCardModule } from '@angular/material';
import {RouterModule} from '@angular/router';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatStepperModule} from '@angular/material/stepper';
import { NgxPaginationModule}  from 'ngx-pagination';
import { AuthService } from '../auth/auth.service';
import { AuthGuardService } from '../auth/auth-guard.service';
import { MatSelectModule } from '@angular/material/select';


describe('MapComponent', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapComponent, CenterComponent,EditVenueComponent ],
      imports: [
        MatCardModule, 
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

       ]
      
    })
    .compileComponents();
    
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
  expect(component).toBeTruthy();
  });

 it('should fetch data', ()=> {
 expect(component.zoom).toEqual(10);
 });

 it('should fetch lat', ()=> {
 expect(component.lat).toEqual(37.0902);
 });

 it('should fetch lng', ()=> {
 expect(component.lng).toEqual(-95.7129);
 });

 it('should fetch maptype', ()=> {
  expect(component.mapType).toEqual('roadmap');
  });
 

});

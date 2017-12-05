import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVenueComponent } from './edit-venue.component';
import {Http} from '@angular/http';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { AppRoutingModule } from "../app-routing.module";
import { CenterComponent } from './../core/main/center.component';
import { MapComponent } from './../map/map.component';
import { MatCardModule } from '@angular/material';
import { MatGridListModule} from '@angular/material/grid-list';
import { AgmCoreModule } from '@agm/core';
import { HttpClient } from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';

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




describe('EditVenueComponent', () => {
  let component: EditVenueComponent;
  let fixture: ComponentFixture<EditVenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule,
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
      declarations: [ EditVenueComponent,MapComponent, CenterComponent ],
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue: '/'
        }

      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


 
});

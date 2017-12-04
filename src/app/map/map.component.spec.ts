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


describe('MapComponent', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapComponent ],
      imports: [
        MatCardModule,
        AgmCoreModule.forRoot({
          apiKey:'AIzaSyBvuCT0-V_Y50Np7Six7oTgqqL5wUzSPiw'
        })
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
 expect(component.lat).toEqual(42.858217);
 });

 it('should fetch lng', ()=> {
 expect(component.lng).toEqual(-70.929990);
 });

});

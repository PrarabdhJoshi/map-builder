import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapComponent } from './map.component';
import { AgmCoreModule } from '@agm/core';


describe('MapComponent', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapComponent ],
      imports: [
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
});

describe('MapComponent', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapComponent ],
      imports: [
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
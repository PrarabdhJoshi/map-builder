import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVenueComponent } from './edit-venue.component';
import {Http} from '@angular/http';
import { HttpModule } from '@angular/http';

describe('EditVenueComponent', () => {
  let component: EditVenueComponent;
  let fixture: ComponentFixture<EditVenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [ EditVenueComponent ],
      providers: [Http],
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

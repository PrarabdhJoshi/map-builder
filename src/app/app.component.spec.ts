import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {CoreModule} from './core/core.module';
import {APP_BASE_HREF} from '@angular/common';
import {MatToolbarModule} from '@angular/material';
import { MapComponent } from './map/map.component';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MapComponent
      ],
      imports: [
        RouterModule.forRoot([]),
        CoreModule,
        MatToolbarModule,
      ],
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue: '/'
        }
      ]
    }).compileComponents();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
 
});

  import { async, ComponentFixture, TestBed } from '@angular/core/testing';

  import {APP_BASE_HREF} from '@angular/common';
  import { CenterComponent } from './center.component';
  import { MatCardModule } from '@angular/material';
  import { RouterModule } from '@angular/router';
  import { HttpModule } from '@angular/http';
  import { MatAutocompleteModule } from '@angular/material';
  import { FormControl } from '@angular/forms';
  import {Observable} from 'rxjs/Observable';
  import 'rxjs/add/operator/startWith';
  import 'rxjs/add/operator/map';
  import {FormsModule, ReactiveFormsModule} from '@angular/forms';

  
  describe('CenterComponent', () => {
    let component: CenterComponent;
    let fixture: ComponentFixture<CenterComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ CenterComponent ],
        imports: [
          RouterModule.forRoot([]),
          MatCardModule,
          HttpModule,
          MatAutocompleteModule,
          FormsModule, 
          ReactiveFormsModule
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
      fixture = TestBed.createComponent(CenterComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

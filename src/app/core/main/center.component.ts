import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {

  stateCtrl: FormControl;
  filteredStates: Observable<any[]>;
  
  placeholder: String='Location';
  short_name: String = "appetites-on-main";
  //states;
  all_data: object;
  

  @Output() messageEvent = new EventEmitter<String>();
  

  states: any[] = [
    {
      short_name: '101-steak'
    },
    {
      short_name: 'amelias'
    },
    {
      short_name: 'artisans-table'
    },
    {
      short_name: 'baby-wale'
    },
    {
      short_name: 'backfin-blues'
    }
  ];


  ngOnInit() {
    
        this.http.get('http://127.0.0.1:5000/api/get_venue/getall').subscribe(data => {
          // Read the result field from the JSON response.
          this.all_data = data;
           //console.log(this.states);
           
        });
    
  
function Controller($scope) {
  
      $scope.radioChecked = function ()
      {
          $scope.placeholder="%";
          $scope.apply();
      }
  
      $scope.radiounChecked = function ()
      {
          $scope.placeholder="Count";
          $scope.apply();
      }
  }
  }
  
  constructor(private http: HttpClient) {

    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
        .startWith(null)
        .map(state => state ? this.filterStates(state) : this.states.slice());
  }

  // sendMessage(){
  //   this.messageEvent.emit(this.message);
  // }

  @HostListener('window:keyup.enter', ['$event'])
  oonEnter(e) {
    this.short_name=(e.target.value);
  }
  filterStates(short_name: string) {
    return this.states.filter(state =>
      state.short_name.toLowerCase().indexOf(short_name.toLowerCase()) === 0);
  }


  

}

  
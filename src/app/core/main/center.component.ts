import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import {FormControl} from '@angular/forms';

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
  message: String = "hola";
  placeholder: String='Location';
  short_name: String = "appetites-on-main";
  

  @Output() messageEvent = new EventEmitter<String>();
  

  states: any[] = [
    {
      name: '101-steak'
    },
    {
      name: 'amelias'
    },
    {
      name: 'artisans-table'
    },
    {
      name: 'baby-wale'
    },
    {
      name: 'backfin-blues'
    }
  ];

  constructor() {
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
        .startWith(null)
        .map(state => state ? this.filterStates(state) : this.states.slice());
  }

  sendMessage(){
    this.messageEvent.emit(this.message);
  }

  @HostListener('window:keyup.enter', ['$event'])
  oonEnter(e) {
    this.short_name=(e.target.value);
  }
  filterStates(name: string) {
    return this.states.filter(state =>
      state.name.toLowerCase().indexOf(name.toLowerCase()) >= 0);
  }



  ngOnInit() {

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
  

}

  
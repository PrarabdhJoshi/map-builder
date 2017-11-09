import { Component, OnInit } from '@angular/core';
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
  placeholder: String='Location';
  

  states: any[] = [
    {
      name: 'Alibaba Restaurant'
    },
    {
      name: 'Indian Cusine'
    },
    {
      name: 'Gator Bar'
    },
    {
      name: 'Restaurant of Italia'
    },
    {
      name: 'Restaurant of Peru'
    }
  ];

  constructor() {
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
        .startWith(null)
        .map(state => state ? this.filterStates(state) : this.states.slice());
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

  
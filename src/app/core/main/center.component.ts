import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {apiService} from '../../api.service';
import {Http} from '@angular/http';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css'],
  providers: [apiService]
})
export class CenterComponent implements OnInit {

  inputField: FormControl = new FormControl();
  zipinputField: FormControl = new FormControl();
  searchbyname: boolean=true;
  searchbylocation: boolean = false;
  short_name: String;
  city_name: string;
  search_result: any[] = [];
  zip_search_result: any[]=[];
  
  constructor(private _apiService: apiService) { 
    

  }
    
  ngOnInit() {

    this.short_name = this._apiService.get_default_location();
    
      this.inputField.valueChanges
      .subscribe(inputField => this._apiService.searchVenues(inputField)
      .subscribe(result => {
        if(result.status === 400){return;}
        else{
          this.search_result = result;
        }
      }));

      this.zipinputField.valueChanges
      .subscribe(zipinputField => this._apiService.searchVenuesbylocation(zipinputField)
      .subscribe(result => {
        if(result.status === 400){return;}
        else{
          this.zip_search_result = result;
        }
      }));

    
  
// function Controller($scope) {
  
//       $scope.radioChecked = function ()
//       {
//           $scope.placeholder="%";
//           $scope.apply();
//       }
  
//       $scope.radiounChecked = function ()
//       {
//           $scope.placeholder="Count";
//           $scope.apply();
//       }
//   }
  }
  
  
  // sendMessage(){
  //   this.messageEvent.emit(this.message);
  // }

  @HostListener('window:keyup.enter', ['$event'])
  oonEnter($event) {
    this.short_name=($event.target.value);
  }
 
  onclick($event){
    this.short_name=$event.target.innerHTML;
    console.log($event);
  }

  onlocclick($event){
    this.city_name = $event.target.innerHTML;
  }
  selected($event){
    console.log($event.target.innerHTML);
  }


  locsearch(){
    this.searchbylocation=true;
    this.searchbyname=false;
  }
  namesearch(){
    this.searchbylocation=false;
    this.searchbyname=true;
  }

}

  
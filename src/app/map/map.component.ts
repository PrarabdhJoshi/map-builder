import { Component,OnInit,ViewChild } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { AgmMap, AgmMarker } from '@agm/core';
import { HttpClient } from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatPaginator} from '@angular/material';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit{
  //zoom level for Map
  zoom: number = 10;
  //Start Position for Map
  lat: number = 37.0902;
  lng: number = -95.7129; 
  //Markers Variables
  visible: boolean = false;
  url1: string;
  api_data: Object;
  near:boolean=true;
  showspinner: boolean=true;
  mapType: any = 'roadmap';  
  message :any;
  location: any;
  nearby_data:Object;
  labelOptions = {
    color: '#FFFFFF',
    fontFamily: '',
    fontSize: '14px',
    fontWeight: 'bold',
    text: 'Some Text',
    }
 
  constructor(private http: HttpClient,private activatedRoute: ActivatedRoute){
   // console.log(this.url1);
   }
   
  ngOnInit(): void {
    // Make the HTTP request:
    this.activatedRoute.params.forEach((params) => {
      this.message=this.activatedRoute.snapshot.queryParams['short_name'];
      this.location=this.activatedRoute.snapshot.queryParams['city_name'];
  });
   if(this.message!=undefined){
    this.http.get('http://127.0.0.1:5000/api/get_venue/'+this.message).subscribe(data => {
      // Read the result field from the JSON response.
      this.api_data = data;
      
      // console.log(this.api_data);
      this.lat=this.api_data[0].loc.lt;
      this.lng=this.api_data[0].loc.lng;
      this.zoom=10;
      this.url1 = 'http://localhost:5000/api/get_nearby?lat='+this.lat+'&lon='+this.lng;
      this.http.get(this.url1).subscribe(data => {
        // Read the result field from the JSON response.
        this.nearby_data = data;
        
         //console.log(this.nearby_data);
      });
      
    });
  }
  else if(this.location!=undefined){
    this.http.get('http://127.0.0.1:5000/api/get_location/'+this.location).subscribe(data => {
      // Read the result field from the JSON response.
      this.api_data = data;
      this.lat=this.api_data[0].loc.lt;
      this.lng=this.api_data[0].loc.lng;
      this.near=false;
      this.zoom=10;
      // console.log(this.api_data);
      // this.url1 = 'http://localhost:5000/api/get_nearby?lat='+this.lat+'&lon='+this.lng;
      // this.http.get(this.url1).subscribe(data => {
      //   // Read the result field from the JSON response.
      //   this.nearby_data = data;
      //    //console.log(this.nearby_data);
      // });
    });
    //this.lat=this.api_data[0].loc.lt;
    //this.lng=this.api_data[0].loc.lng;
  }
  
 // console.log(this.url1);
  
  
  
}
receiveMessage($event){
  this.message = $event;
}

 
  //multiple pinpoints on click
  
  mapClicked($event){
    this.visible=true;
  }

}


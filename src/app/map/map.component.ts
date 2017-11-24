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
  //zoom level
  zoom: number = 5;
  //Start Position
  lat: number = 37.0902;
  lng: number = -95.7129; 
  //Markers
  visible: boolean = false;
  
  api_data: Object;
  
  message :any;
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private http: HttpClient,private activatedRoute: ActivatedRoute){ }
  ngOnInit(): void {
    // Make the HTTP request:
    this.activatedRoute.queryParams.forEach((params: Params) => {
      this.message=this.activatedRoute.snapshot.queryParams['short_name'];
  });
    this.http.get('http://127.0.0.1:5000/api/get_venue/'+this.message).subscribe(data => {
      // Read the result field from the JSON response.
      this.api_data = data;
      // console.log(this.api_data);
    });
  }
  
  receiveMessage($event){
    this.message = $event;
  }

  // clickedMarker(marker:marker, index:number){
  //   console.log('Clicked Marker: '+marker.name+'at index'+index);
  // }
 

  //multiple pinpoints on click
  
  mapClicked($event){
    this.visible=true;
  }

  // markerDragEnd(marker:any, $event:any){
  //   var updMarker = {
  //     name: marker.name,
  //     lat: parseFloat(marker.lat),
  //     lng: parseFloat(marker.lng),
  //     draggable:false
  //   }
  //   var newLat = $event.coords.lat;
  //   var newLng = $event.coords.lat;
  // }



}


// //Marker type
// interface marker{
//   name?:string;
//   desc?:string;
//   icon?:string;
//   lat:number;
//   lng:number;
//   draggable:boolean;  
// }

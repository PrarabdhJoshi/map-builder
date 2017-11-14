import { Component,OnInit } from '@angular/core';
import { AgmMap, AgmMarker } from '@agm/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit{
  //zoom level
  zoom: number = 10;
  //Start Position
  lat: number = 42.858217;
  lng: number = -70.929990; 
  //Markers
  api_data: Object;
  markers: marker[] =[
    {
      name:'Alibaba Restaurant',
      desc: 'Status: Available',
      icon: 'https://www.wikipedia.org/',
      lat: 42.825588,
      lng: -71.018029,
      draggable: false 
    },
    {
      name:'Indian Cusine',
      desc: 'Status: Unavailable',
      icon: 'https://www.wikipedia.org/' ,
      lat: 42.868164,
      lng: -70.889071,
      draggable: false 
    },
    {
      name:'Restaurant of Italia',
      desc: 'Status: Available',
      icon: 'https://www.wikipedia.org/',
      lat: 42.858279,
      lng: -70.930498,
      draggable: false 
    }
  ];

  constructor(private http: HttpClient){ }
  ngOnInit(): void {
    // Make the HTTP request:
    this.http.get('http://127.0.0.1:5000/api/get_venue/getall').subscribe(data => {
      // Read the result field from the JSON response.
      this.api_data = data;
      // console.log(this.api_data);
    });
  }

  clickedMarker(marker:marker, index:number){
    console.log('Clicked Marker: '+marker.name+'at index'+index);
  }
 

  //multiple pinpoints on click
  /*
  mapClicked($event:any){
    var newMarker = {
      name: 'Untitled',
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable:false
    }
    this.markers.push(newMarker);
  }

  markerDragEnd(marker:any, $event:any){
    var updMarker = {
      name: marker.name,
      lat: parseFloat(marker.lat),
      lng: parseFloat(marker.lng),
      draggable:false
    }
    var newLat = $event.coords.lat;
    var newLng = $event.coords.lat;
  }
*/


}


//Marker type
interface marker{
  name?:string;
  desc?:string;
  icon?:string;
  lat:number;
  lng:number;
  draggable:boolean;  
}

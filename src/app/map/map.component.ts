import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/Http';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent  implements OnInit{

  
  constructor(private http:HttpClient) { }

  cityName = 'bistro-on-main';
  searchCity(){
   
  }
  
  ngOnInit():void{
    this.http.get('http://localhost:5000/api/get_venue/bistro-on-main')
    .subscribe(data=>{
      console.log(data);
    })
  }
 

}

 // lat: number = 51.678418;
  // long: number = 7.809007;
  
  
    

import { Component, OnInit } from '@angular/core';
import { ElementRef, NgZone, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-prospect',
  templateUrl: './prospect.component.html',
  styleUrls: ['./prospect.component.css']
})
export class ProspectComponent implements OnInit {
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  public show_result: boolean = false;
  prospect_url: string;
  prospect_data: Object;
  near:boolean=true;
  v:boolean =false;

  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private http: HttpClient
  ) {}

  ngOnInit() {
    //set google maps defaults
    this.zoom = 6;
    this.latitude = 39.8282;
    this.longitude = -98.5795;
   

    //create search FormControl
    this.searchControl = new FormControl();

    //set current position
    this.setCurrentPosition();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.show_result=true;
          
          this.prospect_url = 'http://localhost:5000/api/get_nearby?lat='+this.latitude+'&lon='+this.longitude;
          this.http.get(this.prospect_url).subscribe(data => {
            // Read the result field from the JSON response.
            this.prospect_data = data;
            
             //console.log(this.nearby_data);
          });

        });
      });
    });
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }
  partnersfound($event){
    this.v=true;
  }
}

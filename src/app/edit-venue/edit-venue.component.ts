import { Component,OnInit,ViewChild } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-edit-venue',
  templateUrl: './edit-venue.component.html',
  styleUrls: ['./edit-venue.component.css']
})
export class EditVenueComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  venue_id:any;
  venue_map:any;

  constructor(private _formBuilder: FormBuilder,private activatedRoute: ActivatedRoute, private http:HttpClient) { }

  ngOnInit() {
    this.activatedRoute.queryParams.forEach((params: Params) => {
      this.venue_id=this.activatedRoute.snapshot.queryParams['venue_id'];
  });
  this.http.get('http://127.0.0.1:5000/api/venue_id/'+this.venue_id).subscribe(data => {
    // Read the result field from the JSON response.
    this.venue_map = data[0];
     console.log(this.venue_map);
  });

  console.log(this.venue_id);
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}

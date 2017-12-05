import { Component,OnInit,ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import {editService} from './edit-venue.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-edit-venue',
  providers:[editService],
  templateUrl: './edit-venue.component.html',
  styleUrls: ['./edit-venue.component.css']
})
export class EditVenueComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  venue_id:any;
  venue_map;
  

  constructor(private activatedRoute: ActivatedRoute,private http:Http,private _editService:editService) { 
    
  }

  ngOnInit():void {
    this.activatedRoute.queryParams.forEach((params: Params) => {
      this.venue_id=this.activatedRoute.snapshot.queryParams['venue_id'];
  });
  -
   this._editService.searchvenuebyid(this.venue_id).subscribe(result => {
    if(result.status === 400){return;}
    else{
      this.venue_map = result[0];
    }
  });
  
}
}
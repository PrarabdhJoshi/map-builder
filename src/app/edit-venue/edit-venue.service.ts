import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, RequestOptions, RequestMethod } from '@angular/http';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
@Injectable()
export class editService{
    
       
        constructor(private http: Http){
            
        }
        searchvenuebyid(term: string){
            let url = 'http://127.0.0.1:5000/api/venue_id/'+term;
            
            return this.http.get(url).map(response => response.json());
        }
       
    }
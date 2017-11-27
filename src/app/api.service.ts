import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()

export class apiService{

    api_result: any;
    constructor(private http: Http){}

    searchVenues(term: string){
        let url = 'http://127.0.0.1:5000/api/get_venue/'+term;
        return this.http.get(url).map(res => res.json());
    }
    
    get_default_location(){
            return "";
    }
    
    searchVenuesbylocation(term: string){
        let url = 'http://127.0.0.1:5000/api/get_location/'+term;
        return this.http.get(url).map(res => res.json());
    }

    searchvenuebyid(term: string){
        let url = 'http://127.0.0.1:5000/api/venue_id/'+term;
        return this.http.get(url).map(res=> res.json());
    }
   
}
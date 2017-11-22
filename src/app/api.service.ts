import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Http} from '@angular/http';

@Injectable()

export class apiService{

    api_result: any;
    constructor(private http: Http){}

    searchVenues(term: string){
        let url = 'http://127.0.0.1:5000/api/get_venue/'+term;
        return this.http.get(url).map(res => res.json());
    }
    
    get_api_data(){
            return "101-steak";
    }
    
   
}
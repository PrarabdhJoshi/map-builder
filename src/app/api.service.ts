import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class apiService{

    api_result;
    constructor(private http: HttpClient){}

    get_data() {
        
           
            this.http.get('http://127.0.0.1:5000/api/get_venue/getall').subscribe(data => {
              // Read the result field from the JSON response.
              this.api_result = data;
               //console.log(this.states);
               
            });
    }
    
    get_api_data(){
            return "101-steak";
    }
    
   
}
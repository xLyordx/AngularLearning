import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class PeticionesService {
    public url: string;    
    constructor(
        public _http: HttpClient
    ) {
        this.url = "https://reqres.in/";
    }

    getUser(_id:any):Observable<any> {
        
        return this._http.get(this.url + "api/users/" + _id);
    };

    getDescrition(): string {
        return "Soy el servicio de peticiones";
    }

    addUser(_user:any): Observable<any>{
        let params = JSON.stringify(_user);
        let header = new HttpHeaders().set("Content-Type",'application/json');
        return this._http.post( this.url + "api/useres",params,{headers:header});
    }

}
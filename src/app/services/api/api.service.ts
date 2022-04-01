import { API_URL_VALUES, BASE_URL } from './../../core/app.constant';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormType } from 'src/app/core/app.types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly baseUrl = BASE_URL;
  readonly apiRouteValue = API_URL_VALUES;
  constructor(private http:HttpClient) { }

  getUserDetails(){
    return this.http.get(this.baseUrl);
  }
  insertUserDetails(body:FormType){
    return this.http.post(this.baseUrl,body,{headers: {}, responseType: "text" });
  }
  updateUserDetail(id:string, body:FormType){
    return this.http.put(`${this.baseUrl}/${id}`,body,{headers: {}, responseType: "text" });
  }
  deleteUserDetail(id:string){
    return this.http.delete(`${this.baseUrl}/${id}`,{headers: {}, responseType: "text" });
  }
}

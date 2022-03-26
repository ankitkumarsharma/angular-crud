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
  updateUserDetail(body:FormType){
    // return this.http.put(this.baseUrl,body,{headers: {}, responseType: "text", params: {id: params} });
    return this.http.post(this.baseUrl+this.apiRouteValue.update,body,{headers: {}, responseType: "text" });
  }
  deleteUserDetail(body:FormType){
    return this.http.post(this.baseUrl+this.apiRouteValue.delete,body,{headers: {}, responseType: "text" });
  }
}

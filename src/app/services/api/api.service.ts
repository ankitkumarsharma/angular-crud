import { BASE_URL } from './../../core/app.constant';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly baseUrl = BASE_URL;
  constructor(private http:HttpClient) { }

  getUserDetails(){
    return this.http.get(this.baseUrl);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url='http://localhost:8088/api'

  constructor(private http: HttpClient) { }
  ajoutAnnonce(data:any){
    return this.http.post(this.url+'/annonce/ajoutannonce', data)
  }
  listerAnnonce(data:any){
    return this.http.get(this.url+'/annonce/listerannonce')
  }
}

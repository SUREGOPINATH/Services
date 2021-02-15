import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PersonModel} from '../app/publisher/publisher.component';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MydataserviceService {
  restapiserver:string="http://localhost:50831/api/publisher";
  constructor(private http:HttpClient) { 
    console.log('service created');
  }
  public getpublishers():Observable<any>
  {
    // return this.http.get<PersonModel[]>(`${this.restapiserver}/publisher`);
    return (this.http.get(this.restapiserver));
  }
}

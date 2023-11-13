import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PropertyDTO } from '../model/PropertyDTO';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private configUrl: string;

  constructor(private http: HttpClient) { 
    this.configUrl = '';
  }

  getProperties(): Observable<Array<PropertyDTO>>{
    this.configUrl = '/asset/property/findAll';
    return this.http.get<Array<PropertyDTO>>(this.configUrl);
  }
}

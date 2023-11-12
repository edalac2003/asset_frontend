import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDTO } from '../model/userDTO';

@Injectable({
  providedIn: 'root'
})
export class ResponsableService {
  private configUrl: string;

  constructor(private http: HttpClient) {
    this.configUrl = '';
  }

  findAll(): Observable<UserDTO[]>{
    this.configUrl = '/asset/user/findAll';
    return this.http.get<UserDTO[]>(this.configUrl);
  }
}
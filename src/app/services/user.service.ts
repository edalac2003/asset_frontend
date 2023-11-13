import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDTO } from '../model/userDTO';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private configUrl: string;

  constructor(private http: HttpClient) { 
    this.configUrl = '';
  }

  async findAll(): Promise<Observable<UserDTO[]>> {
    this.configUrl = '/asset/user/findAll';
    return this.http.get<UserDTO[]>(this.configUrl);
  }
}

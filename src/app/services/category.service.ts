import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryDTO } from '../model/CategoryDTO';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private configUrl: string;
  
  constructor(private http: HttpClient) {
    this.configUrl = '';
   }

  getCategories(): Observable<Array<CategoryDTO>>{
    this.configUrl = '/asset/category/findAll';
    return this.http.get<Array<CategoryDTO>>(this.configUrl);
  }
}

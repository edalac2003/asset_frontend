import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AssetTypeDTO } from '../model/AssetTypeDTO';

@Injectable({
  providedIn: 'root'
})
export class AssetTypeService {
  private configUrl: string;

  constructor(private http: HttpClient) {
    this.configUrl = '';
  }

  create(assetTypeDTO: AssetTypeDTO): Observable<any>{
    this.configUrl = '/asset/asset-type';
    return this.http.post<any>(this.configUrl, assetTypeDTO);
  }

  findAll(): Observable<Array<AssetTypeDTO>>{
    this.configUrl = '/asset/asset-type/findAll';
    return this.http.get<Array<AssetTypeDTO>>(this.configUrl);
  }
}

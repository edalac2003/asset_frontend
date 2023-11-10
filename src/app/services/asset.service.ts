import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AssetDTO } from '../model/AssetDTO';

@Injectable({
  providedIn: 'root',
})
export class AssetService {
  private configUrl: string;

  constructor(private http: HttpClient) {
    this.configUrl = '';
  }

  getAssetFindAll(): Observable<Array<AssetDTO>>{
    this.configUrl = '/asset/findAll';
    return this.http.get<Array<AssetDTO>>(this.configUrl);
  }

  postCreateAsset(assetDTO: AssetDTO): Observable<any>{
    this.configUrl = '/asset';
    return this.http.post<any>(this.configUrl, assetDTO);
  }

}

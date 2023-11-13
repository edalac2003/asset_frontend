// asset.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AssetDTO } from '../model/AssetDTO';

@Injectable({
  providedIn: 'root',
})
export class AssetService {
  private configUrl: string;
  private activosSubject = new BehaviorSubject<AssetDTO[]>([]);

  activos$ = this.activosSubject.asObservable();

  constructor(private http: HttpClient) {
    this.configUrl = '';
  }

  getAssetFindAll(): Observable<AssetDTO[]> {
    this.configUrl = '/asset/findAll';
    return this.http.get<AssetDTO[]>(this.configUrl).pipe(
      tap((activos) => this.activosSubject.next(activos))
    );
  }

  getAssetFindAllByCategory(categoryID: number): Observable<AssetDTO[]> {
    this.configUrl = '/asset/findAll';
    return this.http.get<AssetDTO[]>(this.configUrl).pipe(
      map((activos) => activos.filter(activo => activo.category.id == categoryID)),
      tap((activosFiltrados) => this.activosSubject.next(activosFiltrados)),
    );
  }

  getFilteredAssetsByCode(assetCodePrefix: string): Observable<AssetDTO[]> {
    this.configUrl = '/asset/findAll';
    return this.http.get<AssetDTO[]>(this.configUrl).pipe(
      map((activos) => activos.filter(
        activo => activo.assetCode.startsWith(assetCodePrefix)
      )),
      tap((activosFiltrados) => this.activosSubject.next(activosFiltrados))
    );
  }

  postCreateAsset(assetDTO: AssetDTO): Observable<any> {
    this.configUrl = '/asset';
    return this.http.post<any>(this.configUrl, assetDTO).pipe(
      tap(() => this.getAssetFindAll().subscribe()) 
    );
  }

  getAssetFindById(assetId: number): Observable<AssetDTO> {
    this.configUrl = '/asset/findById/' + assetId;
    return this.http.get<AssetDTO>(this.configUrl);
  }
}

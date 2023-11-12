// asset.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
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

  postCreateAsset(assetDTO: AssetDTO): Observable<any> {
    this.configUrl = '/asset';
    return this.http.post<any>(this.configUrl, assetDTO).pipe(
      tap(() => this.getAssetFindAll().subscribe()) // Recarga la lista después de crear un activo
    );
  }
}

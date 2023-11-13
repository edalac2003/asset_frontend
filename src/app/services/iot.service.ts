import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IoTRequest } from '../model/IoTRequest';
import { IoTResponse } from '../model/IoTResponse';

@Injectable({
  providedIn: 'root'
})
export class IotService {

  configUrl: string = '';

  constructor(
    private http:HttpClient
  ) { }

  finbByAssetIdAndIotSensorIdAndDate(request: IoTRequest): Observable<IoTResponse>{
    this.configUrl = '/asset/iot/findByIotSensorAndAssetAndDatetime';
    return this.http.patch<IoTResponse>(this.configUrl, request);
  }
}

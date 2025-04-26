import { Injectable } from '@angular/core';
import {MsSettings} from '../models/ms-settings';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ZipRequest} from '../models/zip-request';

@Injectable({
  providedIn: 'root'
})
export class ZipProcessService {

  constructor(private http:HttpClient) { }

  request_by_status(status:number):Observable<Array<[string,string,string,number]>>{
    let uri=encodeURI(MsSettings.service_url+'reqbystatus/'+status);
    return this.http.get<Array<[string,string,string,number]>>(uri);
  }

  request_by_orderid(orderid:string):Observable<Array<ZipRequest>>{
    let uri=encodeURI(MsSettings.service_url+'reqbyorderid/'+orderid);
    return this.http.get<Array<ZipRequest>>(uri);
  }

}

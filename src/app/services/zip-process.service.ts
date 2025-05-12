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

  request_supp_by_orderid(orderid:string):Observable<Array<string>>{
    let uri=encodeURI(MsSettings.service_url+'reqsuppbyorderid/'+orderid);
    return this.http.get<Array<string>>(uri);
  }

  request_by_status(status:number):Observable<Array<[string,string,string,number]>>{
    let uri=encodeURI(MsSettings.service_url+'reqbystatus/'+status);
    return this.http.get<Array<[string,string,string,number]>>(uri);
  }

  request_by_orderid(orderid:string):Observable<Array<ZipRequest>>{
    let uri=encodeURI(MsSettings.service_url+'reqbyorderid/'+orderid);
    return this.http.get<Array<ZipRequest>>(uri);
  }

  request_by_orderid_status(orderid:string,status:number):Observable<Array<ZipRequest>>{
    let uri=encodeURI(MsSettings.service_url+'reqbyorderidstatus/'+orderid+'/'+status);
    return this.http.get<Array<ZipRequest>>(uri);
  }

  postChangeStatus(draft: Array<ZipRequest>): Observable<any> {
    let uri=encodeURI(MsSettings.service_url+'changestatus');
    return this.http.post<any>(uri,draft);
  }
  postChangeSupplyer(draft: Array<ZipRequest>): Observable<any> {
    let uri=encodeURI(MsSettings.service_url+'updatesupplyer');
    return this.http.post<any>(uri,draft);
  }
  postSupplyerSetPice(draft: Array<ZipRequest>): Observable<any> {
    let uri=encodeURI(MsSettings.service_url+'updatesupplyerprice');
    return this.http.post<any>(uri,draft);
  }

  postPriceApprove(draft: Array<ZipRequest>,price:number): Observable<any> {
    let uri=encodeURI(MsSettings.service_url+'approveprice');
    return this.http.post<any>(uri,[draft,price]);
  }
  postPriceAccept(draft: Array<ZipRequest>,price:number): Observable<any> {
    let uri=encodeURI(MsSettings.service_url+'acceptprice');
    return this.http.post<any>(uri,[draft,price]);
  }

  postCreateContract(parts: Array<ZipRequest>): Observable<any> {
    let uri=encodeURI(MsSettings.service_url+'createcontract');
    return this.http.post<any>(uri,parts);
  }

  postCreateSuppContract(parts: Array<ZipRequest>): Observable<any> {
    let uri=encodeURI(MsSettings.service_url+'createsuppcontract');
    return this.http.post<any>(uri,parts);
  }
  postCreateSuppPayments(parts: Array<ZipRequest>): Observable<any> {
    let uri=encodeURI(MsSettings.service_url+'createsupppayments');
    return this.http.post<any>(uri,parts);
  }

  postCreateSuppDelivery(parts: Array<ZipRequest>): Observable<any> {
    let uri=encodeURI(MsSettings.service_url+'createsuppdelivery');
    return this.http.post<any>(uri,parts);
  }

  postCreatePostProc(parts: Array<ZipRequest>): Observable<any> {
    let uri=encodeURI(MsSettings.service_url+'createpostprocesses');
    return this.http.post<any>(uri,parts);
  }

}

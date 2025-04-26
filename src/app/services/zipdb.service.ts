import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {MsSettings} from '../models/ms-settings';
import {ZipRequest} from '../models/zip-request';

@Injectable({
  providedIn: 'root'
})
export class ZipdbService {
  zip_clients:BehaviorSubject<Array<string>> = new BehaviorSubject<Array<string>>(new Array<string>);
  zip_targets:BehaviorSubject<Array<string>> = new BehaviorSubject<Array<string>>(new Array<string>);
  zip_imos:BehaviorSubject<Array<string>> = new BehaviorSubject<Array<string>>(new Array<string>);

  zip_parts:BehaviorSubject<Array<Array<string>>> = new BehaviorSubject<Array<Array<string>>>(new Array<Array<string>>());

  constructor(private http:HttpClient) { }

  requestClients(){
    this.http.get<[string]>(MsSettings.service_url+'clients').subscribe(res =>{
      this.zip_clients.next(res);
    } );
  }

  requestTargets(){
    this.http.get<[string]>(MsSettings.service_url+'targets').subscribe(res =>{
      this.zip_targets.next(res);
    } );
  }

  requestCatalogs(target:string):Observable<Array<Array<string>>>{
    let uri=encodeURI(MsSettings.service_url+'targets/catalogs/'+target)
    return this.http.get<Array<Array<string>>>(uri);
  }


  requestSerialsByTargretCatalogs(target:string,factory_name:string,eq_type:string):Observable<Array<string>>{
    let uri=encodeURI(MsSettings.service_url+'targets/serials/'+target+'/'+factory_name+'/'+eq_type);
    return this.http.get<Array<string>>(uri);
  }

  requestPartsByCatalogs(factory_name:string,eq_type:string){
    let uri=encodeURI(MsSettings.service_url+'targets/pbc/'+factory_name+'/'+eq_type);
    this.http.get<Array<Array<string>>>(uri).subscribe(res =>{
      this.zip_parts.next(res);
    } );
  }

  postDraft(draft: Array<ZipRequest>){
    let uri=encodeURI(MsSettings.service_url+'adddraft');
    this.http.post(uri,draft).subscribe(res =>{
      console.log(res);
    } );
  }
}

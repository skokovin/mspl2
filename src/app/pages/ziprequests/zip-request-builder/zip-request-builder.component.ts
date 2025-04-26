import {AfterViewInit, Component} from '@angular/core';
import {MatFormField, MatLabel, MatOption, MatSelect} from '@angular/material/select';
import {ZipdbService} from '../../../services/zipdb.service';
import {CmpZipTargetComponent} from '../cmp-zip-target/cmp-zip-target.component';
import {ZipRequest} from '../../../models/zip-request';
import {CmpZipRequestPartComponent} from '../cmp-zip-request-part/cmp-zip-request-part.component';

@Component({
  selector: 'app-zip-request-builder',
  imports: [
    MatLabel,
    MatFormField,
    MatSelect,
    MatOption,
    CmpZipTargetComponent,
    CmpZipRequestPartComponent
  ],
  templateUrl: './zip-request-builder.component.html',
  styleUrl: './zip-request-builder.component.css'
})
export class ZipRequestBuilderComponent implements AfterViewInit {
  zip_clients:Array<string> = new Array<string>;
  zip_targets:Array<string> = new Array<string>;
  zip_parts:Array<Array<string>> =  new Array<Array<string>>();
  zip_client:string= "";
  zip_target:string= "";
  zip_serial:string= "";
  zip_factory_name="";
  zip_eq_type="";
  request_parts:Array<ZipRequest> = new Array<ZipRequest>();
  request_id:string="";

  constructor(private zipdb:ZipdbService) {
    zipdb.zip_clients.subscribe(res =>{
      this.zip_clients=res;
    });
    zipdb.zip_targets.subscribe(res =>{
      this.zip_targets=res;
    });
    zipdb.zip_parts.subscribe(res =>{
      this.zip_parts=res;
    });
  }

  ngAfterViewInit(): void {
    this.zipdb.requestClients();
  }

  onClientSelected(value: string) {
    let N=16;
    //this.zipdb.requestTargets();
    this.zip_client=value;
    this.zipdb.requestTargets();
    this.zip_target="";
    this.zip_factory_name="";
    this.zip_eq_type="";
    this.zip_serial="";
    this.request_parts = new Array<ZipRequest>();
    this.request_id= Array(N+1).join((Math.random().toString(10)+'00000000000000000').slice(2, 18)).slice(0, N);
  }

  setZipTarget(value: string) {
    this.zip_target=value;
  }
  setZipSerial(value: string) {
    this.zip_serial=value;
  }
  setCatalog(zip_factory_name:string,zip_eq_type:string) {
    this.zip_factory_name=zip_factory_name;
    this.zip_eq_type=zip_eq_type;
  }

  onAddPart(part_descr: string[]) {
    const d = new Date();
    let day = d.getDate();
    let month=d.getMonth()+1;
    let year=d.getFullYear();
    let h=d.getHours();
    let m=d.getMinutes();
    let s=d.getSeconds();
    let id=day + "-" + month + "-" + year + " " + h  + m  + s;
    let part:ZipRequest=new ZipRequest("","","",0,0,0,"","","","","","",new Array<string>(),"","","","",0,0,0,"","","","",0,0,0,0,"",0);
    part.client_name=this.zip_client;
    part.target=this.zip_target;
    part.factory_name=this.zip_factory_name;
    part.eq_type=this.zip_eq_type;
    part.serial=this.zip_serial;
    part.part_id=part_descr[0];
    part.part_descr=part_descr[1];
    part.request_day=day;
    part.request_month=month;
    part.request_year=year;
    part.id=id;
    part.request_id=this.request_id;
    this.request_parts.push(part);
  }

  OnStoreRequest() {
    this.zipdb.postDraft(this.request_parts);
    this.onClientSelected(this.zip_client);
  }
}

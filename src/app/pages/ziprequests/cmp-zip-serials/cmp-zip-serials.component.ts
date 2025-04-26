import {AfterViewInit, Component, Input} from '@angular/core';
import {ZipdbService} from '../../../services/zipdb.service';
import {ZipRequestBuilderComponent} from '../zip-request-builder/zip-request-builder.component';
import {CmpZipTargetComponent} from '../cmp-zip-target/cmp-zip-target.component';

@Component({
  selector: 'app-cmp-zip-serials',
  imports: [],
  templateUrl: './cmp-zip-serials.component.html',
  styleUrl: './cmp-zip-serials.component.css'
})
export class CmpZipSerialsComponent implements AfterViewInit {
  @Input()
  zipRequestBuilderComponent!: ZipRequestBuilderComponent;
  @Input()
  cmpZipTargetComponent!: CmpZipTargetComponent;
  @Input()
  factory_name: string = "";
  @Input()
  eq_type: string = "";
  serials: string[] = [];
  selected_serial=""

  constructor(private zipdb: ZipdbService) {

  }

  ngAfterViewInit(): void {
   if(this.cmpZipTargetComponent.ziptarget!="" &&this.factory_name!="" &&this.eq_type!=""  &&this.factory_name!="UNKNOWN" &&this.eq_type!="UNKNOWN"){
      this.zipdb.requestSerialsByTargretCatalogs(this.cmpZipTargetComponent.ziptarget,this.factory_name,this.eq_type,).subscribe({
        next: (v) =>{
          this.serials=v;
        },
        error: (e) => { },
        complete: () => { }
      });
    }
  }

  onSelectSerial(serial: string) {
    this.selected_serial=serial;
    this.zipdb.requestPartsByCatalogs(this.factory_name,this.eq_type);
    this.zipRequestBuilderComponent.setZipTarget(this.cmpZipTargetComponent.ziptarget);
    this.zipRequestBuilderComponent.setZipSerial(this.selected_serial);
    this.zipRequestBuilderComponent.setCatalog(this.factory_name,this.eq_type);
  }
}

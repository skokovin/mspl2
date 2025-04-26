import {AfterViewInit, Component, Input} from '@angular/core';
import {ZipRequestBuilderComponent} from '../zip-request-builder/zip-request-builder.component';
import {ZipdbService} from '../../../services/zipdb.service';
import {BehaviorSubject} from 'rxjs';
import {CmpZipSerialsComponent} from '../cmp-zip-serials/cmp-zip-serials.component';

@Component({
  selector: 'app-cmp-zip-target',
  imports: [
    CmpZipSerialsComponent
  ],
  templateUrl: './cmp-zip-target.component.html',
  styleUrl: './cmp-zip-target.component.css'
})
export class CmpZipTargetComponent implements AfterViewInit {
  @Input()
  zipRequestBuilderComponent!: ZipRequestBuilderComponent;
  @Input()
  ziptarget: string = "";
  zip_catalogs: Array<Array<string>> = new Array<Array<string>>();
  factory_name: string = "";
  eq_type: string = "";

  constructor(private zipdb: ZipdbService) {
  }

  ngAfterViewInit(): void {
    if (this.ziptarget != "") {
      this.zipdb.requestCatalogs(this.ziptarget).subscribe(res => {
        this.zip_catalogs = res;
      });
    }
  }

  onCatalogClick(catalog: Array<string>) {
    this.factory_name = catalog[0];
    this.eq_type = catalog[1];
    this.zipdb.requestPartsByCatalogs(this.factory_name, this.eq_type);
    this.zipRequestBuilderComponent.setZipTarget(this.ziptarget);
  }
}

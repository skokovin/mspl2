import {AfterViewInit, Component, Input} from '@angular/core';
import {ProcessMainPageComponent} from '../process-main-page/process-main-page.component';
import {ZipProcessService} from '../../../services/zip-process.service';
import {ZipRequest} from '../../../models/zip-request';
import {KeyValuePipe} from '@angular/common';

@Component({
  selector: 'app-cmp-parts-by-supplyer',
  imports: [
    KeyValuePipe
  ],
  templateUrl: './cmp-parts-by-supplyer.component.html',
  styleUrl: './cmp-parts-by-supplyer.component.css'
})
export class CmpPartsBySupplyerComponent implements AfterViewInit {
  @Input()
  processMainPageComponent!: ProcessMainPageComponent;
  @Input()
  status!: number;

  supplyers: Map<string, Array<ZipRequest>> = new Map<string, Array<ZipRequest>>();

  constructor(private zp: ZipProcessService) {

  }

  ngAfterViewInit(): void {
    this.processMainPageComponent.dirty_state.subscribe(res => {
      this.supplyers.clear();
      this.processMainPageComponent.current_parts.forEach((item:ZipRequest) => {
        console.log(item);
        const key = item.supplier_person;
        if (!this.supplyers.get(key)) {
          this.supplyers.set(key,[]);
        }
        this.supplyers.get(key)!.push(item);
      });
    })
  }

  OnSuppContract(parts: Array<ZipRequest>) {
    this.zp.postCreateSuppPayments(parts).subscribe(res => {
      this.processMainPageComponent.current_parts =[];
      this.processMainPageComponent.selected_status = 0;
      this.processMainPageComponent.dirty_state.next(this.processMainPageComponent.dirty_state.value + 1);
    });
  }

  OnSuppContractPayment(parts: Array<ZipRequest>) {
    this.zp.postCreateSuppDelivery(parts).subscribe(res => {
      this.processMainPageComponent.current_parts =[];
      this.processMainPageComponent.selected_status = 0;
      this.processMainPageComponent.dirty_state.next(this.processMainPageComponent.dirty_state.value + 1);
    });
  }

  OnSuppLelivery(parts: Array<ZipRequest>) {
    this.zp.postCreatePostProc(parts).subscribe(res => {
      this.processMainPageComponent.current_parts =[];
      this.processMainPageComponent.selected_status = 0;
      this.processMainPageComponent.dirty_state.next(this.processMainPageComponent.dirty_state.value + 1);
    });
  }
}

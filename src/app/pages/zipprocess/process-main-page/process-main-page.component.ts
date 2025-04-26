import {AfterViewInit, Component} from '@angular/core';
import {ZipProcessService} from '../../../services/zip-process.service';
import {ZipRequest} from '../../../models/zip-request';
import {KeyValuePipe} from '@angular/common';
import {CmpRequestByStatusComponent} from '../cmp-request-by-status/cmp-request-by-status.component';
import {CmpZipRequestPartComponent} from '../../ziprequests/cmp-zip-request-part/cmp-zip-request-part.component';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-process-main-page',
  imports: [
    KeyValuePipe,
    CmpRequestByStatusComponent,
    CmpZipRequestPartComponent,
    FormsModule
  ],
  templateUrl: './process-main-page.component.html',
  styleUrl: './process-main-page.component.css'
})
export class ProcessMainPageComponent implements AfterViewInit {
  states: Map<number, [string, string, Array<ZipRequest>]> = new Map<number, [string, string, Array<ZipRequest>]>();
  state: [string, string, Array<ZipRequest>];
  current_parts: Array<ZipRequest>=new Array<ZipRequest>();

  constructor(private zp: ZipProcessService) {


    this.states.set(10, ["Подтверждение", "DRAFT", new Array<ZipRequest>()]);
    this.states.set(20, ["Определение Поставщиков", "SUPPLIERS", new Array<ZipRequest>()]);
    this.states.set(30, ["Запрос Поставщиков", "SUPPLIERS_RESPONCE", new Array<ZipRequest>()]);
    this.states.set(40, ["Определение Цены", "PRICE_CALCULATION", new Array<ZipRequest>()]);
    this.states.set(50, ["Подтверждение Цены", "PRICE_APPROVAL", new Array<ZipRequest>()]);
    this.states.set(60, ["КП", "PRICE_ACCEPTANCE", new Array<ZipRequest>()]);
    this.states.set(70, ["Контракт Заказчик", "INVOICE_CUSTOMER", new Array<ZipRequest>()]);
    this.states.set(80, ["Контракты Поставщики", "INVOICE_SUPPLIERS_REQUESTS", new Array<ZipRequest>()]);
    this.states.set(90, ["Оплата Поставщики", "INVOICE_SUPPLIERS_PAYMENTS", new Array<ZipRequest>()]);
    this.states.set(100, ["Доставка", "DELYVERY", new Array<ZipRequest>()]);
    this.states.set(110, ["Акты", "FINISH", new Array<ZipRequest>()]);
    this.state = this.states.get(0) as [string, string, Array<ZipRequest>];

  }

  ngAfterViewInit(): void {

  }

  request_by_orderid(orderid:string){
    this.zp.request_by_orderid(orderid).subscribe((res: Array<ZipRequest>) =>{
      this.current_parts = res;
    })
  }

  OnApprove() {

  }
}

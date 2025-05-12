import {AfterViewInit, Component} from '@angular/core';
import {ZipProcessService} from '../../../services/zip-process.service';
import {ZipRequest} from '../../../models/zip-request';
import {KeyValuePipe} from '@angular/common';
import {CmpRequestByStatusComponent} from '../cmp-request-by-status/cmp-request-by-status.component';
import {FormsModule} from '@angular/forms';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';
import {CmpPartsBySupplyerComponent} from '../cmp-parts-by-supplyer/cmp-parts-by-supplyer.component';

@Component({
  selector: 'app-process-main-page',
  imports: [
    KeyValuePipe,
    CmpRequestByStatusComponent,

    FormsModule,
    CmpPartsBySupplyerComponent
  ],
  templateUrl: './process-main-page.component.html',
  styleUrl: './process-main-page.component.css'
})
export class ProcessMainPageComponent implements AfterViewInit {
  states: Map<number, [string, string, Array<ZipRequest>]> = new Map<number, [string, string, Array<ZipRequest>]>();
  state: [string, string, Array<ZipRequest>];
  current_parts: Array<ZipRequest>=new Array<ZipRequest>();
  selected_status: number = 0;
  dirty_state:BehaviorSubject<number>=new BehaviorSubject<number>(0);

  price_acc:number=0;


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
  OnPriceCalc() {
    this.price_acc=0;
    this.current_parts.forEach((item:ZipRequest) => {
      this.price_acc+=item.part_price;
    });
  }

  request_by_orderid(orderid:string,status:number){
    this.selected_status = status;
    this.zp.request_by_orderid_status(orderid,status).subscribe((res: Array<ZipRequest>) =>{
      if(res.length>0){
        this.price_acc=res[0].part_price_sum;
      }
      this.current_parts = res;
      this.dirty_state.next(this.dirty_state.value + 1);
    });

  }

  OnApprove() {
    this.zp.postChangeStatus(this.current_parts).subscribe(res => {
      this.current_parts = new Array<ZipRequest>();
      this.selected_status = 0;
      this.dirty_state.next(this.dirty_state.value + 1);
    });
  }

  OnChooseSupplier() {
    this.zp.postChangeSupplyer(this.current_parts).subscribe(res => {
      this.current_parts = new Array<ZipRequest>()
      this.selected_status = 0;
      this.dirty_state.next(this.dirty_state.value + 1);
    });
  }

  OnSupplyerSetPrice() {
    this.zp.postSupplyerSetPice(this.current_parts).subscribe(res => {
      this.current_parts = new Array<ZipRequest>();
      this.selected_status = 0;
      this.price_acc = 0;
      this.dirty_state.next(this.dirty_state.value + 1);
    });
  }
  OnPriceApprove() {
    this.zp.postPriceApprove(this.current_parts,this.price_acc).subscribe(res => {
      this.current_parts = new Array<ZipRequest>();
      this.selected_status = 0;
      this.price_acc = 0;
      this.dirty_state.next(this.dirty_state.value + 1);
    });
  }

  OnPriceAccept() {
    this.zp.postPriceAccept(this.current_parts,this.price_acc).subscribe(res => {
      this.current_parts = new Array<ZipRequest>();
      this.selected_status = 0;
      this.price_acc = 0;
      this.dirty_state.next(this.dirty_state.value + 1);
    });
  }

  OnCreateContract() {
    this.zp.postCreateContract(this.current_parts).subscribe(res => {
      this.current_parts = new Array<ZipRequest>();
      this.selected_status = 0;
      this.dirty_state.next(this.dirty_state.value + 1);
    });
  }

  OnCreateSuppliersContracts() {
    this.zp.postCreateSuppContract(this.current_parts).subscribe(res => {
      this.current_parts = new Array<ZipRequest>();
      this.selected_status = 0;
      this.dirty_state.next(this.dirty_state.value + 1);
    });
  }
}

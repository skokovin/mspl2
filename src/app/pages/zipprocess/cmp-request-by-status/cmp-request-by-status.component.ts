import {AfterViewInit, Component, Input} from '@angular/core';
import {ProcessMainPageComponent} from '../process-main-page/process-main-page.component';
import {ZipProcessService} from '../../../services/zip-process.service';

@Component({
  selector: 'app-cmp-request-by-status',
  imports: [],
  templateUrl: './cmp-request-by-status.component.html',
  styleUrl: './cmp-request-by-status.component.css'
})
export class CmpRequestByStatusComponent   implements AfterViewInit{
  @Input()
  processMainPageComponent!:ProcessMainPageComponent;
  @Input()
  status!:number;

  requests:Array<[string,string,string,number]> = new Array<[string,string,string,number]>();

  constructor(private zp:ZipProcessService) {
  }

  ngAfterViewInit(): void {
    this.zp.request_by_status(this.status).subscribe(res => {
      this.requests = res;
      console.log(this.requests );
    });
  }

  onClickRequest(request: [string, string, string, number]) {
    let request_id = request[2];
    this.processMainPageComponent.request_by_orderid(request_id);
  }
}

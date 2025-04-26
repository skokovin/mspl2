import {Component, Input} from '@angular/core';
import {ZipRequestBuilderComponent} from '../zip-request-builder/zip-request-builder.component';
import {ZipRequest} from '../../../models/zip-request';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-cmp-zip-request-part',
  imports: [
    FormsModule
  ],
  templateUrl: './cmp-zip-request-part.component.html',
  styleUrl: './cmp-zip-request-part.component.css'
})
export class CmpZipRequestPartComponent {
  @Input()
  zipRequestBuilderComponent!: ZipRequestBuilderComponent;
  @Input()
  request_part!:ZipRequest;

  constructor() {
  }


}

import { Routes } from '@angular/router';
import {ZipRequestBuilderComponent} from './pages/ziprequests/zip-request-builder/zip-request-builder.component';
import {ProcessMainPageComponent} from './pages/zipprocess/process-main-page/process-main-page.component';

export const routes: Routes = [
  { path: 'zr', component: ZipRequestBuilderComponent },
  { path: 'zp', component: ProcessMainPageComponent },
];

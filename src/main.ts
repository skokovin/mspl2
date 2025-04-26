import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import {RootpageComponent} from './app/pages/rootpage/rootpage.component';


bootstrapApplication(RootpageComponent, appConfig)
  .catch((err) => console.error(err));

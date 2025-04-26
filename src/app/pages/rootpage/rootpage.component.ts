import { Component } from '@angular/core';
import {RouterLink, RouterModule, RouterOutlet} from '@angular/router';
@Component({
  selector: 'app-rootpage',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './rootpage.component.html',
  styleUrl: './rootpage.component.css'
})
export class RootpageComponent {

}

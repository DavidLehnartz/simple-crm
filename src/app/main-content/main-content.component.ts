import { Component } from '@angular/core';
import { NavbarComponent } from "../shared/navbar/navbar.component";

@Component({
  selector: 'app-main-content',
  imports: [NavbarComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}

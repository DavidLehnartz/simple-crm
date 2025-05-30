import { Component } from '@angular/core';
import { NavbarComponent } from "../shared/navbar/navbar.component";
import { SidebarComponent } from "../shared/sidebar/sidebar.component";
import { DashboardComponent } from "../pages/dashboard/dashboard.component";

@Component({
  selector: 'app-main-content',
  imports: [NavbarComponent, SidebarComponent, DashboardComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}

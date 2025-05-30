import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  sidebarService = inject(SidebarService);

  toggleSideBar() {
    this.sidebarService.toggle();

    console.log(
      `Sidebar is now ${this.sidebarService.isSideBarOpen ? 'open' : 'closed'}`
    );
  }
}

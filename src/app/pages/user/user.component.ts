import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { SidebarService } from '../../services/sidebar.service';
import { AddUserComponent } from '../../dialog/add-user/add-user.component';

@Component({
  selector: 'app-user',
  imports: [CommonModule, NavbarComponent, SidebarComponent, AddUserComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  isDialogOpen: boolean = false;
  sidebarService = inject(SidebarService);

  openDialog() {
    this.isDialogOpen = true;
  }

  
}

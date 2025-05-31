import { Component, inject } from '@angular/core';
import { DialogService } from '../../services/dialog.service';
import { User } from '../../models/user.class';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss',
})
export class AddUserComponent {
  dialogService = inject(DialogService);

  user = new User();

  closeDialog() {
    this.dialogService.close();
  }

  saveUser(){
console.log('User saved:', this.user);

  }
}

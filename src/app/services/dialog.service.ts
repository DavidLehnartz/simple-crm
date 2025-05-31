import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
isDialogOpen: boolean = false;

close(){
  this.isDialogOpen = false;
}

  constructor() { }
}

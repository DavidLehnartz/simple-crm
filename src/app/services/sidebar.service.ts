import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  isSideBarOpen: boolean = true;

  toggle(){
    this.isSideBarOpen = !this.isSideBarOpen;
    
  }

  constructor() {}
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isSidebarVisible: boolean = false;
  isOffcanvasOpen = false;
  // toggleSidebar() {
  //   console.log('toggleSidebar');
  //   this.isSidebarVisible = !this.isSidebarVisible;
  // }
  toggleSidebar() {
    this.isOffcanvasOpen = !this.isOffcanvasOpen;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  isSidebarVisible: boolean = false;
  isOffcanvasOpen = false;
  toggleSidebar() {
    this.isOffcanvasOpen = !this.isOffcanvasOpen;
  }

  accionDelMenu() {
    // Lógica para manejar la acción del menú
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  isSidebarVisible: boolean = false;
  isOffcanvasOpen = false;
  breadcrumbItems:any = [
    { label: 'Inicio', url: '/home/start' },
    { label: 'Sección 1', url: '/seccion1' },
    { label: 'Página Actual', url: '/seccion1/pagina-actual' }
  ];
  toggleSidebar() {
    this.isOffcanvasOpen = !this.isOffcanvasOpen;
  }

  accionDelMenu() {
    // Lógica para manejar la acción del menú
  }
}

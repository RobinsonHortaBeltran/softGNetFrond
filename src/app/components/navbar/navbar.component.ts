import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Output() toggleSidebar = new EventEmitter<void>();
  isNavbarCollapsed: boolean = false;
  private homeRoute: string = '/home';
  private pathSvg: string = '../../../assets/svg/';
  protected Buttons: any[] = [
    {
      title: 'INICIO',
      svg: `${this.pathSvg}/home.svg`,
      route: this.homeRoute,
      children: 'start',
    },
    {
      title: 'Conductores',
      svg: `${this.pathSvg}/cardProfileMenue.svg`,
      route: this.homeRoute,
      children: 'drivers',
    },

    {
      title: 'Vehiculos',
      svg: `${this.pathSvg}/newCars.svg`,
      route: this.homeRoute,
      children: 'vehicles',
    },
    {
      title: 'Rutas',
      svg: `${this.pathSvg}/routeMenue.svg`,
      route: this.homeRoute,
      children: 'routes',
    },
    {
      title: 'Horarios',
      svg: `${this.pathSvg}/scheduleMenue.svg`,
      route: this.homeRoute,
      children: 'schedule',
    },
  ];

  constructor(private router: Router) {}
  onToggleSidebar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
    this.toggleSidebar.emit();
  }

  navigateTo(route: string, children: string) {
    this.router.navigate([route, children]);
  }
}

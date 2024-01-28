import { Component } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent {
  tarjetas = [
    {
      title: 'Conductores',
      routerLink: ['/home', 'drivers'],
      color: '#1A58B4',
      imageSrc: '../../../assets/svg/cardProfile.svg',
      description: 'Gestionar conductores.',
    },
    {
      title: 'Veiculos',
      routerLink: ['/home', 'vehicles'],
      color: '#84D0C9',
      imageSrc: '../../../assets/svg/vehicle.svg',
      description: 'Gestionar veículos.',
    },
    {
      title: 'Rutas',
      routerLink: ['/home', 'routes'],
      color: '#1A58B4',
      imageSrc: '../../../assets/svg/route.svg',
      description: 'Gestionar rutas.',
    },
    {
      title: 'Horarios',
      routerLink: ['/home', 'schedule'],
      color: '#84D0C9',
      imageSrc: '../../../assets/svg/schedule.svg',
      description: 'Gestionar horarios.',
    },
  ];
}

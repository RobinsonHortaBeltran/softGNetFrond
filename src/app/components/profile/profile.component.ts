import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  valorRecibido: boolean | undefined;
  enviarTrueAlHijo2(valor: boolean) {
    this.valorRecibido = valor;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css'],
})
export class DriversComponent implements OnInit {
  datosDesdeHijo1: boolean | number = false;

  constructor() {}

  ngOnInit() {}

  recibirDatosHijo1(datos: any) {
    this.datosDesdeHijo1 = Math.random();
  }
}

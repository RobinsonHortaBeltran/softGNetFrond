import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css'],
})
export class SchedulesComponent implements OnInit {
  datosDesdeHijo1: boolean | number = false;
  datosDesdeHijo2: any;
  clearFuncion: any;
  deleteFunction: any;
  constructor() {}

  ngOnInit() {}

  recibirDatosHijo1(datos: any) {
    this.datosDesdeHijo1 = Math.random();
  }

  recibirDatosHijo2(e: any) {
    this.datosDesdeHijo2 = e;
  }

  handleToolbarButtonClick() {
  
    this.clearFuncion = Math.random();
  }

  deleteToolbarButtonClick() {
    this.deleteFunction = Math.random();
  }
}

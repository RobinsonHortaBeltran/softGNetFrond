import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/Services/services.service';
import camelcaseKeys from 'camelcase-keys';

@Component({
  selector: 'app-driverForm',
  templateUrl: './driverForm.component.html',
  styleUrls: ['./driverForm.component.css'],
})
export class DriverFormComponent implements OnInit {
  @Output() enviarDatos: EventEmitter<any> = new EventEmitter();
  public formulario: FormGroup | undefined;
  camposHabilitados = true;
  constructor(private fb: FormBuilder, private _api: ServicesService) {
    this.formulario = this.fb.group({
      last_name: ['Pruebas', [Validators.required]],
      first_name: ['Pruebas', [Validators.required]],
      ssn: ['123123', [Validators.required]],
      dod: ['2024-01-28T06:03:54.631865Z', [Validators.required]],
      address: ['Pruebas', [Validators.required]],
      city: ['Pruebas', [Validators.required]],
      zip: ['123', [Validators.required]],
      phone: ['1231', [Validators.required]],
      active: [true, [Validators.required]],
    });

    if (!this.camposHabilitados) {
      this.formulario.disable();
    }
  }

  ngOnInit() {}

  onSubmit() {
    if (this.formulario && this.formulario.valid) {
      this._api.postDriver(this.formulario.value).subscribe(
        (res) => {
          this.enviarDatos.emit(true);
          this.formulario?.reset();
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      // Muestra mensajes de error o realiza acciones adicionales si es necesario
      console.log('Formulario inválido. Revise los campos.');
    }
  }
}

import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css'],
})
export class ProfileFormComponent implements OnInit {
  @Input() valorRecibido: boolean | undefined;
  public formulario: FormGroup;
  camposHabilitados = false;
  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      primerNombre: ['', [Validators.required]],
      segundoNombre: ['', []],
      primerApellido: ['', [Validators.required]],
      segundoApellido: ['', []],
      noIdentificacion: ['', []],
      correoElectronico: ['', [Validators.required, Validators.email]],
      telefonoMovil: ['', []],
      torre: ['', [Validators.required]],
      apartamento: ['', [Validators.required]],
    });

    if (!this.camposHabilitados) {
      this.formulario.disable();
    }
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['valorRecibido']) {
     this.habilitarCampos()
     console.log('valorRecibido desde el hijo', this.valorRecibido);
     
    }
  }

  onSubmit() {
    if (this.formulario && this.formulario.valid) {
      // Realiza acciones cuando el formulario es válido
      console.log('Formulario válido:', this.formulario.value);
    } else {
      // Muestra mensajes de error o realiza acciones adicionales si es necesario
      console.log('Formulario inválido. Revise los campos.');
    }
  }

  habilitarCampos() {
    if (this.valorRecibido && !this.camposHabilitados) {
      this.formulario.enable();
    } else {
      this.formulario.disable();
    }
  }
}

import {Component, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialogRef} from "@angular/material/dialog";
@Component({
  selector: 'app-dialog-content-example-dialog',
  templateUrl: './dialog-content-example-dialog.component.html',
  styleUrls: ['./dialog-content-example-dialog.component.scss']
})
export class DialogContentExampleDialogComponent {
  @ViewChild('torreApartamentoModal') torreApartamentoModal!: MatDialogRef<any>;
  public torreApartamentoForm: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initializeForm();
  }
  initializeForm() {
    this.torreApartamentoForm = this.formBuilder.group({
      torre: ['', Validators.required],
      apartamento: ['', Validators.required]
    });
  }

  onSubmit() {
    // Manejar la lógica cuando se envía el formulario
    if (this.torreApartamentoForm.valid) {
      // Realizar acciones con los valores del formulario
      const values = this.torreApartamentoForm.value;
      console.log('Formulario enviado:', values);
      this.torreApartamentoModal.close();
      this.initializeForm();
    } else {
      // El formulario no es válido, puedes mostrar mensajes de error o realizar otras acciones.
    }
  }
}

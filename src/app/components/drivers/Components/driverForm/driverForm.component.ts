import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/Services/services.service';
import {
  MatSnackBarModule,
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-driverForm',
  templateUrl: './driverForm.component.html',
  styleUrls: ['./driverForm.component.css'],
})
export class DriverFormComponent implements OnInit {
  @Output() enviarDatos: EventEmitter<any> = new EventEmitter();
  @Input() dataEditing: any;
  @Input() clearFunction: any;
  @Input() deleteClicked: any;
  public formulario: FormGroup | undefined;
  camposHabilitados = true;
  esModoEditar: boolean = false;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  typeSendData = 'create';
  fechaEnFormato: string = '';
  constructor(
    private fb: FormBuilder,
    private _api: ServicesService,
    private _snackBar: MatSnackBar
  ) {
    if (this.formulario) {
      this.formulario.disable();
    }
  }

  ngOnInit() {
    if (this.typeSendData == 'create') {
      this.formulario = this.buildFormWithoutId();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dataEditing']) {
      this.typeSendData = 'update';
      if (this.typeSendData === 'update') {
        this.formulario = this.buildFormWithId();
        this.patchValueForm(this.dataEditing);
      }
    }
    if (changes['clearFunction']) {
      this.formulario?.reset();
      this.typeSendData = 'create';
      this.formulario = this.buildFormWithoutId();
    }

    if (changes['deleteClicked']) {
      
      
      if (this.dataEditing && this.dataEditing.id != undefined) {
        this.onDelete(this.dataEditing.id);
      } else {
        this.openSnackBar('Please select a driver');
      }
    }
  }
  
  private buildFormWithId() {
    // Construye el formulario incluyendo el campo 'id' para el modo de edición
    return this.fb.group({
      id: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      first_name: ['', [Validators.required]],
      ssn: ['', [Validators.required]],
      dod: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      zip: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      active: [true, [Validators.required]],
    });
  }

  private buildFormWithoutId() {
    // Construye el formulario sin el campo 'id' para el modo de creación
    return this.fb.group({
      last_name: ['', [Validators.required]],
      first_name: ['', [Validators.required]],
      ssn: ['', [Validators.required]],
      dod: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      zip: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      active: [true, [Validators.required]],
    });
  }

  onSubmit(typeSendData: any) {
    if (this.formulario && this.formulario.valid) {
      switch (typeSendData) {
        case 'create':
          this.functionDriver(this.formulario.value);
          break;
        case 'update':
          this.updateDriver(this.formulario.value, this.dataEditing.id);
          break;
        default:
          break;
      }
    } else {
      this.openSnackBar('Please fill in all the fields');
    }
  }

  functionDriver(form: any) {
    this._api.postDriver(form).subscribe(
      (res) => {
        this.enviarDatos.emit(true);
        this.openSnackBar('Driver created successfully');
        this.formulario?.reset();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  updateDriver(form: any, id: number) {
    this._api.updateDriver(form, id).subscribe(
      (res) => {
        this.enviarDatos.emit(true);
        this.formulario?.reset();
        this.openSnackBar('Driver updated successfully');
        this.typeSendData = 'create';
      },
      (err) => {
        console.log(err);
      }
    );
  }
  patchValueForm(data: any) {
    if (this.formulario && this.dataEditing) {
      this.formulario.patchValue({
        id: data.id,
        last_name: data.last_name,
        first_name: data.first_name,
        ssn: data.ssn,
        dod: data.dod,
        address: data.address,
        city: data.city,
        zip: data.zip,
        phone: data.phone,
        active: data.active,
      });
    }
    // this.typeSendData = 'create';
  }

  onDelete(id: number) {
    this._api.deleteDriver(id).subscribe(
      (res) => {
        this.enviarDatos.emit(true);
        this.formulario?.reset();
        this.openSnackBar('Driver deleted successfully');
        this.typeSendData = 'create';
      },
      (err) => {
        console.log(err);
      }
    );
  }
  openSnackBar(massage: string) {
    this._snackBar.open(massage, 'Cerrar', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}

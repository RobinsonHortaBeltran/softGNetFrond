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
import {
  MatSnackBarModule,
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { VehiclesService } from 'src/app/Services/vehicles.service';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css'],
})
export class VehicleFormComponent implements OnInit {
  @Output() enviarDatos: EventEmitter<any> = new EventEmitter();
  @Input() dataEditing: any;
  @Input() clearFunction: any;
  @Input() deleteClicked: any;
  public formulario: FormGroup | undefined;
  public camposHabilitados = true;
  public esModoEditar: boolean = false;
  public horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  public verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  public typeSendData = 'create';
  public fechaEnFormato: string = '';


  
  constructor(
    private fb: FormBuilder,
    private _api: VehiclesService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    if (this.formulario) {
      this.formulario.disable();
    }
    if (this.typeSendData == 'create') {
      this.formulario = this.buildFormWithoutId();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.dataEditing,"dataEditing");
    
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
      console.log(this.deleteClicked, 'recibido desde vehicles');
      if (this.dataEditing && this.dataEditing.id != undefined) {
        this.onDelete(this.dataEditing.id);
      } else {
        this.openSnackBar('Please select a driver');
      }
    }
  }

  private buildFormWithoutId() {
    return this.fb.group({
      description: ['', [Validators.required]],
      year: ['', [Validators.required]],
      make: ['', [Validators.required]],
      capacity: ['', [Validators.required]],
      active: [true, [Validators.required]],
    });
  }

  private buildFormWithId() {
    // Construye el formulario incluyendo el campo 'id' para el modo de edición
    return this.fb.group({
      id: ['', [Validators.required]],
      description: ['', [Validators.required]],
      year: ['', [Validators.required]],
      make: ['', [Validators.required]],
      capacity: ['', [Validators.required]],
      active: [true, [Validators.required]],
    });
  }

  onSubmit(typeSendData: any) {
    if (this.formulario && this.formulario.valid) {
      switch (typeSendData) {
        case 'create':
          this.functionVehicle(this.formulario.value);
          break;
        case 'update':
          console.log(this.formulario.value,"update");
          
          this.updateVehicle(this.formulario.value, this.dataEditing.id);
          break;
        default:
          break;
      }
    } else {
      this.openSnackBar('Please fill in all the fields');
    }
  }

  functionVehicle(form: any) {
    this._api.postVehicle(form).subscribe(
      (res) => {
        this.enviarDatos.emit(true);
        this.openSnackBar('Vehicle created successfully');
        this.formulario?.reset();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  updateVehicle(form: any, id: number) {
    this._api.updateVehicle(form, id).subscribe(
      (res) => {
        this.enviarDatos.emit(true);
        this.formulario?.reset();
        this.openSnackBar('Vehicle updated successfully');
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
        capacity: data.capacity,
        description: data.description,
        make: data.make,
        year: data.year,
        active: data.active,
      });
    }
    //this.typeSendData = 'create';
  }

  onDelete(id: number) {
    this._api.deleteVehicle(id).subscribe(
      (res) => {
        this.enviarDatos.emit(true);
        this.formulario?.reset();
        this.openSnackBar('Vehicle deleted successfully');
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

import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RoutesDService } from 'src/app/Services/RoutesD.service';
import { ServicesService } from 'src/app/Services/services.service';
import { VehiclesService } from 'src/app/Services/vehicles.service';

import {
  MatSnackBarModule,
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-routes-form',
  templateUrl: './routes-form.component.html',
  styleUrls: ['./routes-form.component.css'],
})
export class RoutesFormComponent implements OnInit {
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
  drivers: any[] = [];
  vehicles: any[] = [];

  constructor(
    private fb: FormBuilder,
    private _api: RoutesDService,
    private _snackBar: MatSnackBar,
    private _apiDriver: ServicesService,
    private _apiVehicle: VehiclesService
  ) {
    if (this.formulario) {
      this.formulario.disable();
    }
  }

  ngOnInit() {
    if (this.typeSendData == 'create') {
      this.formulario = this.buildFormWithoutId();
    }

    this.getDrivers();
    this.getVehicles();
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
      description: ['', [Validators.required]],
      driver_id: ['', [Validators.required]],
      vehicle_id: ['', [Validators.required]],
      active: [true, [Validators.required]],
    });
  }

  private buildFormWithoutId() {
    // Construye el formulario sin el campo 'id' para el modo de creación
    return this.fb.group({
      description: ['', [Validators.required]],
      driver_id: ['', [Validators.required]],
      vehicle_id: ['', [Validators.required]],
      active: [true, [Validators.required]],
    });
  }

  onSubmit(typeSendData: any) {
    if (this.formulario && this.formulario.valid) {
      switch (typeSendData) {
        case 'create':
          this.functionRoute(this.formulario.value);
          break;
        case 'update':
          this.updateRoute(this.formulario.value, this.dataEditing.id);
          break;
        default:
          break;
      }
    } else {
      this.openSnackBar('Please fill in all the fields');
    }
  }

  functionRoute(form: any) {
    this._api.postRoute(form).subscribe(
      (res) => {
        this.enviarDatos.emit(true);
        this.openSnackBar('Route created successfully');
        this.formulario?.reset();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  updateRoute(form: any, id: number) {
    this._api.updateRoute(form, id).subscribe(
      (res) => {
        this.enviarDatos.emit(true);
        this.formulario?.reset();
        this.openSnackBar('Route updated successfully');
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
        description: data.last_name,
        driver_id: data.first_name,
        vehicle_id: data.ssn,
        active: data.active,
      });
    }
    // this.typeSendData = 'create';
  }

  onDelete(id: number) {
    this._api.deleteRoute(id).subscribe(
      (res) => {
        this.enviarDatos.emit(true);
        this.formulario?.reset();
        this.openSnackBar('Route deleted successfully');
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

  getDrivers() {
    this._apiDriver.getDrivers().subscribe(
      (res) => {
        this.drivers = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getVehicles() {
    this._apiVehicle.getVehicles().subscribe(
      (res) => {
        this.vehicles = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}

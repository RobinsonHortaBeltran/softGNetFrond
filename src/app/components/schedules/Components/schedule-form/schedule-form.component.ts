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
import { ScheduleService } from 'src/app/Services/schedule.service';
import {
  MatSnackBarModule,
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { RoutesDService } from 'src/app/Services/RoutesD.service';
import { VehiclesService } from 'src/app/Services/vehicles.service';


@Component({
  selector: 'app-schedule-form',
  templateUrl: './schedule-form.component.html',
  styleUrls: ['./schedule-form.component.css'],
})
export class ScheduleFormComponent implements OnInit {
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
  routes: any[] = [];
  vehicles: any[] = [];

  constructor(
    private fb: FormBuilder,
    private _api: ScheduleService,
    private _snackBar: MatSnackBar,
    private _apiRoute: RoutesDService,
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
      route_id: ['', [Validators.required]],
      dayWeek_num: ['', [Validators.required]],
      from: ['', [Validators.required]],
      to: ['', [Validators.required]],
      active: [true, [Validators.required]],
    });
  }

  private buildFormWithoutId() {
    // Construye el formulario sin el campo 'id' para el modo de creación
    return this.fb.group({
      route_id: ['', [Validators.required]],
      dayWeek_num: ['', [Validators.required]],
      from: ['', [Validators.required]],
      to: ['', [Validators.required]],
      active: [true, [Validators.required]],
    });
  }

  onSubmit(typeSendData: any) {
    if (this.formulario && this.formulario.valid) {
      switch (typeSendData) {
        case 'create':
          this.functionSchedules(this.formulario.value);
          break;
        case 'update':
          this.updateSchedules(this.formulario.value, this.dataEditing.id);
          break;
        default:
          break;
      }
    } else {
      this.openSnackBar('Please fill in all the fields');
    }
  }

  functionSchedules(form: any) {
    this._api.postSchedule(form).subscribe(
      (res) => {
        this.enviarDatos.emit(true);
        this.openSnackBar('Schedules created successfully');
        this.formulario?.reset();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  updateSchedules(form: any, id: number) {
    this._api.updateSchedule(form, id).subscribe(
      (res) => {
        this.enviarDatos.emit(true);
        this.formulario?.reset();
        this.openSnackBar('Schedules updated successfully');
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
        route_id: data.route_id,
        dayWeek_num: data.dayWeek_num,
        from: data.from,
        to: data.to,
        active: data.active,
      });
    }
    // this.typeSendData = 'create';
  }

  onDelete(id: number) {
    this._api.deleteSchedule(id).subscribe(
      (res) => {
        this.enviarDatos.emit(true);
        this.formulario?.reset();
        this.openSnackBar('Schedules deleted successfully');
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
    this._apiRoute.getRoutes().subscribe(
      (res) => {
        this.routes = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

}

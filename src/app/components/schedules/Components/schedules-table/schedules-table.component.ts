import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ScheduleService} from 'src/app/Services/schedule.service';

@Component({
  selector: 'app-schedules-table',
  templateUrl: './schedules-table.component.html',
  styleUrls: ['./schedules-table.component.css'],
})
export class SchedulesTableComponent implements OnInit {
  @Input() datosHijo2: any;
  @Output() dataEdit: EventEmitter<any> = new EventEmitter();
  displayedColumns: string[] = [
    'id',
    'dayWeek_num',
    'from',
    'to',
    'active',
  ];
  public dataSource: any;
  public data: any[] = [];
  public selectedRowIndex = -1;
  public selectedRowData: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private _api: ScheduleService, private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }
  ngOnInit() {
    this.getSchedules();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['datosHijo2']) {
      this.getSchedules();
      this.cdr.detectChanges();
    }
  }

  onRowClicked(index: number): void {
    console.log(this.data[index], 'Data seleccionada');
    this.selectedRowIndex = index;
    this.dataEdit.emit(this.data[index]);
  }

  getSchedules() {
    this._api.getSchedules().subscribe((res) => {
      this.data = res;
      this.dataSource = new MatTableDataSource<any>(this.data);
    });
  }
}

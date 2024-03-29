import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-table-drivers',
  templateUrl: './table-drivers.component.html',
  styleUrls: ['./table-drivers.component.css'],
})
export class TableDriversComponent implements OnInit {
  @Input() datosHijo2: any;
  @Output() dataEdit: EventEmitter<any> = new EventEmitter();

  displayedColumns: string[] = [
    'id',
    'last_name',
    'first_name',
    'ssn',
    'dod',
    'address',
    'city',
    'zip',
    'phone',
    'active',
  ];

  public dataSource: any;
  public data: any[] = [];
  public selectedRowIndex = -1;
  public selectedRowData: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private _api: ServicesService, private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }
  ngOnInit() {
    this.getDrivers();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['datosHijo2']) {
      this.getDrivers();
      this.cdr.detectChanges();
    }
  }

  onRowClicked(index: number): void {
    console.log(this.data[index], 'Data seleccionada');
    this.selectedRowIndex = index;
    this.dataEdit.emit(this.data[index]);
  }

  getDrivers() {
    this._api.getDrivers().subscribe((res) => {
      this.data = res;
      this.dataSource = new MatTableDataSource<any>(this.data);
    });
  }
}

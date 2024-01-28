import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { findIndex } from 'rxjs';
import { ServicesService } from 'src/app/Services/services.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-table-drivers',
  templateUrl: './table-drivers.component.html',
  styleUrls: ['./table-drivers.component.css'],
})
export class TableDriversComponent implements OnInit {
  @Input() datosHijo2: any;
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
  dataSource: any;
  data: any[] = [];
  selectedRowIndex = -1;
  selectedRowData: any;
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
  }

  getDrivers() {
    this._api.getDrivers().subscribe((res) => {
      this.data = res;
      this.dataSource = new MatTableDataSource<any>(this.data);
    });
  }
}

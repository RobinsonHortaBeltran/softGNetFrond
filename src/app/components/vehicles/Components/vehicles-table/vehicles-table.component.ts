import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { VehiclesService } from 'src/app/Services/vehicles.service';

@Component({
  selector: 'app-vehicles-table',
  templateUrl: './vehicles-table.component.html',
  styleUrls: ['./vehicles-table.component.css'],
})
export class VehiclesTableComponent implements OnInit {
  @ViewChild('MatPaginator') paginator!: MatPaginator;
  @Input() datosHijo2: any;
  @Output() dataEdit: EventEmitter<any> = new EventEmitter();

  displayedColumns: string[] = [
    'id',
    'year',
    'capacity',
    'description',
    'make',
    'active',
  ];
  public dataSource: any;
  public data: any[] = [];
  public selectedRowIndex = -1;
  public selectedRowData: any;
  constructor(private _api: VehiclesService, private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  ngOnInit() {
    this.getVehicles();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['datosHijo2']) {
      this.getVehicles();
      this.cdr.detectChanges();
    }
  }

  onRowClicked(index: number): void {
    
    
    this.selectedRowIndex = index;
    this.dataEdit.emit(this.data[index]);
  }

  getVehicles() {
    this._api.getVehicles().subscribe((res) => {
      this.data = res;
      this.dataSource = this.data;
    });
  }
}

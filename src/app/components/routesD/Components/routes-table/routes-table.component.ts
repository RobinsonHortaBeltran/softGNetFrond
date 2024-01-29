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
import { RoutesDService } from 'src/app/Services/RoutesD.service';

@Component({
  selector: 'app-routes-table',
  templateUrl: './routes-table.component.html',
  styleUrls: ['./routes-table.component.css'],
})
export class RoutesTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
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

  constructor(private _api: RoutesDService, private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  ngOnInit() {
    this.getRoutes();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['datosHijo2']) {
      this.getRoutes();
      this.cdr.detectChanges();
    }
  }

  onRowClicked(index: number): void {
    console.log(this.data[index], 'Data seleccionada');
    this.selectedRowIndex = index;
    this.dataEdit.emit(this.data[index]);
  }

   getRoutes() {
    this._api.getRoutes().subscribe((res) => {
      this.data = res;
      this.dataSource = new MatTableDataSource<any>(this.data);
    });
  }
}

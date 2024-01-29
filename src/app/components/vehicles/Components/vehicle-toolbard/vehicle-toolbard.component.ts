import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-vehicle-toolbard',
  templateUrl: './vehicle-toolbard.component.html',
  styleUrls: ['./vehicle-toolbard.component.css'],
})
export class VehicleToolbardComponent implements OnInit {
  @Output() buttonClickEracer = new EventEmitter<void>();
  @Output() deleteClicked = new EventEmitter<void>();

  public editingButton: boolean = false;
  public eraserButton = true;
  public deleteButton = true;
  constructor() {}

  ngOnInit() {}

  onEditClick(): void {
  }

  onConfigClick(): void {
  }
  onClear() {
    this.buttonClickEracer.emit();
  }

  onDelete() {
    this.deleteClicked.emit();
  }
}

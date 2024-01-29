import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-routes-toolbard',
  templateUrl: './routes-toolbard.component.html',
  styleUrls: ['./routes-toolbard.component.css'],
})
export class RoutesToolbardComponent implements OnInit {
  @Output() buttonClickEracer = new EventEmitter<void>();
  @Output() deleteClicked = new EventEmitter<void>();
  constructor() {}
  public editingButton: boolean = false;
  public eraserButton = true;
  public deleteButton = true;
  ngOnInit() {}

  onEditClick(): void {
    // if (this.emit) {
    //   this.emit = false;
    //   this.editClicked.emit(this.emit);
    // } else {
    //   this.emit = true;
    //   this.editClicked.emit(this.emit);
    // }
  }

  onConfigClick(): void {
    // this.configClicked.emit();
  }

  onClear() {
    this.buttonClickEracer.emit();
  }

  onDelete() {
    this.deleteClicked.emit();
  }
}

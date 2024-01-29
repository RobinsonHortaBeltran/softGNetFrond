import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-schedule-toolbard',
  templateUrl: './schedule-toolbard.component.html',
  styleUrls: ['./schedule-toolbard.component.css'],
})
export class ScheduleToolbardComponent implements OnInit {
  @Output() buttonClickEracer = new EventEmitter<void>();
  @Output() deleteClicked = new EventEmitter<void>();

  public editingButton: boolean = false;
  public eraserButton = true;
  public deleteButton = true;
  constructor() {}

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

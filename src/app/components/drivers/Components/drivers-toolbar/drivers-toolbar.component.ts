import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drivers-toolbar',
  templateUrl: './drivers-toolbar.component.html',
  styleUrls: ['./drivers-toolbar.component.css'],
})
export class DriversToolbarComponent implements OnInit {
  constructor() {}

  public editingButton:boolean = true;
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
}

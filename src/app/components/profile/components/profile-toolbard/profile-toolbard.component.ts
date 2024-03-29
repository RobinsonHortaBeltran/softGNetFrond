import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-profile-toolbard',
  templateUrl: './profile-toolbard.component.html',
  styleUrls: ['./profile-toolbard.component.css'],
})
export class ProfileToolbardComponent implements OnInit {
  @Output() editClicked = new EventEmitter<boolean>();
  @Output() configClicked = new EventEmitter<void>();

  emit:boolean = false;
  constructor() {}

  ngOnInit() {}

  onEditClick(): void {
    if(this.emit){
      this.emit = false;
    this.editClicked.emit(this.emit);
    }else{
      this.emit = true;
      this.editClicked.emit(this.emit);
    }
  }

  onConfigClick(): void {
    this.configClicked.emit();
  }
  
}

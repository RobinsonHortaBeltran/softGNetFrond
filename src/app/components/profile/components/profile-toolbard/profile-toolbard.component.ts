import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-profile-toolbard',
  templateUrl: './profile-toolbard.component.html',
  styleUrls: ['./profile-toolbard.component.css'],
})
export class ProfileToolbardComponent implements OnInit {
  @Output() editClicked = new EventEmitter<boolean>();
  @Output() configClicked = new EventEmitter<void>();
  constructor() {}

  ngOnInit() {}

  onEditClick(): void {
    this.editClicked.emit(true);
  }

  onConfigClick(): void {
    this.configClicked.emit();
  }
  
}

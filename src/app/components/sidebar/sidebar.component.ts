import { Component,Input, SimpleChanges  } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() isSidebarVisible: boolean = true;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isSidebarVisible'] ) {
       this.toggleSidebar();
       } else {
        console.log("No hay cambios en el sidebar");
    }
}
  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
}

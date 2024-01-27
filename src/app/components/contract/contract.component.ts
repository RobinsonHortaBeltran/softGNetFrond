import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogContentExampleDialogComponent} from "../dialog-content-example-dialog/dialog-content-example-dialog.component";
@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss']
})
export class ContractComponent {
constructor(public dialog:MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

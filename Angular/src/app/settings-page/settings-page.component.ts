import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent {

  name: string;
  ip: string;
  type: string;
  room: string;
  mqttTitle: string;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '40vw',
      data: { name: this.name, ip: this.ip, type: this.type, room: this.room, mqttTitle: this.mqttTitle }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}

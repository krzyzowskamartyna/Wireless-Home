import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalComponent } from '../modal/modal.component';
import { apiService } from '../services/api.service';

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
  MqttTopics: string;

  constructor(public dialog: MatDialog, public service: apiService) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '40vw',
      data: { Name: this.name, Ip: this.ip, Type: this.type, Room: this.room, MqttTopics: this.MqttTopics }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}

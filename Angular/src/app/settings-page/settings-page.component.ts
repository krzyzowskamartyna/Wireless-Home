import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalComponent } from '../modal/modal.component';
import { apiService } from '../services/api.service';
import { Detail } from '../services/detail.model';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss'],
  providers: [Detail]
})
export class SettingsPageComponent implements OnInit {

  name: string;
  ip: string;
  type: string;
  room: string;
  MqttTopics: string;

  list: Detail[] = [];
  displayedColumns: string[] = ['position', 'name', 'room', 'ip', 'deviceType', 'mqttTopics', 'edit', 'delete'];

  constructor(public dialog: MatDialog, public api: apiService, public data: Detail) { }

  loadList() {
    this.api.getList().subscribe(list => {
      this.list = list;
    })
  }
  ngOnInit() {
    this.loadList();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '40vw',
      data: { Name: this.name, Ip: this.ip, Type: this.type, Room: this.room, MqttTopics: this.MqttTopics }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      //this.onSubmit();
    });
  }

}

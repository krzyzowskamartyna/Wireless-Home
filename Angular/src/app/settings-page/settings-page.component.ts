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
  Id: 0;
  name: string;
  ip: string;
  type: string;
  room: string;
  MqttTopics: string;
  DeviceType: string;

  list: Detail[] = [];
  displayedColumns: string[] = ['position', 'name', 'room', 'ip', 'DeviceType', 'mqttTopics', 'edit', 'delete'];

  constructor(public dialog: MatDialog, public api: apiService, public data: Detail) { }

  loadList() {
    this.api.getList().subscribe(list => {
      this.list = list;
    })
  }
  ngOnInit() {
    this.loadList();
    this.Id = 0;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '40vw',
      data: { Name: this.name, Ip: this.ip, DeviceType: this.DeviceType, Room: this.room, MqttTopics: this.MqttTopics }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.onSubmit(result);
    });
  }
  onSubmit(result) {
    this.api.postDevice(result).subscribe(res => {
      this.data = res;

    })
  }
  onDelete(id) {
    this.api.deleteDevice(id).subscribe(res => {
      // this.data = res;

    })
  }



}

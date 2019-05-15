import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalComponent } from '../modal/modal.component';
import { apiService } from '../services/api.service';
import { Detail } from '../services/detail.model';
import { EditModalComponent } from '../edit-modal/edit-modal.component';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss'],
  providers: [Detail]
})
export class SettingsPageComponent implements OnInit {
  Id: number;
  name: string;
  ip: string;
  type: string;
  room: string;
  MqttTopics: string;
  DeviceType: string;
  loading: boolean = false;
  show: boolean = false;
  list: Detail[] = [];
  displayedColumns: string[] = ['position', 'name', 'room', 'ip', 'DeviceType', 'mqttTopics', 'edit', 'delete'];

  constructor(public dialog: MatDialog, public api: apiService, public data: Detail) { }

  loadList() {
    this.loading = true;
    this.api.getList().subscribe(list => {
      this.list = list;
      this.loading = false;
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
      window.location.reload();
      this.loading = true;
    });
  }
  openDialogExist(id: number): void {
    this.show = true;

    const dialogRef = this.dialog.open(EditModalComponent, {
      width: '40vw',
      // data: { Id: this.Id, Name: this.name, Ip: this.ip, DeviceType: this.DeviceType, Room: this.room, MqttTopics: this.MqttTopics }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      this.onEdit(id, result);
      window.location.reload();
      this.loading = true;
    });
  }
  onSubmit(result: any) {
    this.api.postDevice(result).subscribe(res => {
      this.data = res;

    })
  }
  onDelete(id: number) {
    this.api.deleteDevice(id).subscribe(res => {
      window.location.reload();
      this.loading = true;
    })
  }

  onEdit(id: number, result: any) {
    this.api.editDevice(id, result).subscribe(res => {
      this.data = res;

    })
  }



}

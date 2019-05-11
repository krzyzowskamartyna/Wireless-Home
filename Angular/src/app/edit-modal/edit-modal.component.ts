import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Detail } from '../services/detail.model';
import { apiService } from '../services/api.service';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['../modal/modal.component.scss']
})
export class EditModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditModalComponent>,
    @Inject(MAT_DIALOG_DATA)
    public api: apiService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  param: any;
  data: Detail = new Detail();


  ngOnInit() {

  }

}
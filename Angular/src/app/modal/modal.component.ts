import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Detail } from '../services/detail.model';
import { apiService } from '../services/api.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() show: boolean;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA)
    public api: apiService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  noShow: boolean = false;
  param: any;
  data: Detail = new Detail();


  ngOnInit() {

  }

}
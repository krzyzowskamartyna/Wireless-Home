import { Component, OnInit } from '@angular/core';
import { apiService } from '../services/api.service';
import { Detail } from '../services/detail.model';

@Component({
  selector: 'app-control-page',
  templateUrl: './control-page.component.html',
  styleUrls: ['./control-page.component.scss']
})
export class ControlPageComponent implements OnInit {

  constructor(private api: apiService) { }

  ngOnInit() {
    this.loadList();
  }

  list: Detail[] = [];
  displayedColumns: string[] = ['position', 'name', 'room', 'turnon', 'turnoff'];
  loadList() {
    this.api.getList().subscribe(list => {
      this.list = list;
    })
  }
}

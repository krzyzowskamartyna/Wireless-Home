import { Component, OnInit } from '@angular/core';
import { apiService } from '../services/api.service';
import { Detail } from '../services/detail.model';
import { Paho } from 'ng2-mqtt/mqttws31';
import { config } from '../config.js';

@Component({
  selector: 'app-control-page',
  templateUrl: './control-page.component.html',
  styleUrls: ['./control-page.component.scss']
})
export class ControlPageComponent implements OnInit {

  private MQTT_HOST = '192.168.0.50';
  private MQTT_PORT = 9001;
  private MQTT_TOPIC = 'esp/dev0';

  client: any;
  constructor(private api: apiService) {
  }
  message: any;
  ngOnInit() {
    this.loadList();
    this.client = new Paho.MQTT.Client(this.MQTT_HOST, Number(this.MQTT_PORT), 'clientId');
    this.client.onConnectionLost = this.onConnectionLost.bind(this);
    this.client.connect({ onSuccess: this.onConnect.bind(this), userName: config.userName, password: config.password });
  }

  onConnect() {
    this.client.subscribe(this.MQTT_TOPIC);
  }
  onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log('onConnectionLost:' + responseObject.errorMessage);
    }
  }

  turn(msg: string, element: Detail) {
    this.message = new Paho.MQTT.Message(msg);
    this.message.destinationName = element.MqttTopics;
    this.client.send(this.message);
  }

  list: Detail[] = [];
  displayedColumns: string[] = ['position', 'name', 'room', 'turnon', 'turnoff'];
  loadList() {
    this.api.getList().subscribe(list => {
      this.list = list;
    })
  }

}

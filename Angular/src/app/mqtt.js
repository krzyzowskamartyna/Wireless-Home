/* 'use strict'
const mqtt = require('mqtt');

const MQTT_HOST = '192.168.0.50'
const MQTT_PORT = 1883
const MQTT_KEEPALIVE_INTERVAL = 45
const MQTT_TOPIC = 'esp/dev0'
const MQTT_MSG = 'off';

exports.module = function mqttSend(msg) {
  const client = mqtt.connect({ port: MQTT_PORT, host: MQTT_HOST, keepalive: MQTT_KEEPALIVE_INTERVAL });

  client.on('error', function (err) {
    console.log(err)
    client.end()
  })

  client.on('connect', function () {
    console.log('client connected on port: ' + MQTT_PORT)
  });

  client.subscribe(MQTT_TOPIC, { qos: 0 });
  client.publish(MQTT_TOPIC, msg)

  client.on('message', function (MQTT_TOPIC, msg) {
    console.log(msg + ' ' + MQTT_TOPIC)
  })
  client.end()
}
mqttSend('off');
 */
import { Component, OnInit } from '@angular/core';
import { tileLayer, latLng, marker, Marker } from 'leaflet';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  public options: any;

  constructor() { }

  ngOnInit() {
      this.options = {
          layers: [
              tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
          ],
          zoom: 5,
          center: latLng(46.879966, -121.726909)
      };
  }



}

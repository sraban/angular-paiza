/// <reference types="@types/googlemaps" />
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {ToasterService, ToasterConfig, BodyOutputType} from 'angular2-toaster';
import {} from 'googlemaps';

declare const google: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  private toasterService: ToasterService;

  public config1 : ToasterConfig = new ToasterConfig({
    limit: 7,
    tapToDismiss: false,
    showCloseButton: true,
    mouseoverTimerStop: true
  });

  constructor(toasterService: ToasterService) { 
    this.toasterService= toasterService;
  }

  ngOnInit() {

  }


  popMeUp() {

    var toast : any = {
        type: 'success',
        title: 'My Toast Demo',
        timeout:5000,
        //onShowCallback: (toast) => this.toasterService.pop('success', 'invoked from ' + toast.title + ' onShow callback') ,
        //onHideCallback: (toast) => this.toasterService.pop('info', 'invoked from ' + toast.title + ' onHide callback'),
        body: '<h5}>this is an angular2 toast</h5>',
        bodyOutputType: BodyOutputType.TrustedHtml
    };

    this.toasterService.pop(toast);
    //this.toasterService.pop('success', 'Args Title', 'Args Body');
  }


  /* Google Map */

  uluru: Object = { lat: -25.363, lng: 131.044 };
  map: any;
  marker: Object;
  zoom: number;
  @ViewChild('map') mapRef: ElementRef;

  ngAfterViewInit() {
    //used setTimeout google map is delayed in loading, in stackBlitz

      setTimeout(() => {
        this.map = new google.maps.Map(this.mapRef.nativeElement, {
          zoom: 4,
          center: this.uluru
        });
        this.marker = new google.maps.Marker({
          position: this.uluru,
          map: this.map
        });

      }, 2000);

    //console.log(this.map.getZoom())
  }

  reset() {
    this.uluru = { lat: -25.363, lng: 131.044 };
    this.map = new google.maps.Map(this.mapRef.nativeElement, {
      zoom: 4,
      center: this.uluru
    });
    this.marker = new google.maps.Marker({
      position: this.uluru,
      map: this.map
    });
  }

  updateMap(lats: number, lon: number) {
    this.zoom = this.map.getZoom();
    alert('current zoom=' + this.zoom);
    this.uluru = { lat: lats, lng: lon };
    this.map = new google.maps.Map(this.mapRef.nativeElement, {
      zoom: this.zoom,
      center: this.uluru
    });
    this.marker = new google.maps.Marker({
      position: this.uluru,
      map: this.map
    });
  }

}

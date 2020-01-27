import { Component, OnInit , ElementRef, ViewChild } from '@angular/core';

import Chart from 'chart.js';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  dataChart: any ;

  ckeConfig: any;
  mycontent: string;
  log: string = '';
  @ViewChild("myckeditor") ckeditor: any;

  constructor(private elementRef: ElementRef) { 
    this.mycontent = '<p>Greetings from CKEditor...</p>';
  }

  ngOnInit() {
     this.ckeConfig = {
      uiColor: '#a4a4a4',
      allowedContent: false,
      extraPlugins: 'divarea',
      forcePasteAsPlainText: true
    };
  }
  
  ngAfterViewInit() {

  }

  ngAfterViewChecked() {

  }

  ngAfterContentInit() {
     
                  //$(document).ready(function(){ 
                  //});

                  //var ctx = $('#myChart');

                  let ctx = this.elementRef.nativeElement.querySelector("#myChart");
                  //var ctx = document.getElementById("myChart").getContext('2d');
                  var myChart = new Chart(ctx, {
                  type: 'bar',
                  data: {
                      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                      datasets: [{
                          label: '# of Votes',
                          data: [12, 19, 3, 5, 2, 3],
                          backgroundColor: [
                              'rgba(255, 99, 132, 0.2)',
                              'rgba(54, 162, 235, 0.2)',
                              'rgba(255, 206, 86, 0.2)',
                              'rgba(75, 192, 192, 0.2)',
                              'rgba(153, 102, 255, 0.2)',
                              'rgba(255, 159, 64, 0.2)'
                          ],
                          borderColor: [
                              'rgba(255,99,132,1)',
                              'rgba(54, 162, 235, 1)',
                              'rgba(255, 206, 86, 1)',
                              'rgba(75, 192, 192, 1)',
                              'rgba(153, 102, 255, 1)',
                              'rgba(255, 159, 64, 1)'
                          ],
                          borderWidth: 1
                      }]
                  },
                  options: {
                      scales: {
                          yAxes: [{
                              ticks: {
                                  beginAtZero:true
                              }
                          }]
                      }
                  }
                }); 
   }

}

import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

/*  chartOption: EChartOption = {
                  xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                  },
                  yAxis: {
                    type: 'value'
                  },
                  series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line'
                  }]
              };*/


  chartOption: EChartOption = {
                    title: {
                      text: "Category Breakdown",
                      subtext:'Subcategory',
                      left: "center"
                    },
                    tooltip: {
                      trigger: "item",
                      formatter: "{a} <br> {b} <br>{c}%",
                      textStyle: {
                        fontWeight: "bold",
                        fontSize: 13
                      }
                    },
                    legend: {
                        // orient: 'vertical',
                        // top: 'middle',
                        bottom: 10,
                        left: 'center',
                        data: ['AAAA', 'BBBB', 'CCCC', 'DDDD']
                    },
                    series: [
                      {
                        type: "pie",
                        radius: "65%",
                        center: ["50%", "50%"],
                        selectedMode: "single",
                        data: [{value: 100, name: 'AAAA'},{value: 200, name: 'BBBB'},{value: 300, name: 'CCCC'},{value: 400, name: 'DDDD'}],
                        label: {
                          normal: {
                            show: true,
                            position: "outside"
                          },
                          emphasis: {
                            show: true,
                            textStyle: {
                              fontSize: "13"
                            },
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                          }
                        }
                      }
                    ]
                  };
}


import { Component, OnInit } from '@angular/core';
import { ApexOptions } from 'apexcharts';



@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  
  assetName: string = "Aire acondicionado";

  constructor(){ }
  

  ngOnInit(): void {
    this.showChartVoltage();
    this.showChartStream();
    this.showChartTemperature();
    this.showChartOther();
    
    console.log("");
  }

  showChartVoltage(){
    var options = {
      chart: {
        type: 'line'
      },
      series: [{
        name: 'sales',
        data: [30,40,45,50,49,60,70,91,125]
      }],
      xaxis: {
        categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
      },
      stroke: {
        curve: 'smooth',
      }
    }
    var chartVoltage = new ApexCharts(document.querySelector("#chartVoltage"), options);
    chartVoltage.render();
  }

  showChartStream(){
    var options = {
      chart: {
        type: 'line'
      },
      series: [{
        name: 'sales',
        data: [30,40,45,50,49,60,70,91,125]
      }],
      xaxis: {
        categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
      },
      stroke: {
        curve: 'smooth',
      }
    }
    var chartStream = new ApexCharts(document.querySelector("#chartStream"), options);
    chartStream.render();
  }

  showChartTemperature(){
    var options = {
      chart: {
        type: 'line'
      },
      series: [{
        name: 'sales',
        data: [30,40,45,50,49,60,70,91,125]
      }],
      xaxis: {
        categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
      },
      stroke: {
        curve: 'smooth',
      }
    }
    var chartTemperature = new ApexCharts(document.querySelector("#chartTemperature"), options);
    chartTemperature.render();
  }

  showChartOther(){
    var options = {
      chart: {
        type: 'line'
      },
      series: [{
        name: 'sales',
        data: [30,40,45,50,49,60,70,91,125]
      }],
      xaxis: {
        categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
      },
      stroke: {
        curve: 'smooth',
      }
    }
    var chartOther = new ApexCharts(document.querySelector("#chartOther"), options);
    chartOther.render();
  }
}

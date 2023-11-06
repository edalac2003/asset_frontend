import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard-asset-detail',
  templateUrl: './dashboard-asset-detail.component.html',
  styleUrls: ['./dashboard-asset-detail.component.css']
})
export class DashboardAssetDetailComponent implements OnInit {
  assetName: string = "Aire acondicionado";

  assetId!: number;

  constructor(
    private route: ActivatedRoute
  ){ }
  

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        this.assetId = params['id']
        console.log("He recibido el Asset ID: " + this.assetId);
      }
    );

    this.showChartVoltage();
    this.showChartStream();
    this.showChartTemperature();
    
    console.log("");
  }

  showChartVoltage(){
    var options = {
      chart: {
        type: 'line'
      },
      series: [{
        name: 'Voltaje',
        data: [118,115,118,110,115,120,118,117,110]
      }],
      xaxis: {
        categories: ['10:30','10:35','10:40','10:45','10:55','11:00','11:05', '11:10','11:15']
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
        name: 'Corriente',
        data: [5,5,4.5,4.2,4.8,4.1,4.5,4.8,5]
      }],
      xaxis: {
        categories: ['10:30','10:35','10:40','10:45','10:55','11:00','11:05', '11:10','11:15']
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
        name: 'Temperatura',
        data: [21,25,23,27,22,23,22,25,24]
      }],
      xaxis: {
        categories: ['10:30','10:35','10:40','10:45','10:55','11:00','11:05', '11:10','11:15']
      },
      stroke: {
        curve: 'smooth',
      }
    }
    var chartTemperature = new ApexCharts(document.querySelector("#chartTemperature"), options);
    chartTemperature.render();
  }

}

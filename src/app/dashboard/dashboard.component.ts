import { Component, OnInit } from '@angular/core';
import { ApexOptions } from 'apexcharts';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  assetName: string = 'Aire acondicionado';

  constructor() {}

  ngOnInit(): void {
    this.showChartVoltage();
    this.showChartStream();
    this.showChartTemperature();
    this.showChartAssetCategory();
    this.showChartRequest();
    this.showChartClose();

    console.log('');
  }

  showChartVoltage() {
    var options = {
      chart: {
        type: 'line',
      },
      series: [
        {
          name: 'Voltaje',
          data: [118, 115, 118, 110, 115, 120, 118, 117, 110],
        },
      ],
      xaxis: {
        categories: [
          '10:30',
          '10:35',
          '10:40',
          '10:45',
          '10:55',
          '11:00',
          '11:05',
          '11:10',
          '11:15',
        ],
      },
      stroke: {
        curve: 'smooth',
      },
    };
    var chartVoltage = new ApexCharts(
      document.querySelector('#chartVoltage'),
      options
    );
    chartVoltage.render();
  }

  showChartStream() {
    var options = {
      chart: {
        type: 'line',
      },
      series: [
        {
          name: 'Corriente',
          data: [5, 5, 4.5, 4.2, 4.8, 4.1, 4.5, 4.8, 5],
        },
      ],
      xaxis: {
        categories: [
          '10:30',
          '10:35',
          '10:40',
          '10:45',
          '10:55',
          '11:00',
          '11:05',
          '11:10',
          '11:15',
        ],
      },
      stroke: {
        curve: 'smooth',
      },
    };
    var chartStream = new ApexCharts(
      document.querySelector('#chartStream'),
      options
    );
    chartStream.render();
  }

  showChartTemperature() {
    var options = {
      chart: {
        type: 'line',
      },
      series: [
        {
          name: 'Temperatura',
          data: [21, 25, 23, 27, 22, 23, 22, 25, 24],
        },
      ],
      xaxis: {
        categories: [
          '10:30',
          '10:35',
          '10:40',
          '10:45',
          '10:55',
          '11:00',
          '11:05',
          '11:10',
          '11:15',
        ],
      },
      stroke: {
        curve: 'smooth',
      },
    };
    var chartTemperature = new ApexCharts(
      document.querySelector('#chartTemperature'),
      options
    );
    chartTemperature.render();
  }

  showChartAssetCategory() {
    var options = {
      chart: {
        type: 'bar',
      },
      series: [
        {
          name: 'Solicitudes',
          data: [21, 25, 23, 27, 22, 23],
        },
      ],
      xaxis: {
        categories: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
      },
      stroke: {
        curve: 'smooth',
      },
    };
    var chartAssetCategory = new ApexCharts(
      document.querySelector('#chartAssetCategory'),
      options
    );
    chartAssetCategory.render();
  }

  showChartRequest() {
    // var options = {
    //   chart: {
    //     type: 'donut',
    //   },
    //   series: [
    //     {
    //       name: 'Solicitudes Abiertas',
    //       data: [21, 25, 23, 27, 22, 23],
    //     },
    //   ],
    //   xaxis: {
    //     categories: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
    //   },
    //   stroke: {
    //     curve: 'smooth',
    //   },
    // };
    var options = {
      // plotOptions: {
      //   pie: {
      //     size: 200,
      //     donut: {
      //       labels: {
      //         show: true,
      //         name: {
      //           name: 'Solicitudes Abiertas',
      //         },
      //         value: {
      //           ['Apple', 'Mango', 'Orange', 'Watermelon']
      //         }
      //       }
      //     }
      //   },
      //   dataLabels: {
      //     enabled: true,
      //     formatter: function (valor) {
      //       return valor + "%"
      //     },
      //     dropShadow: {
      //       ...
      //     }
      //   }
      // }
    }
    var chartRequest = new ApexCharts(document.querySelector('#chartRequest'), options);
    chartRequest.render();
  }

  showChartClose() {
    var options = {
      chart: {
        type: 'line',
      },
      series: [
        {
          name: 'Temperatura',
          data: [21, 25, 23, 27, 22, 23, 22, 25, 24],
        },
      ],
      xaxis: {
        categories: [
          '10:30',
          '10:35',
          '10:40',
          '10:45',
          '10:55',
          '11:00',
          '11:05',
          '11:10',
          '11:15',
        ],
      },
      stroke: {
        curve: 'smooth',
      },
    };
    var chartClose = new ApexCharts(document.querySelector('#chartClose'), options);
    chartClose.render();
  }
}

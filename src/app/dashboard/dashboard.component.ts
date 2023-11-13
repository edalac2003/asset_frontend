import { Component, OnInit } from '@angular/core';
import { ApexOptions } from 'apexcharts';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  ARRAY_MONTH_1 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
  ARRAY_MONTH_2 = ['Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  constructor() {}

  ngOnInit(): void {
    this.showChartRequest();
    this.showChartRepairs();
    this.showChartCost();

    console.log('');
  }

  showChartRequest() {
    var options = {
      chart: {
        height: 350,
        type: 'bar',
      },
      series: [
        {
          name: 'Solicitudes',
          data: [77, 83, 80, 75, 82, 87],
        },
      ],
      xaxis: {
        categories: this.ARRAY_MONTH_2,
      },
      stroke: {
        curve: 'smooth',
      },
    };
    var chartRequest = new ApexCharts(document.querySelector('#chartRequest'), options);
    chartRequest.render();
  }

  showChartRepairs() {
    var options = {
      chart: {
        height: 300,
        type: 'line',
      },
      dataLabels: {
        enabled: true
      },
      series: [
        {
          name: 'Reparaciones',
          data: [46, 53, 46, 42, 35, 38],
        },
      ],
      xaxis: {
        categories: this.ARRAY_MONTH_2,
      },
      stroke: {
        curve: 'smooth',
      },
    };
    var chartRepairs = new ApexCharts(document.querySelector('#chartRepairs'), options);
    chartRepairs.render();
  }

  showChartCost() {
    var options = {
      chart: {
        height: 300,
        type: "line",
        stacked: false
      },
      dataLabels: {
        enabled: true
      },
      colors: ["#FF1654", "#247BA0"],
      series: [
        {
          name: "Mantenimiento",
          data: [1.4, 2, 2.5, 1.5]
        },
        {
          name: "Reparaciones",
          data: [27, 37, 29, 28]
        }
      ],
      stroke: {
        width: [4, 4],
        curve: 'smooth'
      },
      plotOptions: {
        bar: {
          columnWidth: "20%"
        }
      },
      xaxis: {
        categories: this.ARRAY_MONTH_2
      },
      yaxis: [
        {
          axisTicks: {
            show: true
          },
          axisBorder: {
            show: true,
            color: "#FF1654"
          },
          labels: {
            style: {
              colors: "#FF1654"
            }
          },
          title: {
            text: "Mantenimiento",
            style: {
              color: "#FF1654"
            }
          }
        },
        {
          opposite: true,
          axisTicks: {
            show: true
          },
          axisBorder: {
            show: true,
            color: "#247BA0"
          },
          labels: {
            style: {
              colors: "#247BA0"
            }
          },
          title: {
            text: "Reparaciones",
            style: {
              color: "#247BA0"
            }
          }
        }
      ],
      tooltip: {
        shared: false,
        intersect: true,
        x: {
          show: true
        }
      },
      legend: {
        horizontalAlign: "left",
        offsetX: 40
      }
    };
    var chartCost = new ApexCharts(document.querySelector('#chartCost'), options);
    chartCost.render();
  }
}

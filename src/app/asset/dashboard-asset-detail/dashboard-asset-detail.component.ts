import { DatePipe } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AssetDTO } from 'src/app/model/AssetDTO';
import { IoTRequest } from 'src/app/model/IoTRequest';
import { IoTProperty } from 'src/app/model/IotProperty';
import { AssetService } from 'src/app/services/asset.service';
import { IotService } from 'src/app/services/iot.service';

@Component({
  selector: 'app-dashboard-asset-detail',
  templateUrl: './dashboard-asset-detail.component.html',
  styleUrls: ['./dashboard-asset-detail.component.css']
})

export class DashboardAssetDetailComponent implements OnInit, OnChanges {
  COLOR_VOLTAGE_SERIE = "#07F51B";
  COLOR_STREAM_SERIE = "#247BA0";
  COLOR_TEMPERATUR_SERIE = "#EE0C0C";

  assetId!: number;
  assetDTO!: AssetDTO;

  listDataIot: IoTProperty[] = [];
  groupProperties: any;

  chartVoltage!: ApexCharts;

  searchForm = new FormGroup({
    dateFromSelected: new FormControl(this.datePipe.transform(new Date(), 'yyyy-MM-ddTHH:mm'), [Validators.required]),
    dateToSelected: new FormControl(this.datePipe.transform(new Date(), 'yyyy-MM-ddTHH:mm'), [Validators.required]),
  });

  constructor(
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private iotService: IotService,
    private assetService: AssetService
  ){
    
   }

  ngOnChanges(changes: SimpleChanges): void {
    this.chartVoltage.render();
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        this.assetId = params['id']
      }
    );
    this.loadAssetData();
  }

  showChartVoltage(data: IoTProperty[]){
    var options = {
      chart: {
        height: 350,
        type: "line",
        stacked: false
      },
      dataLabels: {
        enabled: false
      },
      colors: [this.COLOR_VOLTAGE_SERIE, this.COLOR_STREAM_SERIE, this.COLOR_TEMPERATUR_SERIE],
      series: [
        {
          name: "Voltaje",
          data: this.getArrayChartData(data)
        },
        {
          name: "Corriente",
          data: this.getArrayChartData(this.groupProperties['CORRIENTE'])
        },
        {
          name: "Temperatura",
          data: this.getArrayChartData(this.groupProperties['TEMPERATURA'])
        }
      ],
      stroke: {
        width: [3, 3, 3]
      },
      plotOptions: {
        bar: {
          columnWidth: "20%"
        }
      },
      xaxis: {
        categories: this.getArrayChartCategories(data)
      },
      yaxis: [
        {
          axisTicks: {
            show: true
          },
          axisBorder: {
            show: true,
            color: this.COLOR_VOLTAGE_SERIE
          },
          labels: {
            style: {
              colors: this.COLOR_VOLTAGE_SERIE
            }
          },
          title: {
            text: "Voltaje",
            style: {
              color: this.COLOR_VOLTAGE_SERIE
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
            color: this.COLOR_STREAM_SERIE
          },
          labels: {
            style: {
              colors: this.COLOR_STREAM_SERIE
            }
          },
          title: {
            text: "Corriente",
            style: {
              color: this.COLOR_STREAM_SERIE
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
            color: this.COLOR_TEMPERATUR_SERIE
          },
          labels: {
            style: {
              colors: this.COLOR_TEMPERATUR_SERIE
            }
          },
          title: {
            text: "Temperatura",
            style: {
              color: this.COLOR_TEMPERATUR_SERIE
            }
          }
        }
      ],
      tooltip: {
        shared: false,
        intersect: true,
        x: {
          show: false
        }
      },
      legend: {
        horizontalAlign: "left",
        offsetX: 40
      }
    };
    
    this.chartVoltage = new ApexCharts(document.querySelector("#chartVoltage"), options);
    this.chartVoltage.render();
  }

  async findDashboardData(){
    var fromDate = this.searchForm.get('dateFromSelected')?.value;
    var toDate = this.searchForm.get('dateToSelected')?.value;
    var iotRequest = new IoTRequest();
    iotRequest.assetId = this.assetId;
    iotRequest.iotSensorId = 1;
    iotRequest.fromDateTime = String(fromDate);
    iotRequest.toDateTime = String(toDate);
    this.iotService.finbByAssetIdAndIotSensorIdAndDate(iotRequest).then(
      data => data.subscribe(d => {
        this.listDataIot = d.listData;
        this.groupingByProperties()
      })
    ).catch( err => console.log(err) );
  }

  loadAssetData(){
    this.assetService.getAssetFindById(this.assetId).subscribe(
      data => { this.assetDTO = data;  }
    )
  }

  groupingByProperties(){
    this.groupProperties = this.listDataIot.reduce((group : { [key: string]: IoTProperty[]}, item) => {
      if(!group[item.propertyName]){
        group[item.propertyName]=[];
      }
      group[item.propertyName].push(item);
      return group;
    }, {});

    this.showChartVoltage(this.groupProperties['VOLTAJE']);
  }

  getArrayChartData(data: IoTProperty[]): String[] {
    return data.map(d => d.propertyValue); 
  }

  getArrayChartCategories(data: IoTProperty[]): String[] {
    return data.map(d => d.dateTime.substring(d.dateTime.indexOf('T') + 1, d.dateTime.length - 3)); 
  }
}

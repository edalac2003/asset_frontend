import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssetTypeDTO } from 'src/app/model/AssetTypeDTO';
import { AssetTypeDetailDTO } from 'src/app/model/AssetTypeDetailDTO';
import { PropertyDTO } from 'src/app/model/PropertyDTO';
import { AssetTypeService } from 'src/app/services/asset-type.service';

@Component({
  selector: 'app-detail-template',
  templateUrl: './detail-template.component.html',
  styleUrls: ['./detail-template.component.css']
})
export class DetailTemplateComponent implements OnInit{

  templateId!: number;
  listProperties: AssetTypeDetailDTO[] = [];
  assetTypeDTO: AssetTypeDTO = new AssetTypeDTO;

  constructor(
    private route: ActivatedRoute,
    private assetTypeService: AssetTypeService
  ){}

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        this.templateId = params['id'];
        console.log("He recibido el Asset ID: " + this.templateId);
        this.loadTemplateInfo();
      }
    );
  }

  loadTemplateInfo(){
    this.assetTypeService.findById(this.templateId).subscribe(data => {
      this.assetTypeDTO = data;
      this.listProperties = this.assetTypeDTO.details;
      console.log(this.assetTypeDTO);
    })
  }
}

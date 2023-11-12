import { Component, OnInit } from '@angular/core';
import { AssetTypeDTO } from 'src/app/model/AssetTypeDTO';
import { AssetTypeService } from 'src/app/services/asset-type.service';

@Component({
  selector: 'list-template',
  templateUrl: './list-template.component.html',
  styleUrls: ['./list-template.component.css'],
})
export class ListTemplateComponent implements OnInit {

  listTemplate: AssetTypeDTO[] = [];

  constructor(
    private assetTypeService: AssetTypeService
  ) {}


  ngOnInit(): void {
    this.loadList();
  }

  loadList(){
    this.assetTypeService.findAll().subscribe(data => {
      this.listTemplate = data;
    });
  }
}

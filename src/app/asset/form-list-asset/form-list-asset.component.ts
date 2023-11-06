import { Component, OnInit } from '@angular/core';
import { AssetDTO } from 'src/app/model/AssetDTO';
import { CategoryDTO } from 'src/app/model/CategoryDTO';
import { AssetService } from 'src/app/services/asset.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'list-asset',
  templateUrl: './form-list-asset.component.html',
  styleUrls: ['./form-list-asset.component.css'],
})
export class FormListAssetComponent implements OnInit {

  listCategory : CategoryDTO[] = [];
  listAsset: AssetDTO[] = [];

  constructor(
    private assetService: AssetService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.findAssetList();
  }

  getCategories(){
    this.categoryService.getCategories().subscribe( data => {
      this.listCategory = data;
    });
  }

  findAssetList(){
    this.assetService.getAssetFindAll().subscribe(data => {
      this.listAsset = data;
      console.log('Asset: ' + data);
    })
  }
}

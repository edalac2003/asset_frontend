import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { AssetDTO } from 'src/app/model/AssetDTO';
import { AssetPropertyDTO } from 'src/app/model/AssetPropertyDTO';
import { AssetTypeDetailDTO } from 'src/app/model/AssetTypeDetailDTO';
import { CategoryDTO } from 'src/app/model/CategoryDTO';
import { UserDTO } from 'src/app/model/userDTO';

@Component({
  selector: 'detail-asset',
  templateUrl: './form-detail-asset.component.html',
  styleUrls: ['./form-detail-asset.component.css']
})
export class FormDetailAssetComponent implements OnInit, OnChanges {

  assetName: string = "Aire acondicionado";
  listProperties: AssetPropertyDTO[] = [];

  @Input() assetDTO: AssetDTO = {
    assetCode: '',
    purchaseValue: 0,
    purchaseDate: '',
    usefullLifetime: 0,
    userResponsible: new UserDTO,
    location: '',
    status: false,
    category: new CategoryDTO,
    properties: []
  };

  formDetail = new FormGroup({
    assetCode: new FormControl(''),
    location: new FormControl(''),
    category: new FormControl(''),
    responsible: new FormControl('')
  })

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
      this.showData();
  }

  ngOnInit(): void {
    
  }

  showData(){
    if(this.assetDTO){
      this.assetName = this.assetDTO.assetCode;
      this.formDetail.controls['assetCode'].setValue(this.assetDTO!.assetCode);
      this.formDetail.controls['location'].setValue(this.assetDTO!.location);
      this.formDetail.controls['category'].setValue(this.assetDTO!.category.name);
      this.formDetail.controls['responsible'].setValue(this.assetDTO!.userResponsible.person.firstName + ' ' + this.assetDTO!.userResponsible.person.firstName);
      this.listProperties = this.assetDTO!.properties;
    }
  }

}

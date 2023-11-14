import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { AssetDTO } from 'src/app/model/AssetDTO';
import { AssetPropertyDTO } from 'src/app/model/AssetPropertyDTO';

@Component({
  selector: 'detail-asset',
  templateUrl: './form-detail-asset.component.html',
  styleUrls: ['./form-detail-asset.component.css']
})
export class FormDetailAssetComponent implements OnInit, OnChanges {

  assetName: string = "Aire acondicionado";
  listProperties: AssetPropertyDTO[] = [];

  @Input() assetDTO!: AssetDTO;

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
      this.formDetail.controls['assetCode'].setValue(this.assetDTO!.assetCode);
      this.formDetail.controls['location'].setValue(this.assetDTO!.location);
      this.formDetail.controls['category'].setValue(this.assetDTO!.category.name);
      this.formDetail.controls['responsible'].setValue(this.assetDTO!.userResponsible.person.firstName + ' ' + this.assetDTO!.userResponsible.person.lastName);
      this.listProperties = this.assetDTO!.properties;
    }
  }

}

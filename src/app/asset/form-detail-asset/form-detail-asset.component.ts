import { Component, Input } from '@angular/core';

@Component({
  selector: 'detail-asset',
  templateUrl: './form-detail-asset.component.html',
  styleUrls: ['./form-detail-asset.component.css']
})
export class FormDetailAssetComponent {

  assetName: string = "Aire acondicionado";;

  constructor() { }


}

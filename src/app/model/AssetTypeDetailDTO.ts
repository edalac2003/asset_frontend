import { AssetTypeDTO } from "./AssetTypeDTO";
import { PropertyDTO } from "./PropertyDTO";

export class AssetTypeDetailDTO{
    id: number = 0;
    assetTypeId: number = 0;
    propertyId: number = 0;
    property: PropertyDTO = new PropertyDTO();

    constructor(){}
}
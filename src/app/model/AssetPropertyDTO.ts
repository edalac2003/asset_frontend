import { PropertyDTO } from "./PropertyDTO";
 
export class AssetPropertyDTO{
    id: number | undefined;
    assetId: number | undefined;
    property: PropertyDTO = new PropertyDTO();
    value: string | undefined;
 
    constructor() {}
}
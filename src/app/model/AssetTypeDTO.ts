import { AssetTypeDetailDTO } from "./AssetTypeDetailDTO";
import { CategoryDTO } from "./CategoryDTO";
import { PropertyDTO } from "./PropertyDTO";

export class AssetTypeDTO{
    id: number = 0;
    name: string | undefined;
    category: CategoryDTO | undefined;
    details: Array<AssetTypeDetailDTO> = [];

    constructor(){}

}
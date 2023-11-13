import { AssetTypeDetailDTO } from "./AssetTypeDetailDTO";
import { CategoryDTO } from "./CategoryDTO";

export class AssetTypeDTO{
    id: number = 0;
    name: string | undefined;
    category: CategoryDTO | undefined;
    details: Array<AssetTypeDetailDTO> = [];

    constructor(){}

}
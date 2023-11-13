import { AssetPropertyDTO } from "./AssetPropertyDTO";
import { CategoryDTO } from "./CategoryDTO";
import { PropertyDTO } from "./PropertyDTO";

export interface AssetDTO{
    id: Number;
    assetCode: string;
    purchaseValue: number;
    purchaseDate: string;
    usefullLifetime: number;
    userResponsible: number;
    location: string;
    status: boolean;
    category: CategoryDTO;
    properties: Array<AssetPropertyDTO>;
}
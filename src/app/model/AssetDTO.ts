import { CategoryDTO } from "./CategoryDTO";
import { PropertyDTO } from "./PropertyDTO";

export interface AssetDTO{
    id: Number;
    assetCode: string;
    purchaseValue: Number;
    purchaseDate: string;
    usefullLifetime: Number;
    userResponsible: Number | string;
    location: string;
    status: boolean;
    category: CategoryDTO;
    properties: Array<PropertyDTO>;
}
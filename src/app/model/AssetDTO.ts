import { AssetPropertyDTO } from "./AssetPropertyDTO";
import { CategoryDTO } from "./CategoryDTO";
import { PropertyDTO } from "./PropertyDTO";
import { UserDTO } from "./userDTO";

export interface AssetDTO{
    id: Number;
    assetCode: string;
    purchaseValue: number;
    purchaseDate: string;
    usefullLifetime: number;
    userResponsible: UserDTO;
    location: string;
    status: boolean;
    category: CategoryDTO;
    properties: Array<AssetPropertyDTO>;
}
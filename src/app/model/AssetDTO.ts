import { AssetPropertyDTO } from "./AssetPropertyDTO";
import { CategoryDTO } from "./CategoryDTO";
import { UserDTO } from "./userDTO";

export interface AssetDTO{
    id?: number;
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
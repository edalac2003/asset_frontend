import { CityDTO } from "./CityDTO";
import { IdentificationTypeDTO } from "./IdentificationTypeDTO";

export class PersonDTO{
    id: number | undefined;
	firstName: string | undefined;
	lastName: string | undefined;
	birthday: string | undefined;
	genre: string | undefined;
	identificationType: IdentificationTypeDTO = new IdentificationTypeDTO;	
	identificationNumber: string | undefined;	
	city: CityDTO = new CityDTO;	
	status: boolean = false;

    constructor(){}
}
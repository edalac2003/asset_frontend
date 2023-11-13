import { PersonDTO } from "./PersonDTO";

export class UserDTO{
    id: number = 0;
	userName: string = '';
	person: PersonDTO = new PersonDTO;
	
	constructor(){ }
}
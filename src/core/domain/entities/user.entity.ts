import { GenericEntity } from "./generic-entities/audit-entity.js";

export class User extends GenericEntity {

    id: number;
    email: string;
    password: string;  
}

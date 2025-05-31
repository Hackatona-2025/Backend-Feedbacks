import { Role } from '../../../domain/entities/user';


export interface CreateUserDTO {
    name: string;
    email: string;
    password: string;
    groupId: string;
    isAdmin: Role;
}

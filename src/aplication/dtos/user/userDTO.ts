import {Role} from 'src/domain/entities/user';
export interface UserDTO {
    id?: string;
    name: string;
    email: string;
    password: string;
    groupId: string;
    description?: string;
    coins?: number;
    role?: Role;
}
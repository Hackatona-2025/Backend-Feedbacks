//import { Group } from './group';
//import { Feedback } from './feedback';
//iimport { Reaction } from './reaction';
//iimport { Product } from './product';
import { createId } from "@paralleldrive/cuid2"

export enum Role {
    USER = 'USER',
    ADMIN = 'ADMIN',
}

interface UserInterface {
    name:       string
    email:      string
    password:   string
    groupId :   string
}


export class User {
    id: string;
    name: string;
    email: string;
    password: string;
    description: string = "";
    groupId : string;
    coins: number = 0;
    role: Role = Role.USER;
    
    
    constructor(user: UserInterface, id?: string){
        this.id = id || createId();
        this.name = user.name;
        this.email = user.email;
        this.password = user.password;
        this.groupId = user.groupId;
    }

    getId(): string {
        return this.id;
    }

    setId(id: string): void {
        this.id = id;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getEmail(): string {
        return this.email;
    }

    setEmail(email: string): void {
        this.email = email;
    }

    getPassword(): string {
        return this.password;
    }

    setPassword(password: string): void {
        this.password = password;
    }

    getDescription(): string {
        return this.description;
    }

    setDescription(description: string): void {
        this.description = description;
    }


    getCoins(): number {
        return this.coins;
    }

    setCoins(coins: number): void {
        this.coins = coins;
    }

    getRole(): Role {
        return this.role;
    }

    setRole(role: Role): void {
        this.role = role;
    }

 

    toJson() {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            description: this.description,
            groupId: this.groupId,
            coins: this.coins,
            role: this.role,
        };
    }
}
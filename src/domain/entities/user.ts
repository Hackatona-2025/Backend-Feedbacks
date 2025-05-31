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

    
    public getId(): string {
        return this.id;
    }

    public setId(id: string): void {
        this.id = id;
    }

    public  getName(): string {
        return this.name;
    }

    public  setName(name: string): void {
        this.name = name;
    }

    public  getEmail(): string {
        return this.email;
    }

    public  setEmail(email: string): void {
        this.email = email;
    }

    public getPassword(): string {
        return this.password;
    }

    public setPassword(password: string): void {
        this.password = password;
    }

    public getDescription(): string {
        return this.description;
    }

    public setDescription(description: string): void {
        this.description = description;
    }


    public getCoins(): number {
        return this.coins;
    }

    public setCoins(coins: number){
        this.coins = coins;
    }

    public getRole(): Role {
        return this.role;
    }

    public setRole(role: Role): void {
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
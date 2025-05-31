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
    group ?:    Group
}


export class User {
    id: string;
    name: string;
    email: string;
    password: string;
    description: string = "";
    group ?: Group;
    coins: number = 0;
    role: Role = Role.USER;
    feedbacks: Feedback[] = [];
    reactions: Reaction[] = [];
    products: Product[] = [];

    constructor(user: UserInterface, id?: string){
        this.id = id || createId();
        this.name = user.name;
        this.email = user.email;
        this.password = user.password;
        this.group = user.group;
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

    getGroup(): Group | undefined {
        return this.group;
    }

    setGroup(group: Group): void {
        this.group = group;
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

    getFeedbacks(): Feedback[] {
        return this.feedbacks;
    }

    setFeedbacks(feedbacks: Feedback[]): void {
        this.feedbacks = feedbacks;
    }

    getReactions(): Reaction[] {
        return this.reactions;
    }

    setReactions(reactions: Reaction[]): void {
        this.reactions = reactions;
    }

    getProducts(): Product[] {
        return this.products;
    }

    setProducts(products: Product[]): void {
        this.products = products;
    }

    toJson() {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            description: this.description,
            group: this.group ? (typeof this.group === 'object' && 'toJson' in this.group ? this.group.toJson() : this.group) : undefined,
            coins: this.coins,
            role: this.role,
            feedbacks: this.feedbacks.map(fb => typeof fb === 'object' && 'toJson' in fb ? fb.toJson() : fb),
            reactions: this.reactions.map(r => typeof r === 'object' && 'toJson' in r ? r.toJson() : r),
            products: this.products.map(p => typeof p === 'object' && 'toJson' in p ? p.toJson() : p),
        };
    }
}
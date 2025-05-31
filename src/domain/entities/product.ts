import { createId } from "@paralleldrive/cuid2";


interface ProductInterface {
    name: string;
    description?: string;
    image?: string;
    cost: number;
    userId: string;
}

export class Product {
    id: string;
    name: string;
    description: string = "";
    image?: string;
    cost: number;
    userId: string;

    constructor(product: ProductInterface, id?: string) {
        this.id = id || createId();
        this.name = product.name;
        this.description = product.description || "";
        this.image = product.image;
        this.cost = product.cost;
        this.userId = product.userId;
    }

    public getId(): string {
        return this.id;
    }

    public setId(id: string): void {
        this.id = id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getDescription(): string {
        return this.description;
    }

    public setDescription(description: string): void {
        this.description = description;
    }

    public getImage(): string | undefined {
        return this.image;
    }

    public setImage(image: string | undefined): void {
        this.image = image;
    }

    public getCost(): number {
        return this.cost;
    }

    public setCost(cost: number): void {
        this.cost = cost;
    }

    public getUserId(): string {
        return this.userId;
    }

    public setUserId(userId: string): void {
        this.userId = userId;
    }

    public toJson() {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            image: this.image,
            cost: this.cost,
            userId: this.userId
        };
    }
}

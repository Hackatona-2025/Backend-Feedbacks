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

    getDescription(): string {
        return this.description;
    }

    setDescription(description: string): void {
        this.description = description;
    }

    getImage(): string | undefined {
        return this.image;
    }

    setImage(image: string | undefined): void {
        this.image = image;
    }

    getCost(): number {
        return this.cost;
    }

    setCost(cost: number): void {
        this.cost = cost;
    }

    getUserId(): string {
        return this.userId;
    }

    setUserId(userId: string): void {
        this.userId = userId;
    }

    toJson() {
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

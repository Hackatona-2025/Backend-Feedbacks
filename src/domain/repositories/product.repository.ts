import { Product } from "../entities/product";

export abstract class ProductRepository {
    abstract create(product: Product): Promise<Product>;
    abstract findById(id: string): Promise<Product | null>;
    abstract findAll(): Promise<Product[]>;
    abstract update(id: string, product: Product): Promise<Product>;
    abstract delete(id: string): Promise<void>;
    abstract findByUserId(userId: string): Promise<Product[]>;
} 
import { Injectable } from "@nestjs/common";
import { Product } from "../../domain/entities/product";
import { ProductRepository } from "src/domain/repositories/product.repository";
import { createProductDto } from "../dtos/product/createProductDto";

@Injectable()   
export class ProductUseCase {
    constructor(private readonly productRepository: ProductRepository) {}

    async createProduct(dto: createProductDto): Promise<Product> {
        // implementation here
        return {} as Product;
    }

    async getProductById(id: string): Promise<Product | null> {
        // implementation here
        return null;
    }

    async getAllProducts(): Promise<Product[]> {
        // implementation here
        return [];
    }

    async updateProduct(id: string, dto: Partial<createProductDto>): Promise<Product> {
        // implementation here
        return {} as Product;
    }

    async deleteProduct(id: string): Promise<void> {
        // implementation here
    }

    async getProductsByUserId(userId: string): Promise<Product[]> {
        // implementation here
        return [];
    }
}
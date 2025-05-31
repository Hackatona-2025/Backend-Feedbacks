import { Injectable, Inject } from "@nestjs/common";
import { Product } from "../../domain/entities/product";
import { ProductRepository } from "src/domain/repositories/product.repository";
import { createProductDto } from "../dtos/product/createProductDto";

@Injectable()   
export class ProductUseCase {
    constructor(@Inject ('ProductRepository')
        private readonly productRepository: ProductRepository) {}

    async createProduct(dto: createProductDto): Promise<Product> {
        const product = new Product({
            name: dto.name,
            description: dto.description,
            image: dto.image,
            cost: dto.cost,
            userId: dto.userId,
        });
        return await this.productRepository.create(product);
    }

    async getProductById(id: string): Promise<Product | null> {
        if (!id) {
            throw new Error("Product ID is required");
        }
        return this.productRepository.findById(id);
    }

    async getAllProducts(): Promise<Product[]> {
        return await this.productRepository.findAll();
    }

    async updateProduct(id: string, dto: Partial<createProductDto>): Promise<Product> {
        if (!id) {
            throw new Error("Product ID is required for update");
        }
        const product = await this.productRepository.findById(id);
        if (!product) {
            throw new Error(`Product with ID ${id} not found`);
        }

        // Update product properties based on dto
        Object.assign(product, dto);

        return this.productRepository.update(id, product);
    }

    async deleteProduct(id: string): Promise<void> {
        if (!id) {
            throw new Error("Product ID is required");
        }
        return this.productRepository.delete(id);
    }

    async getProductsByUserId(userId: string): Promise<Product[]> {
        if (!userId) {
            throw new Error("User ID is required");
        }
        return this.productRepository.findAll().then(products => 
            products.filter(product => product.userId === userId)
        );
    }
}
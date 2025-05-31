import { Injectable } from "@nestjs/common";
import { Product } from "src/domain/entities/product";
import { ProductRepository } from "src/domain/repositories/product.repository";
import { PrismaService } from "src/persistence/config/prisma-service";

@Injectable()
export class PrismaProductRepository implements ProductRepository {

    constructor(private readonly prisma: PrismaService) {}

    async create(product: Product): Promise<Product> {
        // implementation here
        return {} as Product;
    }

    async findById(id: string): Promise<Product | null> {
        // implementation here
        return null;
    }

    async findAll(): Promise<Product[]> {
        // implementation here
        return [];
    }

    async update(id: string, product: Product): Promise<Product> {
        // implementation here
        return {} as Product;
    }

    async delete(id: string): Promise<void> {
        // implementation here
    }

    async findByUserId(userId: string): Promise<Product[]> {
        // implementation here
        return [];
    }
    
}
import { Injectable } from "@nestjs/common";
import { Product } from "src/domain/entities/product";
import { ProductRepository } from "src/domain/repositories/product.repository";
import { PrismaService } from "src/persistence/config/prisma-service";
import { ProductMapper } from "../mappers/product.mapper";

@Injectable()
export class PrismaProductRepository implements ProductRepository {

    constructor(private readonly prisma: PrismaService) {}

    async create(product: Product): Promise<Product> {
        return await this.prisma.product.create({
            data: ProductMapper.toPrisma(product),
        });
    }

    async findById(id: string): Promise<Product | null> {
        return await this.prisma.product.findUnique({
            where: { id },
        });
    }

    async findAll(): Promise<Product[]> {
        return await this.prisma.product.findMany();
    }

    async update(id: string, product: Product): Promise<Product> {
        return await this.prisma.product.update({
            where: { id },
            data: ProductMapper.toPrisma(product),
        });
    }

    async delete(id: string): Promise<void> {
        await this.prisma.product.delete({
            where: { id },
        });
    }

    async findByUserId(userId: string): Promise<Product[]> {
        return await this.prisma.product.findMany({
            where: { userId },
        });
    }
    
}
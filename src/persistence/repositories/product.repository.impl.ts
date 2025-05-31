import { Injectable } from "@nestjs/common";
import { Product } from "src/domain/entities/product";
import { ProductRepository } from "src/domain/repositories/product.repository";
import { PrismaService } from "src/persistence/config/prisma-service";
import { ProductMapper } from "../mappers/product.mapper";

@Injectable()
export class PrismaProductRepository implements ProductRepository {

    constructor(private readonly prisma: PrismaService) {}

    async create(product: Product): Promise<Product> {
        const prismaProduct = ProductMapper.toPrisma(product);
        const createdProduct = await this.prisma.product.create({
            data: prismaProduct,
        });
        return ProductMapper.toDomain(createdProduct);
    }

    async findById(id: string): Promise<Product | null> {
        const product = await this.prisma.product.findUnique({
            where: { id },
        });
        if (!product) {
            return null;
        }
        return ProductMapper.toDomain(product);
    }

    async findAll(): Promise<Product[]> {
        const products = await this.prisma.product.findMany();
        return products.map(product => ProductMapper.toDomain(product));
    }

    async update(id: string, product: Product): Promise<Product> {
        const prismaProduct = ProductMapper.toPrisma(product);
        const updatedProduct = await this.prisma.product.update({
            where: { id },
            data: prismaProduct,
        });
        return ProductMapper.toDomain(updatedProduct);
    }

    async delete(id: string): Promise<void> {
        await this.prisma.product.delete({
            where: { id },
        });
    }

}